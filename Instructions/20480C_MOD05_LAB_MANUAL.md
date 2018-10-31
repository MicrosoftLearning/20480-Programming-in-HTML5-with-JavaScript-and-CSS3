## Module 5: Communicating with a Remote Server

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

## Lab: Communicating with a Remote Data Source

#### Scenario

You have been asked to modify the **Schedule** page for the ContosoConf website. Previously, the session data was stored as a hard-coded array and the JavaScript code for the page displayed the data from this array. However, session information is not static; it may be updated at any time by the conference organizers and stored in a database. A web service is available that can retrieve the data from this database and you decide to update the code for the **Schedule** page to use this web service rather than the hard-coded data currently embedded in the application.

In addition, the conference organizers asked whether it was possible for conference attendees to be able to indicate which sessions they would like to attend. This will enable the conference organizers to schedule popular sessions in larger rooms. The **Schedule** page has been enhanced to display star icons next to each session. An attendee can click a star icon to register their interest in that session. This information must be recorded in a database on the server and you send this information to another web service that updates the corresponding data in the database.

For popular sessions, the web service will return the number of attendees who have selected it. You will need to handle this response and display a message to the attendee when they have selected a potentially busy session.

#### Objectives

After completing this lab, you will be able to:
1.	Write JavaScript code to retrieve data from a remote data source.
2.	Write JavaScript code to send data to a remote data source.
3.	Use the async **fetch** method to simplify code that performs remote communications.


#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Retrieving Data

#### Scenario

In this exercise, you will retrieve and display the list of sessions from a web service.

First, you will create a function that constructs an HTTP request to get session data from a remote data source running on a web server. The function will send the request asynchronously, and you will define a callback function that receives the session data when the web service replies. The session data will be a JSON string that must be parsed into a JavaScript object. You will use the existing **displaySchedule** function to display the sessions on the page.

Network connections to remote sources and web servers are not totally reliable. Therefore, you will need to make your code robust enough to handle errors that can occur when receiving data. For testing purposes, a version of the web service that generates errors is also available, and you will use this web service to verify the error handling capabilities of your code.

Finally, you will run the application and view the **Schedule** page to verify that it displays the list of sessions correctly, and that it also handles errors correctly.

#### Task 1: Review the Schedule page

1.	Start Microsoft Visual Studio. 
2. From the **[Repository Root]\Allfiles\Mod05\Labfiles\Starter\Exercise 1** folder, open the **ContosoConf.sln** solution.
3.	In the **ContosoConf** project, open the **scripts\pages\schedule.js** file. 
4.	Review the JavaScript code. 
- Notice that the previously hard-coded array of session data (in the **schedule** variable) has been replaced with an empty array.
- Also notice that the **createSessionElement** function has been modified to generate a star icon next to the session title.
>**Note**: The star icon is a **&lt;a&gt;** link element that is styled with a background image in the shape of a star. To do this, the **&lt;a&gt;** element has the **class** attribute set to **star** and the **schedule.css** file in the **styles\pages** folder contains the following style:
>```css
>        .star {
>            display: inline-block;
>            width: 15px;
>            height: 15px;
>            cursor: pointer;
>            background-image: url(../images/stars.png);
>            background-position: 0 0;
>        }
>```

#### Task 2: Create the downloadSchedule function

1.	In the **schedule.js** file, find the comment that starts with the following text:
```javascript
        // TODO: Create a function called downloadSchedule
```
2.	Create an empty function named **downloadSchedule**. You will add code to this function in subsequent tasks to get a list of sessions asynchronously from a web service.
3.	Within this function, define a variable named **request**, and then assign it a new **XMLHttpRequest** object.
4.	In the **downloadSchedule** function, use the **request** object to retrieve data asynchronously from **/schedule/list** by performing a GET operation. To do this, call the **open()** method of the **request** object.
5.	After the previous statement, create an empty callback that handles the response from the web service and attach it to the **onreadystatechange** property of the **request** object.
6.	In the callback, perform the following operations:
- Ensure that the **readyState** property of the request object indicates the response is complete (it should have the value **4**).
- Parse the JSON string in the response into an object and push the elements of this object in the **schedule** variable.

- Call the **displaySchedule** function to display the sessions on the page.
7.	After you have created the callback, add a statement to send the request to the server. To do this, use the **send()** method of the **request** object.
8.    in the file **schedule.js** call the **downloadSchedule** function after the **addEventListener** code line.
```javascript
        track1CheckBox.addEventListener("click", displaySchedule, false);
        track2CheckBox.addEventListener("click", displaySchedule, false);
        list.addEventListener("click", handleListClick, false);

        downloadSchedule();
```

#### Task 3: Add error handling to the downloadSchedule function

1.	In the **onreadystatechange** callback function, after receiving the response (check that the **readyState** of the **request** object is set to **4**), add code to test the status code of the request. 
For non-200 status codes, the **response** object contains a **message** property. Display this message by using the built-in JavaScript **alert** function.
2.	Also, handle the exceptional case of the remote data source returning invalid JSON data that cannot be parsed. In this case, use the **alert** function to display a general error message.

#### Task 4: Test the Schedule page

1.	Run the application, and then go to the **schedule.htm** page to verify that the list of sessions is displayed.
2.	Close Microsoft Edge.
3.	In the **schedule.js** file, change the requested URL to **/schedule/list?fail**, save the file, and then refresh the **schedule.htm** page in Microsoft Edge.
 >**Note**: The **/schedule/list?fail** URL generates errors that enable you to test that the exception handling parts of your code work correctly.
4.	Run the application again, and then verify that the **Service currently unavailable** error message appears.
5.	After testing, close Microsoft Edge, and then change the URL back to **/schedule/list**.

