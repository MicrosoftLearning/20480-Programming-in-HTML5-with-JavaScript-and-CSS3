## Module 7: Creating Objects and Methods by Using JavaScript

## Lab: Refining Code for Maintainability and Extensibility

#### Scenario

The existing JavaScript code for the ContosoConf website has been written without much high-level structure or organization. While this approach is fine for small pieces of code, it will not scale up for a larger project. An unstructured collection of functions and variables scattered throughout a JavaScript file can quickly become unmaintainable.

Before implementing more website features by using JavaScript, you decide to refactor the existing code to introduce better organizational practices. The resulting code will be more maintainable and provide a good pattern for implementing future website features.

#### Objectives

After completing this lab, you will be able to:

- Implement good practices for writing JavaScript code.
- Refactor JavaScript code to use object-oriented principles.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Object Inheritance

#### Scenario

In this exercise, you will create a utility function named **Object.inherit**. The purpose of this function is to define a prototype object and initialization function, which can then be used to create new instances of a type.

>The following example uses **Object.inherit** to define a **Circle** prototype. This prototype is then used to create a **Circle** object. 
>
>The **initialize** function is similar to a constructor in other object-oriented languages such as C# and Java; it initializes the state of a new object, based on the parameters passed to it.
>    ```javascript
>        var Circle = Object.inherit({
>            initialize: function (radius) {
>                this.radius = radius;
>            },
>
>            area: function () {
>                return Math.PI * this.radius * this.radius;
>            },
>
>            circumference: function() {
>                return 2 * Math.PI * this.radius;
>            }
>        });
>
>        // Create and use a Circle object
>        var c = Circle.create(10);
>        alert(c.area());
>        alert(c.circumference());
>    ```

#### Task 1: Review the Object.inherit.js JavaScript file.

1.	Start Visual Studio and open the **ContosoConf.sln** solution in the **Allfiles\Mod07\Labfiles\Starter\Exercise 1** folder.
2.	Open the **Object.inherit.js** file in the **scripts** folder. 
3.	Review the JavaScript code and comments in this file. This file contains functions called **copyOwnProperties** and **inherit**.
- You will implement the **inherit** function, using the TODO comments as guidance.
- **copyOwnProperties** is a helper function that copies properties from one object to another. The **inherit** function will use this function.

#### Task 2: Implement the Inherit function.

1.	Implement the **inherit** function, using the TODO comments for guidance.
- Create and assign a variable named **factory** by using the **Object.create** function. Specify the current object as the prototype.
- Add a method called **create** to **factory**. Leave the body of the method empty for now; you will implement it in the next step.
- Copy the properties of **additionalProperties** into **factory**.
- Return the value of **factory** from the **inherit** function.
2.	Complete the implementation of the **factory.create** method in the **inherit** function:
- Create a new object that uses **factory** as its prototype.
- Call the **initialize** function of the new object (if it exists and it is a function), passing any arguments that were passed to **create**.

>**Note:** Use the **typeof** operator to determine whether the **initialize** function exists, like this:
>    ```javascript
>        if (typeof instance.initialize === "function") {
>            ...
>        }
>    ```
>The **typeof** operator was described in module 3, "Introduction to JavaScript"; it returns the type of an object as a string. If the object is a function, the **typeof** operator returns the string "function". If the object does not exist, the **typeof** operator returns the string "undefined".

- Use the **apply** method to call the **initialize** function, and specify the new object as the value to pass as the **this** parameter. This technique ensures that any references to **this** in the **initialize** function defined by the new object are resolved correctly and refer to the new object and not the **inherit** function.
3.	Return the new object from the **create** function.
4.	At the end of the JavaScript file, make the **inherit** function available to other scripts by attaching it to the built-in **Object** object.

#### Task 3: Scope the JavaScript code inside an immediately invoked function expression.

1.	In the **Object.inherit.js** file, enclose the JavaScript code in an immediately invoked function expression.

#### Task 4: Use strict mode.

