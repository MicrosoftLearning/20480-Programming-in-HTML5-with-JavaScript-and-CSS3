## Module 3: Introduction to JavaScript

## Lab: Displaying Data and Handling Events by Using JavaScript

#### Scenario

The conference being organized by ContosoConf consists of a number of sessions that are organized into tracks. A track groups sessions of related technologies, and conference attendees can view the sessions in a track to determine which ones may be of most interest to them.

To assist conference attendees, you have been asked to create a Schedule page for the ContosoConf website listing the tracks and sessions for the conference. 

#### Objectives

After completing this lab, you will be able to:
- Use JavaScript code to programmatically update the data displayed on an HTML5 page.
- Handle the events that can occur when a user interacts with a page by using JavaScript.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Displaying Data Programmatically

#### Scenario

In this exercise, you will create the Schedule page that displays a list of sessions.

First, you will use the HTML5 DOM to obtain a reference to the page’s schedule list element. Then you will implement a function that creates list items (one list item for each session). Information about the sessions is stored in a file in JSON format. You will implement a function that reads this data and adds the details of each session to the list element. Finally, you will run the application and view the Schedule page to verify that it correctly displays the list of sessions.

#### Task 1: Review the existing code for the Schedule page.

1.	Start the **MSL-TMG1** virtual machine if it is not already running.
2.	Start the **20480B-SEA-DEV11** virtual machine if it is not already running, and log on as **Student** with the password **Pa$$w0rd**.
3.	Start Visual Studio and open the **ContosoConf.sln** solution in the **E:\Mod03\Labfiles\Starter\Exercise 1** folder.
4.	In the **ContosoConf** project, review the content of the page **schedule.htm**. Notice that the **schedule** page section, which will be used to display the list of sessions, currently contains an empty list, also named **schedule**:
    ```html
        <section class="page-section schedule>
            <div class="container">
                <h1>Schedule</h1>
                <ul id="schedule"></ul>
            </div>
        </section>
    ```
5.	Also notice that the **schedule.htm** page references the JavaScript code in the **scripts\pages\schedule.js** script file:
    ```html
        <script src="/scripts/pages/schedule.js" type="text/javascript"></script>
    ```
6.	Review the **scripts\pages\schedule.js** script file. This file contains the details of each session held in JSON format. The data is held in an array named **schedule**, and each object in the array has three properties that specify the session id, the session title, and the tracks to which the session belongs (a session may be part of more than one track):
    ```javascript
        var schedule = [
            {
                "id": "session-1",
                "title": "Registration",
                "tracks": [1, 2]
            },
            {
                "id": "session-2",
                "title": "Moving the Web forward with HTML5",
                "tracks": [1, 2]
            },
            {
                "id": "session-3",
                "title": "Diving in at the deep end with Canvas",
                "tracks": [1]
            },
            {
                "id": "session-4",
                "title": "New Technologies in Enterprise",
                "tracks": [2]
            },
            ...
        ];
    ```

#### Task 2: Write code to get the schedule list element on the Schedule page.

1.	In the **schedule.js** file, find the comment **TODO: Task 2**
2.	Write JavaScript code to get the **schedule** list element from the DOM and assign it to a variable named **list**. You will use this variable to display the details of each session in the list on the Schedule page.
- Use the **getElementById** method of the **document** object to find the list that has the **id** property set to **schedule**.

#### Task 3: Implement the createSessionElement function that creates the list item for a session.

1.	In the **schedule.js** file, find the comment **TODO: Task 3**. This comment is located in the **createSessionElement** function, which looks like this:
    ```javascript
        function createSessionElement(session) {
            ...
        };
    ```
The purpose of this function is to create a list element containing the name of the session passed in as the parameter.
2.	Add JavaScript code to create a **&lt;li&gt;** element, set its text content to the session title, and then return this element:
- Use the **createElement** method of the **document** object to create a new **li** object.
- Set the **textContent** property of the **li** object to the **title** property of the **session** parameter passed in to the **createSessionElement** function
- Return the new **li** element.

#### Task 4: Implement the displaySchedule function that adds session items to the list for display.

1.	In the **schedule.js** file, find the **TODO: Task 4** comment. This comment is located in the **displaySchedule** function, which looks like this:
    ```javascript
        function displaySchedule () {
            clearList();

            ...
        };
    ```
The purpose of this function is to display the title of each session in the list on the Schedule page.
2.	Add JavaScript code to iterate over the **schedule** array containing the JSON data by using a **for** loop. Create a **session** object for each item in the array, and add the title of the session to the **list** element on the Schedule page.
- Use the **createSessionElement** function that you implemented in Task 3 to create a list item for each session.
- Use the **list** variable that you created in Task 2 to access the list element on the Schedule page.

