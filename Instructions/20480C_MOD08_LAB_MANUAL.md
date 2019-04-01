## Module 8: Creating Interactive Pages by Using HTML5 APIs

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

## Lab: Creating Interactive Pages with HTML5 APIs

#### Scenario

The ContosoConf organizers want to highlight the latest HTML5 technologies to create an interactive experience for the visitors to the conference website. Specifically, the conference organizers have asked you to add the following features to the application:
- Conference speakers need a way to generate their badges. Add a webpage that enables a speaker to drag-and-drop a profile picture to start creating their badge.
- A video from a previous conference is available. Make this video available on the **Home** page.
- Customize the **Location** page to display information about the visitor’s current physical location.

#### Objectives

After completing this lab, you will be able to:
- Add a video to an HTML page.
- Create interactive pages by using a drag-and-drop operation.
- Read files by using the File API.
- Get the location of the user by using the Geolocation API.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Dragging and Dropping Images

#### Scenario

In this exercise, you will begin working on the **Speaker Badge** page. This page will eventually enable conference speakers to create a badge that displays their name, photo, and ID barcode. In this exercise, you will implement the drag-and-drop support so that conference speakers can drag and drop a profile picture to start creating their badge.

You will add event listeners to handle drag-and-drop events. Then you will use the File API’s **FileReader** object to read a file as a data URL, which is then displayed on the page. Finally, you will run the application and test the **Speaker Badge** page.

#### Task 1: Review the HTML markup and JavaScript code for the Speaker Badge page

1.	Start Microsoft Visual Studio 2017. 
2. Browse to the **[Repository Root]\Allfiles\Mod08\Labfiles\Starter\Exercise 1** folder, and then open the **ContosoConf.sln** solution.
3.	Open **speaker-badge.htm** and review the HTML markup for this page. Notice the **&lt;img&gt;** element that will display the speaker’s image when you have implemented the drag-and-drop functionality:
    ```html
        <img style="width: 300px; height: 300px; border: 1px solid #000"/>
    ```
4.	Also notice that the page has script references for jQuery and the **/scripts/pages/speaker-badge.js** file:
    ```html
        <script src="/scripts/pages/speaker-badge.js" type="module"></script>
    ```
5.	From the **scripts/pages** folder, open the **speaker-badge.js** file, and then review the JavaScript code. This code defines a **SpeakerBadgePage** object that controls the page:
    ```javascript
		new SpeakerBadgePage(badgeElement);
    ```
6. To configure drag-and-drop event handlers, in the **SpeakerBadgePage** object, add code to the **initialize** method.

>**Note**: The **handleDragOver** function has already been implemented. This function changes the cursor to a "copy" cursor when an item is dragged over an element.

7. To display the image that the user drops on an element, add code to the **handleDrop** function.

>**Note**: The **isImageType** function is a utility function that verifies whether the MIME type passed in as the parameter represents a valid image file.

8. To read the contents of the file dropped on an element by the user, complete the code in the **readFile** method.

>**Note**: The **displayImage** function is another utility function that displays an image in the control referenced by the *imageElement* variable, which is created by the **initialize** method, and refers to the **&lt;img&gt;** element in **speaker-badge.htm**.

#### Task 2: Add drag-and-drop event listeners

1.	In the **speaker-badge.js** file, in the **initialize** function, after the comment that starts with **// TODO: Add event listeners for element "dragover" and "drop" events**, add event listeners for the **dragover** and **drop** events of the *element* variable. These handlers should call the **handleDragOver** and **handleDrop** methods.

>**Note**: The *element* variable contains a reference to the **&lt;img&gt;** element that displays the speaker's image.

#### Task 3: Handle the drop event

