## Module 8: Creating Interactive Pages by Using HTML5 APIs

## Lab: Creating Interactive Pages with HTML5 APIs

#### Scenario

The ContosoConf organizers want to highlight the latest HTML5 technologies in order to create an interactive experience for people visiting the conference website. Specifically, the conference organizers have asked you to add the following features to the application:
- Conference speakers need a way to generate their badges. A web page should be added that enables a speaker to drag-and-drop a profile picture to start creating their badge.
- A video from a previous conference is available. This video should be available on the Home page.
- The Location page should be customized to display information about the visitor’s current physical location.

#### Objectives

After completing this lab, you will be able to:
- Add video to an HTML page.
- Use a drag-and-drop operation to create interactive pages, and to read files by using the File API.
- Get the location of the user by using the Geolocation API.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Dragging and Dropping Images

#### Scenario

In this exercise, you will begin working on the Speaker Badge page. This page will eventually enable conference speakers to create a badge displaying their name, photo, and ID barcode. In this exercise, you will implement drag-and-drop support so that an image of a speaker can be dropped onto the web page and displayed.

You will add event listeners to handle drag-and-drop events. Then you will use the File API’s FileReader object to read a file as a data URL, which is then displayed on the page. Finally, you will run the application and test the Speaker Badge page.

#### Task 1: Review the HTML markup and JavaScript code for the Speaker Badge page.

1.	Start the **MSL-TMG1** virtual machine if it is not already running.
2.	Start the **20480C-SEA-DEV11** virtual machine if it is not already running, and log on as **Student** with the password **Pa$$w0rd**.
3.	Start Visual Studio and open the **ContosoConf.sln** solution in the **Allfiles\Mod08\Labfiles\Starter\Exercise 1** folder.
4.	Open **speaker-badge.htm** and review the HTML markup for this page. Notice the **&lt;img&gt;** element that will display the speaker’s image when you have implemented the drag-and-drop functionality:
    ```html
        <img style="width: 300px; height: 300px; border: 1px solid #000"/>
    ```
5.	Also notice that the page has script references for jQuery and the **/scripts/pages/speaker-badge.js** file:
    ```html
        <script src="/scripts/jquery.min.js" type="text/javascript"></script>
        <script src="/scripts/pages/speaker-badge.js" type="text/javascript"></script>
    ```
6.	Open the **speaker-badge.js** file in the **scripts/pages** folder, and review the JavaScript code. This code defines a **SpeakerBadgePage** object that controls the page:
    ```javascript
        var SpeakerBadgePage = Object.inherit({ 
            ...
        });
    ```
- You will add code to the **initialize** method of **SpeakerBadgePage** object to configure drag and drop event handlers.
- The **handleDragOver** function has already been implemented; it simply changes the cursor to a "copy" cursor as an item is dragged over an element.
- You will add code to the **handleDrop** function to display the image in the file that the user drops onto an element.
- The **isImageType** function is a utility function that indicates whether the MIME type passed in as the parameter represents a valid image file.
- You will complete the code in the **readFile** method to read the contents of the file dropped on an element by the user.
- The **displayImage** function is another utility function that displays an image in the control referenced by the **imageElement** variable. The **imageElement** variable is created by the **initialize** method, and refers to the **&lt;img&gt;** element on the speaker-badge.htm page.

#### Task 2: Add drag-and-drop event listeners.

1.	In the **speaker-badge.js** file in the **initialize** function, after the comment that starts with // TODO: Add event listeners for element "dragover" and "drop" events, add event listeners for the **dragover** and **drop** events of the **element** variable. These handlers should call the **handleDragOver** and **handleDrop** methods.

>**Note:** The **element** variable contains a reference to the **&lt;img&gt;** element that displays the speaker's image.

#### Task 3: Handle the drop event.

