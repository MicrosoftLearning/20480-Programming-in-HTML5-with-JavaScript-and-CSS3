# Module 1: Overview of HTML and CSS

# Lesson 1: Overview of HTML

### Demonstration: Creating a Simple Contact Form

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/get_started/Allfiles.
2. Navigate to **Allfiles/Mod01/Democode**, and then open the **DemoWebSite - Complete.sln** file.
3. Run the **DemoWebSite - Complete.sln** application.
4. In the Address bar of the Microsoft Edge window, note the port number that appears after "http://localhost:" You will use the port number during this demonstration.
5. Close the Microsoft Edge window.


#### Demonstration Steps

#### Create an HTML Page

1. On the Windows 8 **Start** screen, right-click outside of any tile, and in the task bar click **All apps**.
2. On the Windows 8 **Start** screen, in the **Windows Accessories** section, click **Notepad**.
3. Add the following basic HTML structure to the blank text file.
    ```html
       <!DOCTYPE HTML>
        <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>Contact Us</title>
            </head>
            <body>

            </body>
        </html>
    ```

4. Save the file as **Allfiles\Mod01\Democode\ ContactUs.html**.

#### Add Content to the Page

1.	Add a level 1 page heading to the **&lt;body&gt;** element.
    ```html
    <h1>Contact Contoso Conferencing</h1>
    ```
2.  Add the company address by using two paragraphs and the line break element as follows:
    ```html
    <p>Contoso Conferencing Ltd.</p>
    <p>
        123 South Street<br />
        Somewhere<br />
        Over There<br />
        <em>USA</em>
    </p>
    ```

3.	Add a hyperlink for the company's contact email address. Note the use of the **mailto**: protocol rather than the more common **http://**.
    ```html
    <p>
        <a href="mailto:contact@contoso.com">
        contact@contoso.com</a>
    </p>
    ```
4.	Add the following text to invite users to use the contact form.
    ```html
    <p>
        If you would like to contact Contoso Conferencing, whether you're interested in our services or in a conference we're currently organising, don't hesitate to contact us using our enquiry form (<strong>Bold fields</strong> are required).
    </p>
    ```
5.	Save the file.

#### Add a Form with Input Controls
1.	Add the following **form** element to the page beneath the text created previously.
    ```html
    <form method="Post" action="support.aspx">
    </form>
    ```
2.	Add the following **fieldset** element and submit button to the form (between the **&lt;form …&gt;** and , **&lt;/form&gt;** tags).
    ```html
    <fieldset>
        <legend>
            Your Details and Enquiry
        </legend>
    </fieldset>
    <input type="submit" value="Send" />
    ```


3.	Add the unordered list shown in the following code sample to the **&lt;fieldset&gt;** element below the **&lt;/legend&gt;** tag. This list contains input elements for the user's name, telephone number, email address, and a message.
    ```html
    <ol>
        <li>
          <label>
            <strong>Name</strong><br />
            <input type="text" 
                   name="UserName" />
          </label>
        </li>
        <li>
          <label>
            Telephone<br />
            <input type="text" 
                   name="Phone" />
          </label>
        </li>
        <li>
          <label>
            Email Address<br />
            <input type="text" 
                   name="Email" />
          </label>
        </li>
        <li>
          <label>
            <strong>Message</strong><br />
            <textarea name="Message" 
              cols="30" rows="10">Add your message here
            </textarea>
          </label>
        </li>
    </ol>
    ```

4.	Save the file and close Notepad.

#### View the Page
1.	In the Windows taskbar, click the File Explorer icon.
2.	Browse to the folder **Allfiles\Mod01\Democode**.
3.	Double-click **ContactUs.html** to display the page in Microsoft Edge.
4.	In the **How do you want to open this type of file (.html)?** dialog box, click **Microsoft Edge**.

![alt text](./Images/20480B_1_ContactUs.png "About page")

# Lesson 3: Creating a Web Application by Using Visual Studio 2017

### Demonstration: Creating a Web Site by Using Visual Studio 2017

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/get_started/Allfiles.
2. Navigate to **Allfiles/Mod01/Democode**, and then open the **DemoWebSite - Complete.sln** file.
3. Run the **DemoWebSite - Complete.sln** application.
4. In the Address bar of the Microsoft Edge window, note the port number that appears after "http://localhost:" You will use the port number during this demonstration.
5. Close the Microsoft Edge window.