1.	In the **speaker-badge.js** file, find the **handleDrop** function. Notice that the event that invoked the function is passed in as the parameter. 
2.	In this method, add code to perform the following tasks:
- After the **// TODO: Get the files from the event** comment, create a variable containing the array of files from the **dataTransfer** property of the event.
- After the **// TODO: Read the first file in the array** comment, add code to ensure that the array is not empty.
- After the **// TODO: Check the file type is an image** comment, call the **isImageType()** function to ensure the first file is a type of image.

>**Note**: The **isImageType()** function checks that the file specified as the parameter is a jpeg, jpg, or png file.

- After the **// TODO: Use this.readFile to read the file, then display the image** comment, add code to start reading the first file by calling the **readFile** function.

>**Note**: The **readFile** function is not yet complete. You will implement the missing parts of this function in the next task.

3. When this operation is complete, call the **displayImage()** function.
4. If a non-image file was dropped, display an alert by using the following message:
    ```javascript
        Please drop an image file.
    ```

#### Task 4: Read the image by using a FileReader

1.	In the **SpeakerBadgePage.js** file, review the **readFile** method.
2.	To implement the missing functionality in the **readFile** method, use the File API: 
- After the **// TODO: Create a new FileReader** comment, create a new **FileReader** object and assign it to a *reader* variable.
- After the **// TODO: Assign a callback function for reader.onload** and **// TODO: In the callback use resolve([fileDataUrl]); to return the file data URL** comments, add code to assign a callback function to the **onload** property of the **reader** object.
- In the callback, resolve the **Promise** object, passing it the result of reading the file.
- After the **// TODO: Start reading the file as a DataURL** comment, add code that uses the **reader** object to start reading the file as a data URL.

>**Note**: Reading a file is an asynchronous operation, so the **readFile** method returns a **Promise** object that is resolved after the file is read.

#### Task 5: Test the Speaker Badge page

1.	Run the application and view the **speaker-badge.htm** page.

>**Note**: The **Speaker Badge** page is not accessible from the menu bar in the application because this feature is only intended for use by the speakers. To view this page, you must browse directly to the **speaker-badge.htm** page on the website.

2.	From the **[Repository Root]\Allfiles\Mod08\Labfiles\Resources** folder, drag **mark-hanson.jpg**  to the **Speaker Badge** page’s **empty image** element.
3.	Verify that the speaker’s photo is displayed in the **empty image** element.

![alt text](./Images/20480B_8_speaker-badge-01.png "The Speaker Badge page with the speaker's photo")

4.	Close Microsoft Edge and File Explorer.

>**Results**: After completing this exercise, you will have implemented functionality that enables the user to drag and drop an image from File Explorer to the webpage.

### Exercise 2: Incorporating Video

#### Scenario

In this exercise, you will add a video to the website's home page. You will add custom controls that enable a user to play and pause the video, and then you will handle video events to display how much playback time has elapsed. Finally, you will run the application, view the home page, and verify that it plays the video correctly.

#### Task 1: Add a video player to the home page

1.	From the **[Repository Root]\Allfiles\Mod08\Labfiles\Starter\Exercise 2** folder, open the **ContosoConf.sln** solution.
2.	Open the **index.htm** file and find the following comment:
    ```html
        <!-- TODO: Add video tag here -->
    ```
3.	Add a **&lt;video&gt;** element by using the video source specified in the **index.htm** file. 

#### Task 2: Add controls to the video player

1.	In the **index.htm** file, after the **&lt;video&gt;** element, add a **&lt;div&gt;** element with the **video-controls** class and the **display-none** style. 
2. The **&lt;div&gt;** element contains two buttons; **Play** and **Pause**. For **Play**, set the class to **video-play**. For **Pause**, set the class to **video-pause**.
3.	To display the elapsed time for the video, to the **&lt;div&gt;** element, add a **&lt;span&gt;** element with the **video-time** class.

>**Note**: The JavaScript code used by this page references the play, pause, and elapsed time elements on the page by using the classes specified in this task.

4. In the **/scripts/pages** folder, in the **index.htm** file, add a reference to the **video.js** script.

#### Task 3: Control the video by using JavaScript code

