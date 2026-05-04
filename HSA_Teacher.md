# HSA - Teacher

## Module - Register
### Test ID - REG
### Precondition

### Test Data


### Test Case

| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| REG-00 | 




## Module - Login
### Test ID - LOGIN
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-0 | User is on Login Page |

### Test Data
- valid email: sangam.karki+CE1@innovatetech.co
- valid password: Temp@1234

### Test Case

| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| LOGIN-00 | Login with valid email & password | PRE-0 | - Enter valid email<br>- Enter valid password<br>- Click Login | User should be redirected to dashboard page. | User redirected to dashboard page. | PASS |
| LOGIN-01 | Login with invalid email & valid password | PRE-0 | Enter invalid email<br>- Enter valid password<br>- Click login | Error message"Your Email or Password is Invalid." should display. | Error message "Your Email or Password is Invalid." displayed. | PASS |
| LOGIN-02 | Password Masking | PRE-0 | - Enter valid password<br>- Click on eye icon. | Password should be visible | Password is visible | PASS |
| LOGIN-03 | Verify email pattern | PRE-0 | - Enter invalid email in random pattern | Under the email field, an error message "Invalid email address" should be displayed. | Error message "Invalid email address" displayed under the email field. | PASS |
| LOGIN-04 | Login with valid email and empty password field | PRE-0 | - Enter valid email<br>- leave password field empty<br>- Click Log in | Error message"Required" under password field should be visible. | Error message "Required" visible under password field. | PASS |