>**Results**: After completing this exercise, you will have modified the code for the **Schedule** page to display the list of sessions retrieved from a web service, and to handle errors that can occur when communicating with a remote service.

### Exercise 2: Serializing and Transmitting Data

#### Scenario

In this exercise, you will record the sessions that an attendee selects by transmitting this data to a web service. You will also check for potentially busy sessions and inform the attendee accordingly.

First, you will create a function that creates an **XMLHttpRequest** object that posts data to a web service indicating the session that a user has selected. You will encode the content of this request and set the HTTP request headers appropriately. Next, you will handle the response and display a warning message if the response indicates that the attendee has selected a popular session that is likely to be busy. Finally, you will run the application and view the **Schedule** page to verify that the busy session message is displayed.

#### Task 1: Send the request to indicate the session that an attendee has selected

1.	From the **[Repository Root]\Allfiles\Mod05\Labfiles\Starter\Exercise 2** folder, open the **ContosoConf.sln** solution.
2.	In the **schedule.js** file, find the function named **saveStar**.
3.	Inside the function, add code to construct an **XMLHttpRequest** object and make a synchronous POST request to the following URL:
```javascript
        "/schedule/star/" + sessionId
```
>**Note**: The **sessionId** variable is passed to the **saveStar** function as a parameter; it contains the id of the session that the user has selected.
4.	In the **saveStar** function, use the **setRequestHeader** function to set the request **Content-Type** header to the following: 
```javascript
        application/x-www-form-urlencoded
```
5.	Use the **Send** function to send the request with the following body:
 ```javascript
        "starred=" + isStarred
 ```
>**Note**: The **isStarred** parameter that is passed to the **saveStar** function is a Boolean value that indicates whether the attendee has selected the session on the **Schedule** page.

#### Task 2: Handle the web service response

1.	In the **saveStar** function, after the code creates the POST request but before it actually sends the request, if the attendee has selected the session (**isStarred** is true), create a callback for the **onreadystatechange** property of the **request** object that performs the following operations:
- If the request status is 200, then parse the response into a JSON object. This object should have a **starCount** property (the web service that sends the response back formats the data in this way).
- If **starCount** is greater than 50, display the following message by using the **alert** function:
 ```javascript
        This session is very popular! Be sure to arrive early to get a seat.
 ```

#### Task 3: Test the Schedule page

1.	Run the application, and then go to the **schedule.htm** page.
2.	Click the star next to the **New Technologies in Enterprise** session.
3.	Verify that an alert is displayed (this session is popular).
4.	Click the star next to **Diving in at the deep end with Canvas**.
5.	Verify that no alert is displayed (this session is less popular).
6.	Close Microsoft Edge.

>**Results**: After completing this exercise, you will have updated the **Schedule** page to send attendee selections to a web service and to display a message when a session is popular.

### Exercise 3: Refactoring the Code by Using the async fetch Method.

#### Scenario

The existing code that uses an **XMLHttpRequest** object works, but it is somewhat verbose. The **XMLHttpRequest** object also requires you to carefully set HTTP headers and encode the content appropriately; otherwise request data may not be transmitted correctly. In this exercise, you will refactor the JavaScript code for the **Schedule** page to make it simpler and more maintainable by using the async **fetch()** function.

First, you will refactor the **downloadSchedule** function by replacing the use of an **XMLHttpRequest** object with a call to the **fetch** method. Then you will refactor the **saveStar()** function in a similar manner. Using the **fetch()** function will simplify the code by automatically encoding the request content and setting HTTP headers. Finally, you will run the application and view the **Schedule** page to verify that it still displays sessions and responds to star clicks as before.

#### Task 1: Refactor the downloadSchedule function.

1.	From the **[Repository Root]\Allfiles\Mod05\Labfiles\Starter\Exercise 3** folder, open the **ContosoConf.sln** solution.
2.	From the **scripts/pages** folder, in the **schedule.js** file, refactor the **downloadSchedule** function to use the async **fetch()** function.
- The fetch api must have a **url** agrument of **/schedule/list**.
- Use the **response.json** with **await** to fetch the json response asyncronously; the response will contain a property called **schedule** that you should parse and push to the **schedule** array variable, and then call the **displaySchedule()** function.

- Check **response.ok** to handle any errors that might occur; then simply display the **Schedule list not available** message.


#### Task 2: Refactor the saveStar function

1.	In the **schedule.js** file, refactor the **saveStar** function to use the async **fetch()** function.
- The **options** object must have a **method** property of **POST**, **header** property to type **Headers** containing **Content-Type** header and **body** property of **"starred=" + isStarred**.
- The fetch api must have a **url** agrument of **/schedule/list** and the **options** argument.
- Use the **response.json** with **await** to fetch the json response asyncronously. Check if the **starCount** property in the response object is greater than 50, display the **This session is very popular! Be sure to arrive early to get a seat** message.


#### Task 3: Test the Schedule page

1.	Run the application, and then go to the **schedule.htm** page.
2.	Verify that the list of sessions appears correctly.
3.	Next to **New Technologies in Enterprise**, click the star icon, and then verify that an alert is displayed.
4.	Next to **Diving in at the deep end with Canvas**, click the star icon, and then verify that no alert is displayed.
5.	Close Microsoft Edge.
6.	In **schedule.js**, change the URL in the **downloadSchedule** function to **/schedule/list?fail**.
7.	Run the application, and then go to the **schedule.htm** page. Verify that the **Schedule list not available** error message is displayed.
8.	Close Microsoft Edge.

>**Result:** After completing this exercise, you will have refactored the JavaScript code that sends and receives data to use the async **fetch** method.


©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
