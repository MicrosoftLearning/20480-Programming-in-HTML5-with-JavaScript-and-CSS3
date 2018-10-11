# Module 5: Communicating with a Remote Server

# Lesson 3: Sending and Receiving Data by Using Fetch API

### Demonstration: Communicating with a Remote Data Source

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Create a New Project

1. Open Microsoft Visual Studio 2017.
2. In Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. In the **New Project** dialog box, in the left pane, under **Installed**, expand the **Visual C#** node, and then click the **Web** node.
4. Click **ASP.NET Web Application (.NET Framework)**.
5. In the **Name** box, enter **New fetchWeb**.
6.	In the **Location** box, enter **[Repository Root]\Allfiles\Mod05\Democode**, and then click **OK**.

#### Add the Index Page

1.	In Visual Studio, on the **Project** menu, click **Add New Item**.
2.	In the **Add New Item – fetchWeb** dialog box, click **HTML Page**.
3.	In the **Name** box, enter **index.html**.
4.	Click **Add**.
5. Open the **index.html** file.
6. Inside the file, add the following text:
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

#### Add the JavaScript File

1. Right-click the **Script** folder, click **Add**, and then select **New Item**.
2. In the **Add New Item – fetchWeb** dialog box, click **JavaScript File**.
3. In the **Name** box, enter **indexScript.js**.
4.	Click **Add**.
5. Open the **indexScript.js** file.
6. Add the following code to **indexScript.js**:
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
8. Inside the **getPersons** method, create **fetch**, call to **personApiUrl**, and then store the response in a variable.
    ```javascript
        let response = await fetch(personApiUrl);
    ```
9. If the **response** is ok, create a table and use the map function to iterate for each element in the response element to generate row and add it to the table.
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
10. Wrap all the code in the **getPerson** method with **try-catch**.
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
11. Add an event listener in **DOMContentLoaded**. Get the add person button by its ID **addPersonsBtn** and then add an event listener on the **click** event to call the **getPerson** method.
    ```javascript
        document.addEventListener('DOMContentLoaded', function (event) {
            document.getElementById('addPersonsBtn').addEventListener('click', getPersons);
        });
    ```
12. Add the folowing **script** tag to the **&lt;Head&gt;** element of the **index.html** page.
    ```html
        <script src="/Scripts/indexScript.js"></script>
    ```

#### Run the Web Application

1.	In **Solution Explorer**, double-click **Property**.
2.	On the side menu, click **web**.
3.	Select the specific page, click **...**, and then select **Index.html**. 
4.	Click **IIS Express (Run)**.
5.	In Microsoft Edge, click **Get Persons**.
6.	Verify that the table lists all the people.
7.	Close Microsoft Edge, and then return to Visual Studio.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
