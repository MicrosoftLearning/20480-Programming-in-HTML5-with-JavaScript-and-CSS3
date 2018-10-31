# Module 13: Implementing Real-time Communication by Using Web Sockets
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 2: Using the WebSocket API

### Demonstration: Performing Real-time Communication by Using Web Sockets

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the exercise scenario for each exercise contains a description of what they will accomplish in the exercise and is also essential reading.
3.	Start Microsoft Visual Studio, browse the **[Repository Root]\Allfiles\Mod13\Labfiles\Solution\Exercise 3** folder, and then open the **ContosoConf.sln** solution.

>**Note**: If **Security Warning for ContosoConf** dialog box appears clear **Ask me for every project in this solution** and then click **OK**.

4.	On the **Debug** menu, click **Start Without Debugging**.

>**Note:** If the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**.

5.	In Microsoft Edge, in the navigation bar, click **Live**. Highlight the questions that appear, together with the **Report** link that enables a user to request that an inappropriate question be removed.
6.	In the **Ask a question** box, type **What color are my eyes?**, and then click **Ask**. Point out that the question is posted to a server, which then sends a response back to the browser and the question appears in the list on this page.
7.	Mention that if several users are viewing the same website, the same questions will appear in their browsers.
8.	Next to the **What color are my eyes?** question, click the **Report** link. Explain that the web page changes the text of the link to **Reported** while the question is evaluated by the web server. The web server removes the question, all browsers displaying the **Live** page are updated and the question disappears.
9.	Close Microsoft Edge.
10.	In Solution Explorer, expand the **ContosoConf** project, expand the **scripts** folder, and then double-click **LivePage.js**. 
11.	In the Code Editor window, point out the following methods:
-	**initializeSocket**. This method arranges to handle the **onmessage** event of the socket and call the **handleSocketMessage()** method whenever a message arrives.
-	**askQuestion**. This method runs when the user has typed a question and clicked **Ask**. The text is formatted as a message and serialized as JSON before being sent to the web server for processing.
-	**handleSocketMessage**. This method runs when the web server sends a message back to the browser. The method examines the incoming message, and if it contains questions it calls the **handleQuestionsMessage()** method to display the questions on the web page. If the message contains a remove request, the method calls the **handleRemoveMessage()** method to remove the question from the web page.
-	**handleQuestionsMessage**. This method parses a message and displays the questions that it contains on the web page.
-	**reportQuestion**. This method runs when the user clicks the **Report** link; it sends a report message to the web server that contains the id of the question to be removed.
12. Close all open windows.


©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet website references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
