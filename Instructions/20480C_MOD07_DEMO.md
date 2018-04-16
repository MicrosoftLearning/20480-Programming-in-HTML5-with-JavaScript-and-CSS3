# Module 7: Creating Objects and Methods by Using JavaScript

# Lesson 3: Extending Objects

### Demonstration: Refining Code for Maintainability and Extensibility

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

1.	Read the Lab Scenario to students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to students that the Exercise Scenario for e ach exercise contains a description of what they will accomplish in the exercise, and is also essential reading.
3.	Start Visual Studio and open the **ContosoConf.sln** solution in the **Allfiles\Mod07\Labfiles\Solution\Exercise 2** folder.
4.	In Solution Explorer, expand the **ContosoConf** project, expand the **scripts** folder, and then double-click **Object.inherit.js**. 
5.	In the Code Editor window, scroll through the code and highlight the **inherit()** function. Mention that the purpose of this function is to define a prototype object and initialization function, which can then be used to create new instances of a type. The starter code contains a skeleton version of this function, but students will complete the code by following the comments in this function.
6.	Also, point out that the code in the Object.inherit.js file enforces **strict** mode, and that it is contained within an immediately invoked function expression.
7.	In Solution Explorer, in the **scripts** folder, expand the **pages** folder, and then double-click **schedule.js**. 
8.	In the Code and Text Editor window, find the statement that creates the **ScheduleList** object on line 117, and point out how the code uses the **Object.inherit()** function to create this object. Notice that the functions that were originally part of the schedule.js script have been refactored as methods of the **ScheduleList** object.
9.	Inform students that the first 114 lines of the **schedule.js** file have nothing to do with the **ScheduleList** object; rather this code formats the session data in a tabular layout on the web page. Students are welcome to look at this code, but it is not necessary to understand how it works in order to perform the lab.
10.	On the **Debug** menu, click **Start Without Debugging**.

>**Note:** If the message **Intranet settings are turned off by default** appears, click **Don’t show this message** again.

11.	In Internet Explorer, in the navigation bar, click **Schedule**, and explain that the **Schedule** page uses the **ScheduleList** object to fetch session data for display.
12.	Close Internet Explorer.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
