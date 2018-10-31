# Module 9: Adding Offline Support to Web Applications

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 2: Adding Offline Support by Using the Application Cache

### Demonstration: Adding Offline Support to Web Applications

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course. 

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the exercise scenario for each exercise is essential reading and contains a description of what they will accomplish in the exercise.
3.	Start Microsoft Visual Studio. 
4. Browse to **[Repository Root]\Allfiles\Mod09\Labfiles\Solution\Exercise 2**, and open the **ContosoConf.sln** solution.
>**Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
5.	In **Solution Explorer**, expand the **ContosoConf** project, and then double-click **appcache.manifest**.
6.	In the **Code Editor** window, scroll through the file and explain that it lists the items that will be cached by the web browser.
7.	In **Solution Explorer**, expand the **scripts** folder, and then double-click **offline.js**.
8.	In the **Code Editor** window, find the following code:
   ```javascript
        if (!navigator.onLine) {
            hideLinksThatRequireOnline();
        }
   ```
9.	Explain that this statement detects whether the browser has a network connection. If it does not have a network connection, the **hideLinksThatRequireOnline()** function modifies the links in the navigation bar to ensure that the pages that require network connectivity (such as the **Location** and **Register** pages) do not appear.
10.	In **Solution Explorer**, expand the **scripts** folder, and then double-click **ScheduleItem.js**.
11.	In the **Code Editor** window, find the **setStar()** function. Point out that this function saves information about sessions that the user has selected (by clicking the star icon) to local storage, and also posts this information to the web server. Similarly, the **unsetStar()** function removes information about selected sessions from local storage. In this way, the user can still record which sessions they are interested in, even if the browser does not have a network connection.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
