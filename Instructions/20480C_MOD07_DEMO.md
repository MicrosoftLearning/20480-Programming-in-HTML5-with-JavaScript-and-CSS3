# Module 7: Creating Objects and Methods by Using JavaScript

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 3: Extending Objects

### Demonstration: Refining Code for Maintainability and Extensibility

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the scenario for each exercise contains a description of what they will accomplish in the exercise, and is also essential reading.
3.	Start Microsoft Visual Studio and then from the **[Repository Root]\Allfiles\Mod07\Labfiles\Solution\Exercise 1** folder, open the **ContosoConf.sln** solution.
>**Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
4.	In **Solution Explorer**, expand the **ContosoConf** project, expand the **scripts** folder, and then add a new Javascript file named **ScheduleList.js**. 
5.	In the **Code Editor** window, add a constructor instance to this class. Mention that the purpose of this constructor is to create and initialize new instances of the **ScheduleList** type.
6.	In **Solution Explorer**, in the **scripts** folder, expand the **pages** folder, and then double-click **schedule.js**. 
7.	In the **Code and Text Editor** window, find the variables and functions, and point out how to refactor them as properties and methods in the **ScheduleList** class.
8.	In the **Code and Text Editor** window, replace the code which creates **LocalStarStorage** and invokes **startDownlaod** method with creation of the **ScheduleList** class and invocation of the refactored method.
9.	On the **Debug** menu, click **Start Without Debugging**.

>**Note**: If the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**.

11.	In Microsoft Edge, in the navigation bar, click **Schedule**, and explain that the **Schedule** page uses the **ScheduleList** object to fetch the session data for display.
12.	Close Microsoft Edge.
13. Close all open windows.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
