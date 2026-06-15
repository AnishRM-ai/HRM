import { Page, expect, Locator, ExpectMatcherUtils } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginbtn: Locator;
    readonly forgotpassword: Locator;
    readonly maskedbtn: Locator;

    constructor(page:Page){
        this.page = page;

        this.email = page.getByPlaceholder("Enter email");
        this.password = page.getByPlaceholder("Enter password");
        this.loginbtn = page.getByRole('button', {name:'Log In'});
    
        this.forgotpassword = page.getByRole('button', {name: 'Forgot Password'});
        this.maskedbtn = page.locator('._button_duehh_5 _button--icon_duehh_26    ._button--small_duehh_50 _input__icon--right_jv9kr_122');

    };

    async goto(){
        await this.page.goto('/login');
    }

    async fillCred(email:string, password:string){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginbtn.click();
    }

     getPasswordToggle(): Locator {
        return this.password.locator('xpath=following-sibling::button');
    }

    async togglePasswordVisibility() {
        await this.getPasswordToggle().click();
    }

     async expectPasswordMasked() {
        await expect(this.password).toHaveAttribute('type', 'password');
    }

    async expectPasswordVisible() {
        await expect(this.password).toHaveAttribute('type', 'text');
    }



}
