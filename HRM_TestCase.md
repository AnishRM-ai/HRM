# ING HRM Test Cases

## Module - Login
### TestID - LOGIN
### Precondition

| ID | Precondition |
|----|--------------|
| PRE-0 | User is on Login Page. |

### TestData 
- valid email: admin@example.com
- valid password: admin@123
- invalid email: admin1@example.com
- invalid password: admin123
- email in improper format: admin123.com
### Test Case

| Test ID | Description/Scenario | Precondition | Test Steps | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|------------|-----------------|---------------|--------|
| LOGIN-00 | Login with valid email and password | PRE-0 | - Enter valid email<br>- Enter valid password <br>- Click login button or hit enter button | System should redirect user to dashboard page | System redirected user to dashboard page. | PASS |
| LOGIN-01 | Login with valid email and invalid password | PRE-0 | - Enter valid email<br>- Enter invalid password<br>- Click login button | Toast error message should be displayed with error message "Invalid Username or Password. Please try again." | Toast error message "Invalid Username or Password. Please try again." displayed.| PASS |
| LOGIN-02 | Login with empty email and valid password | PRE-0 | - Leave email field empty<br>- Enter valid password<br>- Click login button | Error message just below the email field should display "Invalid email address" error text | "Invalid email address" message displayed under the email field | PASS |
| LOGIN-03 | Login with valid email and empty password field | PRE-0 | - Enter valid email<br>- Leave password field empty.<br>- Click login button | Login button should be disabled until the password is entered. | Login button is disabled when password field is empty. | PASS |
| LOGIN-04 | Password Masking | PRE-0 |  - Click password masking icon which looks like an eye. | Password should be visible to the user. | Password is visible to the user. | PASS |
| LOGIN-05 | Improper email format | PRE-0 | - Enter email in improper format | System should read and detect the email format and display "Invalid email address" just below the email field | System detected the email format and displayed "Invalid email address" just below the email field | PASS |
| LOGIN-06 | SQL injection | P0 | - Enter valid email<br> -Enter ' OR 1 = 1 -- just beside the email<br>- Enter valid password.<br>- Click login | System should display error message "Invalid email address" just below the email field. | System displayed the error message "Invalid email address" just below the email field. | PASS |
| LOGIN-07 | Multiple login attempts with invalid credentials | P0 | - Enter invalid email or password<br>- Click login multiple times | System should lock that particular account and display 'Account locked' message. | System displayed 'Account locked' message upon multiple invalid logins. | PASS |




## Module - Navigation Bar
## TestID - NAV
### Precondition
- User is logged in and in a homepage.

### Test Case
| Test ID | Description/Scenario | Precondition | Test Steps | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|------------|-----------------|---------------|--------|
| NAV-00 | Navigate to Employee. | | -Click Employee | System should navigate user to employee page. | System navigated user to employee page. | PASS |
| NAV-01 | Navigate to Team. | | -Click Team | System should navigate user to Team page. | System navigated user to Team page. | PASS |
| NAV-02 | Verify Leave and Fieldwork Drop down menu works. | | -Click Verify Leave and Fieldwork menu | Navbar should dropdown and display two menu <br> Leave Request, Leave Type respectively. | System Displayed dropdown menu and displayed two menu<br>Leave Request and Leave Type. | PASS |
| NAV-03 | Navigate to Leave Request | | - Click Leave and Fieldwork menu<br>- Click Leave Request | Page should navigate to Leave Request page. | Page navigated to Leave Request Page. | PASS |
| NAV-04 | Navigate to Leave Type | | - Click Leave and Fieldwork menu<br>- Click Leave Type | Page should navigate to Leave Type page. | Page navigated to Leave Type Page. | PASS |
| NAV-05 | Navigate to Calendar. | | -Click Calendar | System should navigate user to calendar page. | System navigated user to calendar page. | PASS |
| NAV-06 | Verify Config menu drop down menu works. | | -Click Config menu | Upon clicking on config menu, 3 dropdown menu should be display which are:<br> -Account Lockout<br>-Organization<br>-Leave Balance. | System navigated user to employee page. | PASS |
| NAV-07 | Navigate to Account Lockout Page | | - Click Config menu<br>- Click Lockout | Page should navigate to Lockout Page | Page navigated to Lockout Page | PASS |
| NAV-07 | Navigate to Account Organization Page | | - Click Config menu<br>- Click Organization | Page should navigate to Organization Page | Page navigated to Organization Page | PASS |
| NAV-07 | Navigate to Account Leave Balance Page | | - Click Config menu<br>- Click Leave Balance | Page should navigate to Leave Balance Page | Page navigated to Leave Balance Page | PASS |