1.	In the **speaker-badge.js** file, find the **handleDrop** function. Notice that the event that invoked the function is passed in as the parameter. 
2.	In this method, add code to perform the following tasks:
- After the comment // TODO: Get the files from the event, create a variable containing the array of files from the **dataTransfer** property of the event.
- After the comment // TODO: Read the first file in the array, add code to ensure that the array is not empty 
- After the comment //       Check the file type is an image, call the **isImageType()** function to ensure the first file is a type of image.

>**Note:** The **isImageType()** function checks that the file specified as the parameter is a jpeg, jpg or png file.

- After the comment //       Use this.readFile to read the file, then display the image, add code to start reading the first file by calling the **readFile** function.

>**Note:** The **readFile** function is not yet complete. You will implement the missing parts of this function in the next task.

- When this operation is complete, call the **displayImage()** function.
- If a non-image file was dropped, display an alert with the following message:
    ```javascript
        Please drop an image file.
    ```

#### Task 4: Read the image by using a FileReader.

1.	In the **speaker-badge.js** file, review the **readFile** method.
2.	Use the File API to implement the missing functionality in the **readFile** method: 
- After the comment // TODO: Create a new FileReader, create a new **FileReader** object and assign it to a variable named **reader**.
- After the comments // TODO: Assign a callback function for reader.onload and // TODO: In the callback use reading.resolveWith(context, [fileDataUrl]); to return the file data URL, add code to assign a callback function to the **onload** property of the **reader** object.
- In the callback, resolve the **reading** deferred object, passing it the result of reading the file.
- After the comment // TODO: Start reading the file as a DataURL, add code that uses the **reader** object to start reading the file as a data URL.

>**Note:** Reading a file is an asynchronous operation, so the **readFile** method returns a jQuery deferred object that is resolved after the file has been read.

#### Task 5: Test the Speaker Badge page.

1.	Run the application and view the **speaker-badge.htm** page.

>**Note:** The Speaker Badge page is not accessible from the menu bar in the application because this feature is only intended for use by speakers. To view this page, you must navigate directly to the speaker-badge.htm page on the web site.

2.	Drag-and-drop the file **mark-hanson.jpg** in the **Allfiles\Mod08\Labfiles\Resources** folder onto the Speaker Badge page’s empty image element.
3.	Verify that the speaker’s photo is displayed within the image element.

![alt text](./Images/20480B_8_speaker-badge-01.png "The Speaker Badge page with the speaker's photo")

4.	Close Microsoft Edge and File Explorer.

>**Results:** After completing this exercise, you will have implemented functionality that enables the user to drag-and-drop an image from File Explorer onto the web page.

### Exercise 2: Incorporating Video.

#### Scenario

In this exercise, you will add a video to the website Home page. You will add custom controls that enable a user to play and pause the video, and then you will handle video events to display how much playback time has elapsed. Finally, you will run the application, view the Home page, and verify that it plays the video correctly.

#### Task 1: Add a video player to the Home page.

1.	Open the **ContosoConf.sln** solution in the **Allfiles\Mod08\Labfiles\Starter\Exercise 2** folder.
2.	Open the **index.htm** file and find the following comment:
    ```html
        <!-- TODO: Add video tag here -->
    ```
3.	Add a **&lt;video&gt;** element, using the video source specified in the **index.htm** file. 

#### Task 2: Add controls to the video player.

1.	In the **index.htm** file after the **&lt;video&gt;** element, add a **&lt;div&gt;** element with the class **video-controls** and a style of **display-none**. 
- This **&lt;div&gt;** element should contain two buttons; **Play** and **Pause**. 
- Set the **class** of the **Play** button to **video-play** and set the **class** of the **Pause** button to **video-pause**.
2.	Also add a **&lt;span&gt;** element with the class **video-time** to the **&lt;div&gt; element**; you will use this span to display the elapsed time for the video.

>**Note:** The JavaScript code used by this page references the play, pause, and elapsed time elements on the page by using the classes specified in this task.