#### Task 5: Run the web application and view the Schedule page.

1.	Run the application and view the **schedule.htm** page to verify that the list of sessions is displayed.

![alt text](./Images/20480B_3_Schedule.png "The Schedule page with sessions displayed")

>**Note:** Remember that you can use the F12 Developer Tools in Internet Explorer to debug your application. Also, if you make any changes to your code, make sure to clear the browser cache before running the application again (press Ctrl+R in the F12 Developer Tools window). Otherwise, Internet Explorer may attempt to run the previous version of your JavaScript code.


>**Results:** After completing this exercise, you will have added a Schedule page to the ContosoConf application that displays the details of conference sessions.

### Exercise 2: Handling Events.

#### Scenario

In this exercise, you will add check boxes to the Schedule page to enable the user to specify which sessions should be displayed, according to the tracks that they are in.

First, you will add two checkbox HTML elements to the Schedule page; the first will enable the user to specify that the sessions for track 1 should be listed, and the second will enable the user to specify that the sessions for track 2 should be listed (if both checkboxes are checked, then the sessions for track 1 and track 2 will both be listed). Then you will add JavaScript code to handle the click events of these checkboxes; you will update the **displaySchedule** function to show only sessions that are in the tracks currently selected by the checkboxes. Finally, you will run the application and view the Schedule page to verify that selecting and deselecting the checkboxes correctly updates the session list.

#### Task 1: Add checkbox HTML elements.

1.	In Visual Studio, open the **ContosoConf.sln** solution in the **E:\Mod03\LabFiles\Starter\Exercise 2** folder. This project contains a working version of the application as it should appear at the end of exercise 1.
2.	In the **schedule.htm** file, before the **schedule** list, add two checkboxes that enable the user to specify for which tracks the page should display session information:

![alt text](./Images/20480B_3_Schedule_With_Checkboxes.png "The Schedule page with checkboxes that enable the user to select the tracks")

- Label the checkboxes with the text **Track 1** and **Track 2**.
- Set the **id** attributes of the checkboxes to **show-track-1** and **show-track-2**.
- Mark the checkboxes as checked by default.

#### Task 2: Write code to get the checkbox elements from the Schedule page.

1.	In the **scripts\pages** folder, open the **schedule.js** file.
2.	After the **list** variable is defined, create two variables named **track1Checkbox** and **track2Checkbox**.
3.	Add JavaScript code to get the checkbox elements **show-track-1** and **show-track-2** from the DOM and reference them in these variables.
- Use the **getElementById** method of the **document** object, and get elements with the ids **show-track-1** and **show-track-2**.

#### Task 3: Add click event listeners for each checkbox.

1.	At the end of the **schedule.js** file, add an event listener for the click event of each checkbox. The event handler for each checkbox should call the **displaySchedule** function.
- Use the **addEventListener** method to add the event handler for each check box.

#### Task 4: Update the displaySchedule function to display the sessions for selected tracks.

1.	Modify the **displaySchedule** function to add sessions to the list only when they are in the currently selected tracks (one track, both tracks, or neither track might be selected). 
- Examine the **checked** property of the **track1Checkbox** and **track2Checkbox** elements to determine which track the user has selected.
- The **session** parameter passed in to the **createSessionElement** method has a **tracks** property. This property is an array that specifies which track or tracks a session belongs to.
- Use the **indexOf** function to determine whether the tracks property specifies that a session is in track 1, track 2, or both.

#### Task 5: Run the web application and view the Schedule page.

1.	Run the application and view the **schedule.htm** page.
2.	Verify that if both checkboxes are selected all tracks are listed.
3.	Verify that if only Track 1 or Track 2 is selected, only the sessions for that track appear.
4.	Verify that if neither track is selected, no sessions are listed.

>**Note:** The sessions for Track 1 are:
>- Registration
>- Moving the Web forward with HTML5
>- Diving in at the deep end with Canvas
>- WebSockets and You
>- Coffee and Cake Break
>- Building Responsive UIs
>- A Fresh Look at Layout
>- Lunch
>- Getting to Grips with JavaScript
>- Web Design Adventures with CSS3
>- Closing Thanks and Prizes
>
>The sessions for Track 2 are:
>- Registration
>- Moving the Web forward with HTML5
>- New Technologies in Enterprise
>- Coffee and Cake Break
>- Fun with Forms (no, really!)
>- Real-world Applications of HTML5 APIs
>- Lunch
>- Transformations and Animations
>- Introducing Data Access and Caching
>- Closing Thanks and Prizes

>**Result:** After completing this exercise, you will have updated the **Schedule** page to filter sessions based on which tracks have been selected.

©2017 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