1. When the webpage loads for the first time, the custom video control elements are hidden. From the **scripts\\pages** folder, open the **video.js** file, and then review the code in this file.
2. Complete the **ready** function to display the video control elements (use the **block** style). The video controls are available in the *controls* variable.
3. In the **video.js** file, near the end, add an event listener for the **loadeddata** event of the video, which calls the **ready** function.
4. In the **video.js** file, complete the **play** and **pause** methods.
5. In the **play** method, play the video, hide the **Play** button, and display the **Pause** button.
6. In the **pause** method, pause the video, hide the **Pause** button, and display the **Play** button.

>**Note**: The *video* variable holds a reference to the video player.
>
7. Display or hide a control by setting the **style.display** property of the control.

8.	Add click event listeners to call the **play** and **pause** functions for the **Play** and **Pause** buttons.

#### Task 4: Display the video elapsed time

1.	To display the elapsed time of the video in the **time DOM** element, complete the **updateTime** function.
2. To convert the total seconds into the HH:MM:SS format, use the **formatTime** helper function.
3.	Near the end of the **video.js** file, add a **timeupdate** event listener for the video element that invokes the **updateTime** function.

#### Task 5: Test the video player

1.	Run the application and view the **index.htm** page.
2.	Wait for the video to load and the **Play** button to appear.
3.	Click **Play**, and then verify that the video starts playing and the elapsed time is displayed.
4.	Click **Pause**, and then verify that the video pauses.
5. Close Microsoft Edge.

>**Note**: You will not hear any sound because the virtual machine does not support audio.

>**Result**: After completing this exercise, you will have added a video player to the home page.

### Exercise 3: Using the Geolocation API to Report the User's Current Location

#### Scenario

In this exercise, you will modify the **Location** page to react to the current geographic location of the user viewing the page.

You will use the Geolocation API to get the visitor’s current location, and then you will calculate and display the distance to the conference venue. Finally, you will run the application and verify that this feature is working as expected.

#### Task 1: Review the HTML markup and JavaScript code.

1. From the **[Repository Root]\Allfiles\Mod08\Labfiles\Starter\Exercise 3** folder, open the **ContosoConf.sln** solution.
2.	Open the **location.htm** file and review the HTML markup for this page. Notice that the page includes the following empty heading:
    ```html
        <h2 id="distance"></h2>
    ```
>**Note**: You will display the distance of the user to the conference venue in this heading later in this exercise.

3.	Review the JavaScript code for this page in the **location.js** file, and note that the conference venue location is stored in a *conferenceLocation* variable:
    ```javascript
        const conferenceLocation = {
            latitude: 47.6097,  // decimal degrees
            longitude: -122.3331 // decimal degrees
        };
    ```

#### Task 2: Get the current location of the user viewing the page

1.	Near the end of the **location.js** file, find the comment:
    ```javascript
        // TODO: Get current position from the geolocation API.
    ```
2.	After this comment, add the code that uses the Geolocation API to get the current location of the user who is viewing the page.
3. To process the location, use the **updateUIForPosition** callback function.

>**Note**: The **updateUIForPosition** function will display the distance of the user from the conference venue. This function is not yet fully implemented. You will complete it in the next task.

4. To handle any errors that might occur, use the **error** callback function.

#### Task 3: Display the distance to the conference venue

1.	In the **location.js** file, complete the **updateUIForPosition** function.
2. Create a *distance* variable.
3. To calculate the distance to the conference venue, use the **distanceFromConference** function. This function requires the coordinates of the user's current location as a parameter.

#### Task 4: Test the Location page

1. Run the application and view the **location.htm** page.

>**Note**: If Microsoft Edge displays the message, **localhost wants to track your physical location**, click **Allow once**.

2.	Verify that the page displays the distance to the conference venue in miles.

>**Result**: After completing this exercise, you will have the **Location** page display the distance of the user from the conference venue.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are **not** included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other internet website references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
