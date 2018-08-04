# Module 5: Communicating with a Remote Server

# Lesson 3: Sending and Receiving Data by Using Fetch API

### Demonstration: Communicating with a Remote Data Source

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Create new project

1. On the Windows 10 **Start** screen, open **Visual studio 2017**.
2. In Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. In the **New Project** dialog box, in the left pane, under **Installed** expand the **Visual C#** node, and then click the **Web** node.
4. click **ASP.NET Empty Web Application**.
5. In the **Name** box, type **fetchWeb**.
6.	In the **Location** box, type **Allfiles\Mod05\Democode**, and then click **OK**.

#### Add the index page.

1.	In Visual Studio, on the **Project** menu, click **Add New Item**.
2.	In the **Add New Item – fetchWeb** dialog box, click **HTML Page**.
3.	In the **Name** box, type **index.html**.
4.	Click **Add**.
5.  Open **index.html** file.
6.  Inside the file add the following text
    ```html
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>HTML Basic</title>
            <link href="/Content/Site.css" rel="stylesheet" type="text/css" />
            <link href="/Content/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <script src="/Scripts/modernizr-2.6.2.js"></script>
            <script src="/Scripts/IndexScript.js"></script>
        </head>
        <body>
            <div class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav"></ul>
                    </div>
                </div>
            </div>
            <div class="container body-content">
                <br />
                <button id="addPersonsBtn">Get Persons</button>
                <hr />
                <table id="PersonTable">
                    <tr>
                        <th>Full name</th>
                        <th>Picture</th>
                        <th>Email</th>
                    </tr>
                </table>
            </div>
        </body>
        </html>
    ```

#### Add the JavaScript file.

1.  Right click on the **Script** folder, click **Add**, then click **New Item**.
2.  In the **Add New Item – fetchWeb** dialog box, click **JavaScript File**.
3.  In the **Name** box, type **indexScript.js**.
4.	Click **Add**.
5.  Open **indexScript.js** file.
6.  Add the following code to **indexScript.js**
    ```javascript
        //server URL
        const weatherApiUrl = "https://randomuser.me/api/?results=3";

        //Create new element by element name
        function createNode(element) {
            return document.createElement(element); 
        }

        // Append the element(el) into the parent
        function append(parent, el) {
            return parent.appendChild(el); 
        }
    ```


©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
