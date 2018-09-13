# Module 3: Introduction to JavaScript

# Lesson 1: Overview of JavaScript

### Demonstration: Creating a simple Javascript file that defines Variables, array and functions.

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Create new project

1. On the Windows 10 **Start** screen, open **Visual studio 2017**.
2. In Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. In the **New Project** dialog box, in the left pane, under **Installed** expand the **Visual C#** node, and then click the **Web** node.
4. click **ASP.NET Empty Web Application**.
5. In the **Name** box, type **HtmlBasics**.
6.	In the **Location** box, type **Allfiles\Mod03\Labfiles\Starter\Exercise 1**, and then click **OK**.

#### Add the index page.

1.	In Visual Studio, on the **Project** menu, click **Add New Item**.
2.	In the **Add New Item – HtmlBasics** dialog box, click **HTML Page**.
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
                
            </div>
        </body>
        </html>
    ```

#### Add the JavaScript file.

1.  Right click on the **Script** folder, click **Add**, then click **New Item**.
2.  In the **Add New Item – HtmlBasics** dialog box, click **JavaScript Fike**.
3.  In the **Name** box, type **indexScript.js**.
4.	Click **Add**.
5.  Open **indexScript.js** file.
6.  Create **Init** function
    ```javascript
        function init() {
        }
    ```

7.  Define an array of person with **Name**, **Age** and **Email** property
    ```javascript
        const personsLst = [
        {
            name: 'Adam adam',
            age: 22,
            email: 'adam@example.com'
        },
        {
            name: 'eve perkins',
            age: 18,
            email: 'eve@example.com'
        },
        {
            name: 'melvin wood',
            age: 20,
            email: 'melvin@example.com'
        },
        {
            name: 'signe lorenzo',
            age: 19,
            email: 'signe@example.com'
        },
        {
            name: 'william rasmussen',
            age: 25,
            email: 'william@example.com'
        }]
    ```
8.  Define age property
    ```javascript
        const age = 20;
    ```

9.  Create function that recived an **array** and **age** property and return new array with all the person above the age
    ```javascript
        function getPersonsAboveAge(array, age) {
            const personAboveAge = [];

            for (let person of array) {
            
                if (person.age >= age) {
                    personAboveAge.push(person);
                }
            }
            return personAboveAge;
        }
    ```
10. Create a function that recived an **array** and print it to the console using a for loop
    ```javascript
        function printArray(array) {
            for (let i = 0; i < array.length; i++) {
                console.log(`${array[i].name} (${array[i].age}) ${array[i].email}`);
            }
        }
    ```

11. Call the **printArray** Function from the **init** function with the complate array
    ```javascript
        printArray(personsLst);
    ```
12. call the **getPersonsAboveAge** with the array and the age property we defined earlier and save the return value in **const** property
    ```javascript
        const personAboveAge = getPersonsAboveAge(personsLst, age);
    ```
13. Call the **printArray** again but now with the array above age
    ```javascript
        printArray(personAboveAge);
    ```
14. add the folowing script tag to the **&lt;Head&gt;** element of the **index.html** page.
    ```html
        <script src="/Scripts/indexScript.js"></script>
    ```

#### Run the web application.

1.	In Solution Explorer, double-click **Property**.
2.	On the side menu, click **web**.
3.	select the **Specific Page** then press **...** button and select **Index.html**. 
4.	Click the **IIS Express** (Run).
5.	In Microsoft Edge, press F12 to see the console.
6.	Verify that the array prints to the console.
7.	Close Microsoft Edge and return to Visual Studio.

### Demonstration: Manipulating the DOM with Javascript

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Create new project

1. On the Windows 10 **Start** screen, open **Visual studio 2017**.
2. In Visual Studio, on the **File** menu, point to **New**, and then click **Project**.
3. In the **New Project** dialog box, in the left pane, under **Installed** expand the **Visual C#** node, and then click the **Web** node.
4. click **ASP.NET Empty Web Application**.
5. In the **Name** box, type **HtmlDOMSample**.
6.	In the **Location** box, type **Allfiles\Mod03\Labfiles\Starter\Exercise 2**, and then click **OK**.

#### Add the index page.

1.	In Visual Studio, on the **Project** menu, click **Add New Item**.
2.	In the **Add New Item – HtmlBasics** dialog box, click **HTML Page**.
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
                <form>
                    <fieldset>
                        <legend>
                            Enter your details
                        </legend>
                        <ol>
                            <li>
                                <label>
                                    <strong>Full name</strong>
                                    <br />
                                    <input type="text" name="UserName" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Telephone number
                                    <br />
                                    <input type="text" name="Phone" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Email Address
                                    <br />
                                    <input type="text" name="Email" />
                                </label>
                            </li>
                            <li>
                                <label>
                                    My hobbies
                                </label>
                                <div id="hobbiesList">
                                    <input type="text" name="hobby" class="hobbiesInput" />
                                    <button type="button" id="newHobbyBtn">Add hobby</button>
                                </div>
                            </li>
                        </ol>
                    </fieldset>
                    <input type="submit" value="Check my details" />
                </form>
            </div>
        </body>
        </html>
    ```

#### Add the JavaScript file.

1.  Right click on the **Script** folder, click **Add**, then click **New Item**.
2.  In the **Add New Item – HtmlBasics** dialog box, click **JavaScript Fike**.
3.  In the **Name** box, type **indexScript.js**.
4.	Click **Add**.
5.  Open **indexScript.js** file.
6.  Create **createNode** function that recive html element name and return html element.
    ```javascript
        function createNode(element) {
            return document.createElement(element);
        }
    ```
7.  Create **append** function that recive parent and childe element and append the childe to the parent
    ```javascript
        function append(parent, el) {
            return parent.appendChild(el);
        }
    ```
8.  Create **addHobbies** function.
9.  Get all input with the **hobbiesInput** class into const variable
    ```javascript
        const inputList = document.querySelectorAll('.hobbiesInput');
    ```
10. Check if **inputList** contain less then 5 element and add new input with the **createNode** and **append** functions otherwise remove the event listener
    ```javascript
        if (inputList.length < 5) {
        
            const hobbiesList = document.getElementById('hobbiesList');
        
            const newLineElement = createNode('br'),
            inputElement = createNode('input');
        
            inputElement.setAttribute("class", "hobbiesInput");
        
            append(hobbiesList, newLineElement);
            append(hobbiesList, inputElement);
        }
        else {
            document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
        }
    ```
11.  Add event listener on **DOMContentLoaded** on the java script page
    ```javascript
        document.addEventListener('DOMContentLoaded', function (event) {
            
        });
    ```
12.  Get **newHobbyBtn** button by **getElementById**, add event listener on the button and attach **addHobbies** function.
    ```javascript
        document.getElementById('newHobbyBtn').addEventListener('click', addHobbies);
    ```
13. add the folowing script tag to the **&lt;Head&gt;** element of the **index.html** page.
    ```html
        <script src="/Scripts/indexScript.js"></script>
    ```

#### Run the web application.

1.	In Solution Explorer, double-click **Property**.
2.	On the side menu, click **web**.
3.	select the **Specific Page** then press **...** button and select **Index.html**. 
4.	Click the **IIS Express** (Run).
5.	In Microsoft Edge, press F12 to see the console.
6.	Verify that the array prints to the console.
7.	Close Microsoft Edge and return to Visual Studio.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
