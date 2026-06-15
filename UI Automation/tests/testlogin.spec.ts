import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';

test("Login with valid credentials", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.fillCred('admin@example.com', 'Admin@123');
    await expect(page).toHaveURL('/home');
    
});

test("Login with valid email and invalid password.", async({page})=> {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.fillCred('admin@example.com', 'Admin@1234');
    await expect(page.getByText('Invalid Username or Password. Please try again.')).toBeVisible();
});

test("Password is visible upon interacting with masking button.", async({page})=> {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.email.fill('admin@example.com');
    await loginpage.password.fill('Admin@12344');

    // Initially masked
    await loginpage.expectPasswordMasked();

    // Toggle visibility
    await loginpage.togglePasswordVisibility();

    // Now visible
    await loginpage.expectPasswordVisible();
    
});

test("Login with invalid email and valid password", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.fillCred('wrong@example.com', 'Admin@123');
    await expect(page.getByText('Invalid Username or Password. Please try again.')).toBeVisible();
});

test("Login with empty credentials", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    // Check for validation messages
    await expect(page.getByRole('button', {name:'Log In'})).toBeDisabled();
});

test("Login with empty email only", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.password.fill('Admin@123');
    await expect(page.getByRole('button', {name:'Log In'})).toBeDisabled();
});

test("Login with empty password only", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.email.fill('admin@example.com');
    await expect(page.getByRole('button', {name:'Log In'})).toBeDisabled();
});

test("Password masking toggles back when clicked again", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.password.fill('Admin@12344');
    
    // Initially masked
    await loginpage.expectPasswordMasked();
    
    // Toggle to visible
    await loginpage.togglePasswordVisibility();
    await loginpage.expectPasswordVisible();
    
    // Toggle back to masked
    await loginpage.togglePasswordVisibility();
    await loginpage.expectPasswordMasked();
});


test("Password field should not show plain text in DOM when masked", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.password.fill('Admin@12344');
    
    // Check input type is password
    const inputType = await loginpage.password.getAttribute('type');
    expect(inputType).toBe('password');
});

test("Login page elements are visible", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    
    await expect(loginpage.email).toBeVisible();
    await expect(loginpage.password).toBeVisible();
    await expect(loginpage.loginbtn).toBeVisible();
    await expect(page.getByText('Forgot Password?')).toBeVisible(); 
});

test("Email field should validate format", async({page}) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.fillCred('invalid-email', 'Admin@123');
    await expect(page.getByText('Invalid email address')).toBeVisible();
});

