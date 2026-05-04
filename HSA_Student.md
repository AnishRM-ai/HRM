# HSA Student

## Module - Signup
## Test ID - SIGNUP
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-0 | User is on signup page. | 

### Test Data
- invalid password: password123
- invalid email: asfomg.com


### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| SIGNUP-00 | Signup using valid credential | PRE-0 | - Enter Full name<br>- Enter Email address<br>- Enter valid Password<br>- Select Level<br>- Select country<br>- Click Sign Up | | | PASS | 
| SIGNUP-01 | Invalid Password  | PRE-0 | - Enter valid name, email<br>- Enter invalid password<br>- Select level & country<br>- Click Sign up | Error message indicating certain pattern should be displayed below the password field. | Error message indicating certain pattern is displayed below the password field. | PASS |
| SIGNUP-02 | Signup with empty fullname and valid credentials | PRE-0 | - Leave fullname field empty<br>- Fill up required details such as email, password, level, and country. | "Required" message below the fullname field should display | "Required" message below the fullname field displayed. | PASS | 
| SIGNUP-03 | Verify incorrect email pattern | PRE-0 | - Enter incorrect email<br>- Fill up remaining details with valid credentials. | "Invalid email address" message should be displayed below the email address field. | "Invalid email address" message is displayed below the email address field. | PASS |
| SIGNUP-04 | Full name character range | PRE-0 | - Enter full name over 125 characters. | Max limit message should be displayed below the full name field. | Max limit message is displayed below the full name field. | PASS |
| SIGNUP-05 | Password less than 8 character | PRE-0 | - Enter password less than 8 character. | Password invalid message should display under password field. | Password invalid message is displayed under password field. | PASS |
| SIGNUP-06 | Password masking | PRE-0 | - Enter password<br- Click on eye icon | Password should be visible upon clicking on eye icon | Password is visible upon clicking on eye icon. | PASS |
