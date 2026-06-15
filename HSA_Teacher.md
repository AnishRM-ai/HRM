# HSA - Teacher

## Module - Login
### Test ID - LOGIN
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-0 | User is on Login Page & registered. |

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
| LOGIN-05 | SQL injection | PRE-0 | - Enter SQL Injection script<br>- click login | Email field should display invalid email message under email field. | Email field displayed invalid email message under email field. | PASS |




## Module - HSA Academic Queries
### Test ID - ACAQUE
### Precondition 
| ID | Precondition |
|----|--------------|
| PRE-01 | User is logged in & on Home Page |
| PRE-02 | Ticket is already created. | 

### Test Data
- ticket id: K-P264876


### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| ACAQUE-00 | Verify Page Loads | PRE-01 | - Observe the Home page | Page should load and display its contents. | Page loaded and displayed its contents. | PASS |
| ACAQUE-01 | Verify Queries lead to detailed page. | PRE-01 | - Click on Question from the list<br>- View the questions and details | User should be redirected to a detailed page of selected query. | User redirected to a detailed page of selected query. | PASS |
| ACAQUE-02 | Send Approval | PRE-01 | - Click on query from the list<br> Enter a TC amount in a charge field.<br>- Click Send Approval<br>- Click Confirm Send | Success message "Request success" should be displayed. | Success message "Request success" is dispalyed. | PASS |
| ACAQUE-03 | Reject Approval | PRE-01 | - Click on query from the list<br>- Click Reject<br>- Enter a message<br>- Click confirm send. | "Rejected. Thank You for Response" success message should be displayed. | "Rejected. Thank You for Response" success message displayed. | PASS |
| ACAQUE-04 | Reject messsage empty | PRE-01 | - Click on question from the list<br>- Click on reject<br>- Leave message field empty<br>- Click Send | Send button should be disable upon empty message field. | Send button is disabled in empty message field. | PASS | 
| ACAQUE-05 | Search question using ticket id | PRE-01, PRE-02 | - Click on Field<br>- Enter ticket id | Question should be visible based on ticket id. | Question is visible based on ticket | PASS |
| ACAQUE-06 | Search query by question | PRE-01, PRE-02 | - Click on Field<br>- Enter question | Query related to question should be visible. | Query related to question is visible. | PASS |
| ACAQUE-07 | Verify Pagination functionality | PRE-01 | - Scroll down to the bottom<br>- Navigate with pagination menu | Data should change upon interacting with pagination button. | Data changed upon interacting with paginatio button. | PASS |
| ACAQUE-08 | Navigate to My Query | PRE-01 | - Click on My Query | My Query page data should display. | My Query page displayed. | PASS |
| ACAQUE-09 | Verify refresh button functionality | PRE-01 | - Search any question<br>- Click on refresh | Data should be in default order | Data is in default order | PASS | 


## Module - Resources
### Test ID - RESOURCE
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-03 | User is on Resource Page. |
| PRE-04 | Resource already created. |

### Test Data
- folder name: MCR
- resource name: SlowChemical
- renamed folder: KISS
- 

### Test Case

| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| RESOURCE-00 | Add new resource | PRE-03 | - Click new folder<br>- Enter folder name<br>- Click Save | Success message should be displayed & Resource should be created. | Success message displayed & resources created. | PASS |
| RESOURCE-01 | Upload file | PRE-03 | - Click on Upload<br>- Select file<br>- Enter resource name<br>- upload attachment<br>- Click Save | "File Uploaded successfully" message should be displayed & File should be uploaded successfully. | "File Uploaded successfully" message displayed & file uploaded successfully. | PASS |
| RESOURCE-02 | Rename Folder | PRE-03, PRE-04 | - Select a folder<br>- Click action button<br>- Click rename<br>- Enter a different name<br>- Click Save | Folder name should be renamed and success message should be displayed. | Folder name renamed and success message be displayed. | PASS |
| RESOURCE-03 | Delete Folder | PRE-03, PRE-04 | - Select a resource and click action button<br>- Click delete<br>- Click Confirm deletion | Resource should be deleted and success message should be displayed. | Resource is deleted and success message is displayed. | PASS |
| RESOURCE-04 | Download File | PRE-03 | - Select a resource and click action button<br>- Click Download | a tab should open to save file location and download successfully. | a tab opened to save file location and downloaded successfully. | PASS |
| RESOURCE-05 | Search Resource using searchbar | PRE-04 | - Click on search bar<br>- Enter the name of resource | Searched item should be visible upon search. | Searched item is visible upon search. | PASS |
| RESOURCE-06 | Search resources error handling | PRE-04 | - Enter a name of resource that is not available | Proper not found message should be displayed. | Proper not found message is displayed. | PASS |
| RESOURCE-07 | Navigate to Global resource page | PRE-04 | - Click on Global Resources | User should be redirected to global resources. | User is redirected to global resources. | PASS |


## Module - Task History
### Test ID - TASKH
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-05 | User is on Task history page. |

### Test Data

### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| TASKH-00 | Verify Page loads the data | | - Navigate to Task history page | Page should be loaded and all data and its component should be visible. | Page is loaded and all data and its component is visible | PASS |
| TASKH-01 | View Task detail on Graded section | PRE-05 | - Select a task from the list<br>- Click that task | It should display the details such as grade, answers, status, student information, ticket id. | Displayed the details such as grade, answers, status, student infromation, ticket id. | PASS |
| TASKH-02 | View Ungraded Task History | PRE-05 | - Click on Ungraded | System should display filtered ungraded tasks. | System displayed filtered ungraded tasks. | PASS |


## Module - My Profile
### Test Id - PROFILE
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-05 | User is logged in |
| PRE-06 | User is on Profile page |

### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| PROFILE-00 | Navigate to profile page | PRE-05 | - Click on Round Circle icon in nav bar<br>- Click on My Profile | User should be navigated to my profile page. | User is nagivated to my profile page. | PASS |
| PROFILE-01 | Update Full name | PRE-05, PRE-06 | - Click on full name<br>- Make Changes in name field<br> - Click Save profile | "Profile Updated Successfully" message should be displayed and name should be updated. | "Profile Updated Successfully" message displayed and name updated. | PASS |
| PROFILE-02 | Update Email address | PRE-05, PRE-06 | - Click on Change Email Address<br> - Enter new email & password<br>- Click Save | Email changed success message should be displayed and email should be updated. | Email changed success message displayed and email updated. | PASS |
| PROFILE-03 | Password change | PRE-05, PRE-06 | - Click on password tab<br>- Enter current password<br>- Enter new password & Re enter the same<br>- Change Password | Password change success message should be displayed and password should be changed successfully. | PASS |


## Module - Logout
### Test ID - LOGOUT
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-07 | User is logged in |

### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| LOGOUT | Logout user | PRE-07 | - Click on Profile icon<br>- Click logout | User should be logged out. | User is logged out. | PASS |
