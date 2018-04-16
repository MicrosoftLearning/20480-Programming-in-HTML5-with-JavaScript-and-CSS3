# Module 13: Implementing Real-time Communication by Using Web Sockets

# Lesson 2: Using the WebSocket API

### Demonstration: Performing Real-time Communication by Using Web Sockets

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

1.	Read the Lab Scenario to students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to students that the Exercise Scenario for each exercise contains a description of what they will accomplish in the exercise, and is also essential reading.
3.	Start Visual Studio, and open the **ContosoConf.sln** solution in the **Allfiles\Mod13\Labfiles\Solution\Exercise 3** folder.
4.	On the **Debug** menu, click **Start Without Debugging**.

>**Note:** If the message **Intranet settings are turned off by default** appears, click **Don’t show this message** again.

5.	In Internet Explorer, in the navigation bar, click **Live**. Highlight the questions that appear, together with the **Report** link that enables a user to request that an inappropriate question be removed.
6.	In the **Ask a question** box, type **What color are my eyes?**, and then click **Ask**. Point out that the question is posted to a server, which then sends a response back to the browser and the question appears in the list on this page.
7.	Mention that if several users are viewing the same web site, the same questions will appear in their browsers.
8.	Click the **Report** link by the **What color are my eyes?** question. Explain that the web page changes the text of the link to **Reported** while the question is evaluated by the web server. The web server removes the question, all browsers displaying the **Live** page are updated, and the question disappears.
9.	Close Internet Explorer.
10.	In Solution Explorer, expand the **ContosoConf** project, expand the **scripts** folder, expand the **pages** folder, and then double-click **live.js**. 
11.	In the Code Editor window, point out the following functions:
-	**initializeSocket**. This function arranges to handle the **onmessage** event of the socket and call the **handleSocketMessage()** function whenever a message arrives.
-	**askQuestion**. This function runs when the user has typed a question and clicked **Ask**. The text is formatted as a message and serialized as JSON before being sent to the web server for processing.
-	**handleSocketMessage**. This function runs when the web server sends a message back to the browser. The function examines the incoming message, and if it contains questions it calls the **handleQuestionsMessage()** function to display the questions on the web page. If the message contains a remove request, the function calls the **handleRemoveMessage()** function to remove the question from the web page.
-	**handleQuestionsMessage**. This function parses a message and displays the questions that it contains on the web page.
-	**reportQuestion**. This function runs when the user clicks the **Report** link; it sends a report message to the web server that contains the id of the question to be removed.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