1.  Add a reference to the **video.js** script in the **/scripts/pages** folder
    to the index.htm file.

#### Task 3: Control the video by using JavaScript code.

1.  The custom video control elements are hidden when the page initially loads.
Open the **video.js** file in the **scripts\\pages** folder and review the
code in this file.
2.  Complete the **ready** function to display the video control elements (use
the **block** style). The video controls are available in the **controls**
variable.
3. Near the bottom of the file, add an event listener for the **loadeddata** event
of the video, which calls the **ready** function.
4.  In the **video.js** file, complete the **play** and **pause** functions.
- In the **play** method, start the video playing, hide the play button,
and display the pause button.
- In the **pause** method, pause the video, hide the pause button, and display the
play button.

>**Note:** The **video** variable holds a reference to the video player.
>
>Display or hide a control by setting the **style.display** property of the control.

5.	Add click event listeners for the play and pause buttons, which call the **play** and **pause** functions, respectively.

#### Task 4: Display the video elapsed time.

1.	Complete the **updateTime** function, to display the elapsed time of the video in the time DOM element.
- Use the **formatTime** helper function to convert the total seconds into HH:MM:SS format.
2.	Near the end of the video.js file, add a **timeupdate** event listener for the video element that invokes the **updateTime** function.

#### Task 5: Test the video player.

1.	Run the application and view the **index.htm** page.
2.	Wait for the video to load and the Play button to appear.
3.	Click **Play**, verify that the video begins to **play** and that the elapsed time is displayed.
4.	Click **Pause** and verify that the video pauses.

>**Note:** You will not hear any sound because the virtual machine does not support audio.

>**Result:** After completing this exercise, you will have added a video player to the Home page.

### Exercise 3: Using the Geolocation API to Report the User's Current Location.

#### Scenario

In this exercise, you will modify the Location page to react to the current geographic location of the user viewing the page.

You will use the Geolocation API to get the visitor’s current location, and then you will calculate and display the distance to the conference venue. Finally, you will run the application and verify that this feature is working as expected.

#### Task 1: Review the HTML markup and JavaScript code.

1.	Open the **ContosoConf.sln** solution in the **Allfiles\Mod08\Labfiles\Starter\Exercise 3** folder.
2.	Open the **location.htm** file and review the HTML markup for this page. Notice that the page includes the following empty heading:
    ```html
        <h2 id="distance"></h2>
    ```
- You will display the distance of the user to the conference venue in this heading later in this exercise. 
3.	Review the JavaScript code for this page in the **location.js** file, and note that the conference venue location is stored in a variable named **conferenceLocation**:
    ```javascript
        var conferenceLocation = {
            latitude: 47.6097,  // decimal degrees
            longitude: 122.3331 // decimal degrees
        };
    ```

#### Task 2: Get the current location of the user viewing the page.

1.	Near the end of the **location.js** file find the comment:
    ```javascript
        // TODO: Get current position from the geolocation API.
    ```
2.	After this comment, add code that uses the Geolocation API to get the current location of the user viewing the page.
- Use the callback function **updateUIForPosition** to process the location.

>**Note:** The **updateUIForPosition** function will display the distance of the user from the conference venue. This function is not yet fully implemented; you will complete it in the next task.

- Use the callback function **error** to handle any errors that might occur.

#### Task 3: Display the distance to the conference venue.

1.	In the **location.js** file, complete the **updateUIForPosition** function:
- Create a variable named **distance**
- Use the **distanceFromConference** function to calculate the distance to the conference venue. This function requires the coordinates of the user's current location as a parameter.

#### Task 4: Test the Location page.

1.	Run the application and view the **location.htm** page.

>**Note:** If Microsoft Edge displays the message **localhost wants to track your physical location**, click **Allow once**.

2.	Verify that the page displays the distance to the conference venue in miles.

>**Result:** After completing this exercise, you will have a Location page that displays the distance of the user from the conference venue.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