#### Demonstration Steps

#### Create a Web Site Project

1.	On the Windows 8 **Start** screen, click the **Visual Studio 2017** tile.
2.	In Visual Studio, on the **File** menu, point to **New*, and then click **Web Site**.
3.	In the **New Web Site** dialog box, click **ASP.NET Empty Web Site**.

 
>**Note:** It does not matter whether you select the **Visual Basic** or **Visual C#** templates in the left pane; the templates for both languages enable you to create HTML5 web pages and implement functionality by using JavaScript.

4.	From the web location drop-down list, click **File System**, set the file path to **Allfiles\Mod01\Democode\DemoWebSite**, and then click **OK**.
5.	On the **File** menu, click **Save DemoWebSite**.

#### Add and Edit Files in the Project

1.	In Visual Studio, click **Solution Explorer**.
2.	In the Solution Explorer window, right-click the **DemoWebSite** project.
3.	In the context menu, point to **Add** and then click **Existing Item**.
4.	In the **Add Existing Item** dialog box, browse to **Allfiles\Mod01\Democode**, click **ContactUs.html**, and then click **Add**.
5.	In the Solution Explorer window, right-click **ContactUs.html**, and then click **Set As Start Page**.
6.	In the Solution Explorer window, right-click the **DemoWebSite** project, point to **Add**, and then click **New Folder**
7.	Change the name of the folder to **styles**.
8.	Right-click the **styles** folder, point to **Add**, and then click **Add New Item**
9.	In the **Add New Item - DemoWebSite** dialog box, in the middle pane, click **Style Sheet**, in the **Name** box, type **ContactUsStyles.css**, and then click **Add**.

>**Note:** You can also use the **Add New Item** dialog box to create new JavaScript and HTML files and add them to a project.

10.	In the ContactUsStyles.css file, add the following style shown in bold:
    ```css
        body {
            font-family: 'Times New Roman';
            color: blue;
        }
    ```
11.	In the Solution Explorer window, double-click **ContactUs.html**.
12.	Add the following markup shown in bold to the **&lt;head&gt;** element of the page.
    ```html
        <head>
            <meta charset="UTF-8" />
            <title>Contact Us</title>
            <link href="styles/ContactUsStyles.css" rel="stylesheet" type="text/css" />
        </head>
    ```
>**Note:** HTML IntelliSense provides hints to help ensure that you enter valid HTML. The **Pick URL** wizard enables you to quickly select a style sheet.

13.	On the **File** menu, click **Save All**.

#### Run the Web Application
1.	In Visual Studio, on the **Debug** menu, click **Start Debugging**.
2.	In the **Debugging Not Enabled** dialog box, click **Modify the Web.config file to enable debugging**, and then click **OK**.
3.	Verify that Microsoft Edge starts running and displays ContactUs.html. The text for the page should appear in blue.
4.	In Microsoft Edge, if the message **Intranet settings are turned off by default** appears, click **Don’t show this message** again.

>**Note** You can enter some sample data, but do not click **Send** because the URL that is the target of the form is not available.

5.	Leave Microsoft Edge running and return to Visual Studio 2017.

#### Modify the Live Application
1.	In the **ContactUs.html** file, make the following modifications:
   - Change **&lt;strong>Name</strong&gt;** to **&lt;strong>Full name</strong&gt;**.
   - Change **Telephone** to **Telephone number**.
2.	In the ContactUsStyles.css file, add the following style:
    ```css
        h1 {
            font-family: 'Copperplate Gothic';
            color: red;
        }
    ```

3.	On the **File** menu, click **Save All**.
4.	Return to Microsoft Edge and press F5 to refresh the display.
5.	Verify that the **Name** field changes to **Full name**, the **Telephone** field changes to **Telephone number**, and that the style of the heading has changed.
6.	Return to Visual Studio 2017.
7.	On the **Debug** menu, click **Stop Debugging**.

### Demonstration: Exploring the Contoso Conference Application

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/get_started/Allfiles.
2. Navigate to **Allfiles/Mod01/Democode**, and then open the **DemoWebSite - Complete.sln** file.
3. Run the **DemoWebSite - Complete.sln** application.
4. In the Address bar of the Microsoft Edge window, note the port number that appears after "http://localhost:" You will use the port number during this demonstration.
5. Close the Microsoft Edge window.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
