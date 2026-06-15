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
| SIGNUP-00 | Signup using valid credential | PRE-0 | - Enter Full name<br>- Enter Email address<br>- Enter valid Password<br>- Select Level<br>- Select country<br>- Click Sign Up | User should be redirected to onboarding page. | User is redirected to onboarding page. | PASS | 
| SIGNUP-01 | Invalid Password  | PRE-0 | - Enter valid name, email<br>- Enter invalid password<br>- Select level & country<br>- Click Sign up | Error message indicating certain pattern should be displayed below the password field. | Error message indicating certain pattern is displayed below the password field. | PASS |
| SIGNUP-02 | Signup with empty fullname and valid credentials | PRE-0 | - Leave fullname field empty<br>- Fill up required details such as email, password, level, and country. | "Required" message below the fullname field should display | "Required" message below the fullname field displayed. | PASS | 
| SIGNUP-03 | Verify incorrect email pattern | PRE-0 | - Enter incorrect email<br>- Fill up remaining details with valid credentials. | "Invalid email address" message should be displayed below the email address field. | "Invalid email address" message is displayed below the email address field. | PASS |
| SIGNUP-04 | Full name character range | PRE-0 | - Enter full name over 125 characters. | Max limit message should be displayed below the full name field. | Max limit message is displayed below the full name field. | PASS |
| SIGNUP-05 | Password less than 8 character | PRE-0 | - Enter password less than 8 character. | Password invalid message should display under password field. | Password invalid message is displayed under password field. | PASS |
| SIGNUP-06 | Password masking | PRE-0 | - Enter password<br- Click on eye icon | Password should be visible upon clicking on eye icon | Password is visible upon clicking on eye icon. | PASS |

## Module - Login 
## Test ID - LOGIN
### Precondition 
| ID | Precondition |
|----|--------------|
| PRE-0 | User is already registered & is on login page. |

### Test Data
- email: ywho942@gmail.com
- password: ************

### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| LOGIN-00 | Login with valid email & password | PRE-0 | - Enter valid email<br>- Enter valid password<br>- Click Login | User should be redirected to dashboard page. | User redirected to dashboard page. | PASS |
| LOGIN-01 | Login with invalid email & valid password | PRE-0 | Enter invalid email<br>- Enter valid password<br>- Click login | Error message"Your Email or Password is Invalid." should display. | Error message "Your Email or Password is Invalid." displayed. | PASS |
| LOGIN-02 | Password Masking | PRE-0 | - Enter valid password<br>- Click on eye icon. | Password should be visible | Password is visible | PASS |
| LOGIN-03 | Verify email pattern | PRE-0 | - Enter invalid email in random pattern | Under the email field, an error message "Invalid email address" should be displayed. | Error message "Invalid email address" displayed under the email field. | PASS |
| LOGIN-04 | Login with valid email and empty password field | PRE-0 | - Enter valid email<br>- leave password field empty<br>- Click Log in | Error message"Required" under password field should be visible. | Error message "Required" visible under password field. | PASS |
| LOGIN-05 | SQL injection | PRE-0 | - Enter SQL Injection script<br>- click login | Email field should display invalid email message under email field. | Email field displayed invalid email message under email field. | PASS |


## Module - Dashboard Home Page
## Test ID - DASH
### Precondition
| ID | Precondition |
|----|--------------|
| PRE-01 | User is logged in & on dashboard page. |

### Test Data

### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| DASH-00 | Verify learning Resources Component Feature | PRE-01 | - Click on title of first Learning resource | It should redirect user to interactive videos page related to selected resource title. | It redirected user to interactive videos page related to selected resource title. | PASS |
| DASH-01 | Learning resource watch videos button | PRE-01 | - Click Watch Videos button | Should redirect user to interactive videos page. | Redirected user to interactive videos. | PASS | 
| DASH-02 | Learning resource View reports | PRE-01 | - Click on Report button. | Should navigate user to related course report page. | Navigated user to related course report page. | PASS | 
| DASH-03 | Learning resources revision notes | PRE-01 | - Click on Revision Notes | Should redirect user to revision notes page. | Redirected user to revision notes page. | PASS | 
| DASH-04 | Verify Learning Resources Customize | PRE-01 | - Click Customize<br>- Select the plan based on preference.<br>- Click Save | Learning Resources component should list out the resource based on customized plan. | Learning Resources component listed out the resource based on customized plan. | PASS |
| DASH-05 | Learning Resource Drop down | PRE-01 | - Click on drop down icon. | Upon Clicking on dropdown icon, it should reveal resource details along with option to watch videos, reports, and revision notes. | Upon clicking on dropdown icon, it revealed resource details along with option to watch videos, reports, and revision notes. | PASS |
| DASH-06 | Get Help Component Get one answers a day | PRE-01 | - Go to Get Help component<br>- Click unlock answer from the box with the text "Get One answer a day". | It should redirect user to Answer page. | It redirected user to answer page. | PASS | 
| DASH-07 | Get Help Academic Support component | PRE-01 | - Click on Get Support button from the Academic Support box | User should be redirected to academic support page. | User is redirected to academic support page. | PASS |
| DASH-08 | Video Component | PRE-01 | - Select and Click on Videos from the component. | It should redirect user to Video Page of the selected video. | It redirected user to Video Page of the selected video. | PASS |
| DASH-09 | Mark Video as important from the video component | PRE-01 | - Select a video and Click on Star icon | It should display success message "Video Marked as important" and icon color should transform. | Displayed success message " Video Marked as important" and icon color transformed. | PASS | 
| DASH-10 | Verify Competency Evaluator | PRE-01 | - In the Tip & Tricks section<br>- Click on Test yourself | It should redirect user to test page. | It redirected user to test page. | PASS |
| DASH-11 | Grade Selection | PRE-01 | - Click on the dropdown menu beside HomeSchool Logo<br>- Select prefered Grade | User should be able to access selected grade contents & resources. | User is able to access selected grade contents & resources. | PASS |



