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
        const personApiUrl = "https://randomuser.me/api/?results=3";

        //Create new element by element name
        function createNode(element) {
            return document.createElement(element); 
        }

        // Append the element(el) into the parent
        function append(parent, el) {
            return parent.appendChild(el); 
        }
    ```
7. Define an async method called **getPersons**.
    ```javascript
        async function getPersons() {
        }
    ```
8. inside **getPersons** mathod create **fetch** call to **personApiUrl** and store the response in a variable.
    ```javascript
        let response = await fetch(personApiUrl);
    ```
9. if the **response** is ok create a table and use the map function to iterate for each element in the response element to generate row and add it to the table.
    ```javascript
        if (response.ok) {
            //Converting the response to Json
            const data = await response.json();
            //Get table element
            const table = document.getElementById("PersonTable");
            //Mapping all persons into the table
            data.results.map(function (auther) {
                //Create new element to insert into the table
                const tr = createNode('tr'),
                    fullNameRow = createNode('td'),
                    PicRow = createNode('td'),
                    PicEl = createNode('img'),
                    emailRow = createNode('td');
                //Insert the data into the element
                fullNameRow.innerHTML = `${auther.name.title}. ${auther.name.last} ${auther.name.first}`;
                PicEl.src = auther.picture.medium;
                emailRow.innerHTML = auther.email;
                //Insert the elements into the table
                append(tr, fullNameRow);
                append(PicRow, PicEl);
                append(tr, PicRow);
                append(tr, emailRow);
                append(table, tr);
            })
        }
    ```
10. wrap all the code in **getPerson** mathod with **try-catch**.
    ```javascript
        try {
            //Get request by fetch
            let response = await fetch(personApiUrl);
            if (response.ok) {
                //Converting the response to Json
                const data = await response.json();
                //Get table element
                const table = document.getElementById("PersonTable");
                //Mapping all persons into the table
                data.results.map(function (auther) {
                    //Create new element to insert into the table
                    const tr = createNode('tr'),
                        fullNameRow = createNode('td'),
                        PicRow = createNode('td'),
                        PicEl = createNode('img'),
                        emailRow = createNode('td');
                    //Insert the data into the element
                    fullNameRow.innerHTML = `${auther.name.title}. ${auther.name.last} ${auther.name.first}`;
                    PicEl.src = auther.picture.medium;
                    emailRow.innerHTML = auther.email;
                    //Insert the elements into the table
                    append(tr, fullNameRow);
                    append(PicRow, PicEl);
                    append(tr, PicRow);
                    append(tr, emailRow);
                    append(table, tr);
                })
            }
        }
        catch (e) {
            console.log(e);
        }
    ```
11. Add event listener on **DOMContentLoaded**. get the add person button by it's id **addPersonsBtn** and add an event listener on **click** event and call the **getPerson** mathod.
    ```javascript
        document.addEventListener('DOMContentLoaded', function (event) {
            document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
        });
    ```
12. add the folowing script tag to the **&lt;Head&gt;** element of the **index.html** page.
    ```html
        <script src="/Scripts/indexScript.js"></script>
    ```

#### Run the web application.

1.	In Solution Explorer, double-click **Property**.
2.	On the side menu, click **web**.
3.	select the **Specific Page** then press **...** button and select **Index.html**. 
4.	Click the **IIS Express** (Run).
5.	In Microsoft Edge, press the **Get Persons** button.
6.	Verify that the table is full with persones.
7.	Close Microsoft Edge and return to Visual Studio.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