## Module - Dashboard-HomePage
## TestID - DASHHOME
### Precondition
**Module Precondition** : **User is logged in**
| ID | Precondition |
|----|--------------|
| PRE-01 | User is on homepage |

### Test Data
- User Approved Aayusha

### Test Case
| Test ID | Description/Scenario | Precondition | Test Steps | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|------------|-----------------|---------------|--------|
| DASHHOME-00 | Verify HomePage loads after login. | | - Login the account | After login, homepage should be load and display the dashboard navigation. | Homepage is loaded after loggin and dashboard, navigation bars are displayed. | PASS |
| DASHHOME-01 | Verify all section is displayed | PRE-01 | - Scroll down and view all the components. | All the components should be visible and working. | All the components are visible and working. | PASS |
| DASHHOME-02 | Verify Employee status component is visible and displays the status | PRE-01 | View the employee status component | Employee status along with the details such as Total Employees should be displayed. | Employee status such as Total Employees details are displayed. | PASS | 
| DASHHOME-03 | Verify Approve leave component displays upcoming details | | - Click upcoming on Approve leaves component. | Component should displays upcoming leave if there is any or no upcoming text if empty | Upcoming leave displayed | PASS |
| DASHHOME-04 | Verify Approve WFH component displays upcoming details | | - Click upcoming on WFH component. | Component should displays upcoming WFH if there is any or no upcoming text if empty | Upcoming leave displayed | PASS |
| DASHHOME-06 | Pending Leave and Field Work Requests Component Visibility | | Scroll down and observe pending leave component | Component should have list of user including details such as user's name, time, supervisor and option to view user based on out and about, WFH, Leave. | Component displayed the list of user along with details such as user's name, time, supervisor and option to view user based on out and about, WFH, Leave. | PASS |
| DASHHOME-07 | User's leave or field work request information | | - Scroll down to leave or field work request component<br>- Click on user<br> | System should redirect to leave request page and prompt a approval modal for approval or disapproval. | System redirected to leave request page and prompted user a approval modal for approval or disapproval | PASS |
| DASHHOME-08 | Approval Action from Pending Leave component. | | - Go to Leave request component<br>- Click on user<br>- Click approve | System should approve the user and display success message "You have successfully approved Out and About request of Aayusha". | System approved the user and displayed success message "You have successfully approved Out and About request of Aayusha". | PASS |
| DASHHOME-09 | Verify list of pending user based on WFH, Leave, Out and About | | - Scroll to Pending Leave and Field Work Requests component.<br>- Click on WFH first<br>- Click Leave<br>- Click Out and About | Upon clicking on various option such as WFH, Leave, Out and About, it should display user based on that. | Upon clicking on various option such as WFH, Leave, Out and ABout, it displayed user based on that. | PASS | 


## Module - Employee Page
## TestID - EMP
### Precondition
| ID | Precondition |
|----|--------------|
| PEM | User is on Employee Page. |

### Test Data
- employee name : Shivangi
- desgination: Intern
- Team: Node
- Joined Date: 21 Apr 2025
- Status: Terminated
- not existing user: anish

### Test Case

| Test ID | Description/Scenario | Precondition | Test Steps | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|------------|-----------------|---------------|--------|
| EMP-00 | Verify list of employee is loaded | user is logged in | -Navigate to employee page through navbar | Employee page should load and display the list of employee along with filter bar, employee add button and pagination at the end of page. | Employee page loaded successfully and displayed the list of employee along with filter bar, employee add button, and pagination at the end of page. | PASS |
| EMP-01 | Add Employee | PEM | - Click Add Employee button<br>- Click add photo icon<br>select image less that of 5mb<br>- Fill up all the details on * marked fields<br>- Click Save. | System should successfully create a employee and display a success message "An Employee has been created." | System failed to create an employee and displayed an error message "Invalid format for E-mail Address". | FAIL |
| EMP-02 | Search an employee by name | - PEM<br>- Employee already exists | - Click on search bar<br>- Type Shivangi<br>- Hit enter | Searched employee should be displayed under the employee list section. | Searched employee displayed under the employee list section. | PASS |
| EMP-03 | Verify Reset functionality | PEM<br>- an employee is already searched. | Upon reset, list should return to default values. | Upon reset, list returned data to default format. | PASS |
| EMP-04 | Search employee using filter option along with searchbar | - PEM<br>- employee already exist. | - Click search bar<br>- Enter name<br>- Select Designation to Intern<br>- Select Node as Team<br>- Select joined date<br> Select status. | System should display employee based on selected filters. | System displayed employee based on selected filters. | PASS |
| EMP-05 | Search for employee that doesnot exist. | PEM | - Click on search bar<br>- Enter a name that doesnot exist<br>- Hit enter | System should display proper message "No Matches Found" | System displayed proper message " No Matches Found " | PASS |
| 




