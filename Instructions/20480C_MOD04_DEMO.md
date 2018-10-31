# Module 4: Creating Forms to Collect and Validate User Input

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 3: Validating User Input by Using JavaScript

### Demonstration: Creating a Form and Validating User Input

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the exercise scenario for each exercise is essential reading and contains a description of what they will accomplish in the exercise.
3.	Start Microsoft Visual Studio. From the **[Repository Root]\Allfiles\Mod04\Labfiles\Solution\Exercise 2** folder, open the **ContosoConf.sln** solution.
>**Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
4.	In **Solution Explorer**, expand the **ContosoConf** project, and then double-click **register.htm**.
5.	In the **Code Editor** window, find the **&lt;form&gt;** element, and explain that students will create this form to enable new users to register with the conference. The form contains boxes for the user's first name, last name, email address, password (including a confirm password box), and an optional URL, if the user has a website. The HTML markup uses input attributes to validate the data entered by the user.
6.	In **Solution Explorer**, expand the **scripts** folder, expand the **pages** folder, and then double-click **register.js**.
7.	In the **Code Editor** window, explain that students will write the **checkPassword** function to verify that the values entered in the **Password** and **Confirm Password** boxes match.
8.	In **Solution Explorer**, expand the **styles** folder, expand the **pages** folder, and then double-click **register.css**.
9.	In the **Code Editor** window, explain that students will create the style that highlights input elements that fail validation by using the **input:invalid** pseudo-class.
10.	On the **Debug** menu, click **Start Without Debugging**.

>**Note:** If the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**.

11.	In Microsoft Edge, on the **Home** page, on the navigation bar, click **Register**.
12.	On the **Register** page, click **Register**, and point out that the form does not allow the user to omit mandatory information, such as the first name, last name, email address, or password.
13.	In the **First name** box, type **Josh**.
14.	In the **Last name** box, type **Bailey**.
15.	In the **Email address** box, type **josh.bailey@adatum.com**.
16.	In the **Choose a password** box, type **Passw0rd**.
17.	In the **Confirm your password** box, type **Passw0rd**.
18.	In the **Website/blog** box, type **http://adatum.com/**.
19.	Click **Register** and verify that the **Thanks for registering** page appears.
20.	Mention that the form also performs other checks, such as verifying that the email address is in the correct format, and that the values in the password and confirm password fields match.
21.	Close Microsoft Edge.
22. Close all open windows.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
