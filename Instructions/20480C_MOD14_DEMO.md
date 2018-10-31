# Module 14: Performing Background Processing by Using Web Workers

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 2: Performing Asynchronous Processing by Using Web Workers

### Demonstration: Creating a Web Worker Process

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course. 

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the exercise scenario for each exercise contains a description of what they will accomplish in the exercise, and is also essential reading.
3.	Start Microsoft Visual Studio, and then from the **[Repository Root]\Allfiles\Mod14\Labfiles\Solution\Exercise 1** folder, open the **ContosoConf.sln** solution.

>**Note**: If **Security Warning for ContosoConf** dialog box appears clear **Ask me for every project in this solution** and then click **OK**.

4.	In **Solution Explorer**, expand the **ContosoConf** project, and then double-click **speaker-badge.htm**.
5.	On the **Debug** menu, click **Start Without Debugging**.

>**Note**: If the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**.

6.	On the taskbar, click **File Explorer**.
7.	Browse to the **[Repository Root]\Allfiles\Mod14\Labfiles\Resources** folder.
8.	From File Explorer, drag **mark-hanson-large.jpg** to Internet Explorer and drop it on the canvas with the label **Drag your profile photo here**.
9.	Verify that you can scroll the page up and down while the image is being processed.
10.	Wait until the grayscale image of the presenter has been generated (this may take a minute or two), and then close Microsoft Edge.
11.	In **Solution Explorer**, expand the **ContosoConf** project, expand the **scripts** folder, and then double-click **grayscale-worker.js**.
12.	In the **Code Editor** window, explain that the event handler at the top of the file waits for a message containing a color image. The event handler then calls the **grayscalePixel()** function to convert each pixel in the image to grayscale, and then posts a message with that grayscale image data.
13.	In **Solution Explorer**, double-click **grayscale.js**.
14.	In the **Code Editor** window, find the **grayscaleImage()** function. Explain that this function creates a web worker that runs the **grayscale-worker.js** script, and posts a message to the web worker that contains the data for the image that the user dropped onto the canvas on the form. This function also arranges to catch the message that the web worker posts back, containing the grayscale version of the image, which is displayed on the canvas on the web page.
15.	Point out that the code that sets up the message handler for the web worker uses **bind(this)** to ensure that the anonymous function that handles the event is resolved to the web page and not the web worker variable.
16.	Close ContosoConf - Microsoft Visual Studio, and then close File Explorer.
17. Close all open windows.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