1.	In the **Object.inherit.js** file, modify the immediately invoked function to use strict mode.

>**Results:** After completing this exercise, you will have written the **Object.inherit** utility function that you will use in later exercises to structure the code for the web application. You will also have modified the scope for this function, and specified that the code should run by using strict mode.

### Exercise 2: Refactoring JavaScript Code to Use Objects.

#### Scenario

The JavaScript code for the Schedule page has been partially refactored to be more maintainable. In this exercise, you will continue the refactoring process by updating the code for the Schedule page. You will use the **Object.inherit** utility function to define a **ScheduleList** prototype object. Then you will move the existing functions and variables relating to the schedule list into this prototype.

#### Task 1: Define the ScheduleList factory.

1.	Open the **ContosoConf.sln** solution in the **Allfiles\Mod07\Labfiles\Starter\Exercise 2** folder.
2.	In the **schedule.js** file, in the **scripts\pages** folder, find the following comment:
    ```javascript
        // TODO: Create a ScheduleList factory object using the Object.inherit helper method.
    ```
3.	After this comment, use the **Object.inherit** function to create an object named **ScheduleList**.
4.	Add an **initialize** function to the object passed to **Object.inherit**. 
- The **initialize** function should take two parameters called **element** and **localStarStorage** 
- The **initialize** function should use these two parameters to create and populate properties also called **element** and **localStarStorage** for the **ScheduleList** object
5.	Remove the **element** and **localStarStorage** variables from the **ScheduleList** object (they have been replaced by the properties that you just defined).

#### Task 2: Convert functions into methods of the ScheduleList object.

1.	In the **schedule.js** file, find the following comment:
    ```javascript
        // TODO: Refactor these functions into methods of the ScheduleList object.
    ```
2.	Convert each of the functions following the comment into methods of **ScheduleList**.

>**Note:** As an example of refactoring a function, the following code:
>    ```javascript
>        downloadDone: function (responseData) {
>            addAll(responseData.schedule);
>        }
>    ```
>Should be moved to the **ScheduleList** object and converted to:
>    ```javascript
>        var ScheduleList = Object.inherit({
>            initialize: function (element, localStarStorage) {
>                ...
>            },
>
>        ...
>
>            downloadDone: function (responseData) {
>                this.addAll(responseData.schedule);
>            },
>        ...
>        }
>    ```

3.	In the **startDownload** function, add the **context** option to the object passed to the **ajax** function and initialize it to **this**.

>**Note:** This step ensures that the correct object is made the context of the ajax callbacks that occur when downloading is complete.

4.	In the **addAll** function, specify that the **forEach** function should call the **add** method of the object referenced by **this**. Also, pass **this** as the second parameter to the **forEach** function.

>**Note:** The second parameter to the **forEach** function specifies the object that any use of **this** will reference in the **add** function.

#### Task 3: Create and use a ScheduleList object.

1.	Near the end of the **schedule.js** file, find the following JavaScript code:
    ```javascript
        // TODO: Replace the following code by creating a ScheduleList object 
        //       and calling the startDownload method.
        element = document.getElementById("schedule");
        localStarStorage = LocalStarStorage.create(localStorage);
        startDownload();
    ```
2.	Modify this code to create a **ScheduleList** object by using the **ScheduleList.create** function. Pass the DOM element and local star storage object as parameters to **ScheduleList.create()**.
3.	Call the **startDownload** method of the **ScheduleList** object.

#### Task 4: Test the application.

1.	Run the application and view the **schedule.htm** page.
2.	Verify that the page looks similar to the image below:

![alt text](./Images/20480B_7_Schedule-Refactored.png "The Schedule page")

>**Note:** The styling and layout of the Schedule page has been changed. This is performed by using the CSS rules implemented in the schedule.css style sheet and is not a result of any updates made to the JavaScript code.

3.	Close Microsoft Edge. 

>**Result:** After completing this exercise, you will be able to describe how the Contoso Conference application is structured as a Visual Studio 2017 project.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
