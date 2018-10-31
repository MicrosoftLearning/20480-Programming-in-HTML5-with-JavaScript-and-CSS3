## Module 7: Creating Objects and Methods by Using JavaScript

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

## Lab: Refining Code for Maintainability and Extensibility

#### Scenario

The existing JavaScript code for the ContosoConf website has been written without much high-level structure or organization. While this approach is fine for small pieces of code, it will not scale up for a larger project. An unstructured collection of functions and variables scattered throughout a JavaScript file can quickly become unmaintainable.

Before implementing more JavaScript code to enhance the website, you decide to refactor the existing code for better organizational practices. The resulting code will be more maintainable and provide a good pattern for implementing features in the future.

#### Objectives

After completing this lab, you will be able to:

- Implement good practices for writing JavaScript code.
- Refactor JavaScript code to use object-oriented principles.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Refactoring JavaScript Code to Use Classes and Objects

#### Scenario

The JavaScript code for the **Schedule** page has been partially refactored to be more maintainable. In this exercise, you will continue the refactoring process by updating the code for the **Schedule** page. You will create a new class **ScheduleList**, and then you will move the existing functions and variables relating to the schedule list into this new class.

#### Task 1: Create the ScheduleList Class

1.	From the **[Repository Root]\Allfiles\Mod07\Labfiles\Starter\Exercise 1** folder, open the **ContosoConf.sln** solution.
2.	In the **schedule.js** file, in the **scripts\pages** folder, find and remove the following comment:
    ```javascript
		// TODO: Create a ScheduleList class.
    ```
3.	In the **scripts** folder, add a new JavaScript file **ScheduleList.js**.

#### Task 2: Convert variables into properties of the ScheduleList class
1.	To the **ScheduleList** class, add a constructor.
- The constructor should take two parameters called **element** and **localStarStorage**.
- The constructor should use these two parameters to create and populate properties also called **element** and **localStarStorage** for the **ScheduleList** object.
2.	Remove the **element** and **localStarStorage** variables from the **ScheduleList** object (they have been moved to the **ScheduleList** class).

#### Task 3: Convert functions into methods of the ScheduleList class

1.	In the **schedule.js** file, find the following comment:
    ```javascript
        // TODO: Refactor these functions into methods of the ScheduleList class.
    ```
2.	Move each of the functions following the comment to **ScheduleList** class as methods.

>**Note**: As an example of refactoring a function, the following code:
>  ```javascript
>        downloadDone: function (responseData) {
>            addAll(responseData.schedule);
>        }
>  ```
>Should be moved to the **ScheduleList** class as the following method:
>  ```javascript
>        downloadDone(responseData) {
>            this.addAll(responseData.schedule);
>        }
>  ```

3.	In the **startDownload** method, **downloadDone** and **downloadFailed** method calls should be referenced by **this**.


4.	In the **addAll** method, specify that the **forEach** function should call the **add** method of the object referenced by **this**. Also, pass **this** as the second parameter to the **forEach** function.

>**Note**: The second parameter to the **forEach** function specifies the object that any use of **this** will reference in the **add** function.

5.	In the **add** method, **localStarStorage** and **element** should be referenced by **this**.

#### Task 4: Create and use a ScheduleList object

1.	Near the end of the **schedule.js** file, find the following JavaScript code:
    ```javascript
        // TODO: Replace the following code by creating a ScheduleList object 
        //       and calling the startDownload method.
        element = document.getElementById("schedule");
        localStarStorage = LocalStarStorage.create(localStorage);
        startDownload();
    ```
2.	Modify this code to create a **ScheduleList** object by using the **new ScheduleList()** constructor. Pass the DOM element and the **localStarStorage** object as parameters to **new ScheduleList()**.
3.	Call the **startDownload** method of the **ScheduleList** object.

#### Task 5: Test the application

1.	Run the application, and then view the **schedule.htm** page.
2.	Verify that the page looks similar to the image below:

![alt text](./Images/20480B_7_Schedule-Refactored.png "The Schedule page")

>**Note**: The styling and layout of the **Schedule** page has been changed. This is performed by using the CSS rules implemented in the **schedule.css** style sheet and is not a result of any updates made to the JavaScript code.

3.	Close Microsoft Edge.
4. Close all open windows.

>**Result**: After completing this exercise, you will be able to describe how the Contoso Conference application is structured as a Microsoft Visual Studio 2017 project.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