## Module - Learning
## Test ID - LEARN
### Precondition
| ID | Precondition | 
|----|--------------|
| PRE-02 | user is logged in & on learning page. |
| PRE-03 | user has already watched IVy video and is on IVy video page. | 


### Test Case
| Test ID | Description/Scenario | Precondition | Test Step | Expected Result | Actual Result | Status |
|---------|----------------------|--------------|-----------|-----------------|---------------|--------|
| LEARN-00 | Verify Page loads all the contents | User is logged in | - Click Learning from navigation menu. | User should navigate to learning page. | User navigated to learning page. | PASS | 
| LEARN-01 | Verify video details | PRE-02 | - Click on interactive video box | It should open selected IVy detailed page with all its resource. | It opened selected IVy detailed page with all its resource. | PASS |
| LEARN-02 | Verify interactive videos works | PRE-02 | - Click on interactive video box<br>- Select a video and click<br>- Click Play | It should redirect user to video page & play video. | It redirected user to video page & play video. | PASS |
| LEARN-03 | Verify end lesson quiz | PRE-03 | - Click on Take end lesson quiz button<br>- Answer all the questions | End lesson quiz should be displayed on the video screen with quiz questions & report ready notification message should be displayed. | End lession quiz is displayed on the video screen with quiz questions and report ready notification message is displayed. |
| LEARN-04 | Competency Evaluator Pre Test | PRE-03 | - Click on Competency Evaluator<br>- Click attempt test under Pre test | User should be redirected to Competency Evaluator page of selected video and Pre test portal should upon. | User redirected to comptetency evaluator page of selected video and pre test portal should open. | PASS |
| LEARN-05 | Competency Evaluator Post Test | PRE-03 | - Click on Competency Evaluator<br>- Click attempt test under Post test | User should be redirected to Competency evaluator page of selected video and then navigate to test portal. | User should be redirected to Competency evaluator page of selected video and then nagivate to test portal. | PASS |
| LEARN-06 | Attempt Pre/Post Test | PRE-03 | - Click on Competency Evaluator<br>- Click attempt test under post test<br>- Click start test<br> - Attempt Test |  User should be navigated to competency evaluation page then to test portal and initiate the test. | User is navigated to competency evaluation page then to test and initiated the test. | PASS | 
| LEARN-07 | Test Paper generation | PRE-03 | - Click on Generate Test Paper | User should be navigated to Test Generation Page. | User is navigated to test generation page. | PASS |
| LEARN-08 | 80% Threshold in the end lesson quiz | PRE-03 | - Click on attempt end lesson quiz<br>- Attempt 80% of answers correctly | User should be give an option for IE if they meet 80% threshold. | User is given an option for IE if they meet 80% threshold. | PASS | 
| LEARN-09 | View report | PRE-02 | - Click on a Subject<Br>- Click on report | It should display the detailed report of selected subject IVy. | It displayed the detailed report of selected subject IVy. | PASS |
| LEARN-10 | Add to plan book | PRE-03 | - Click Add to planbook<br>- Enter title<br>- Select start date and end time<br>- Add description<br>- Select does not repeat<br>- Select end date<br>- Select notification time<br>- Click Save | User should be navigated to planbook page & Plan should be set & success message should be displayed. | User is navigated to planbook page & Plan is set & success message is displayed. | PASS |
| LEARN-11 | Revision page | PRE-03 | - Click on Revision notes | User should be redirected to the revision page. | User is redirected to the revision page. | PASS |
| LEARN-12 | Learning Guide | PRE-02 | - Click on selected subject<br>- 