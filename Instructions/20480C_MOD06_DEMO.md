# Module 6: Styling HTML5 by Using CSS3

# Lesson 2: Styling Block Elements

### Demonstration: Switching Between CSS Layout Models

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

#### Switch between layout modes in a web page

1.	Open **Visual Studio 2017**.
2.	In Visual Studio, on the **File** menu, point to **Open**, and then click **File**.
3.	In the **Open File** dialog, browse to the **Allfiles\Mod06\Democode** folder, click **positioning.html**, and then click **Open**.
4.	Review the code with the students. This file contains an HTML **article** with four **div** elements. The file also contains styles for the **article** and **div** elements.
    ```html
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <title>Positioning Demo</title>
          <style type="text/css">
            body {
              text-align: center;
            }

            article {
              padding: 10px;
              border: 2px solid red;
            }

            div {
              margin: 10px;
              padding: 5px;
              border: 2px solid black;
              width: 150px;
              height : 150px;
            }

            div:nth-child(odd) {
              font-size: 4rem;
            }
          </style>
        </head>
        <body>
          <article>
            <div id="one">One</div>
            <div id="two">Two</div>
            <div id="three">Three</div>
            <div id="four">Four</div>
          </article>
        </body>
        </html>
    ```
5.	On the **File** menu, click **View in Brower (Microsoft Edge)**.
6.	In Microsoft Edge, if the message **Intranet settings are turned off by default** appears, click **Don’t show this message again**.
7.	Observe the four **div** elements laid out underneath each other, in order, within the **article** element. The **article** element has a red border to highlight its boundaries. This is block layout mode.

![alt text](./Images/20480B_6_Layout-Column.png "The div elements in block layout mode")

8.	Press **F12**.
9.	In the F12 Developer Tools pane, press **Ctrl+P** to unpin the window. Position the F12 Developer Tools window so that you can see the Microsoft Edge window at the same time.
10.	Click the **CSS** tab to display the fully expanded version of the layout rules applied to the HTML content.
11.	Right-click the **div** entry, and then click **Add attribute**.
12.	Type **display: inline**, and then press ENTER.
13.	In Microsoft Edge, notice that the four **div** elements are now laid out side-by-side aligned by text baseline with height and width properties ignored. This is inline layout mode.

![alt text](./Images/20480B_6_Layout-Row.png "The div elements in inline layout mode")

14.	Resize the browser window to make it narrower, so you can see how blocks are wrapped onto the next line in inline layout mode.
15.	In the F12 Developer Tools window, on the **CSS** tab, click the **display: inline** rule, change it to read **display:inline-block**, and then press ENTER.
16.	Notice the layout is the same but the **height** and **width** properties are now preserved. This is inline-block mode. 

>**Note:** If necessary, make the browser window wider so that blocks **One** and **Three** are on the same line.

![alt text](./Images/20480B_6_Layout-Inline-Block.png "The div elements in inline-block layout mode")

17.	In Microsoft Edge, resize the browser window so you can see how blocks are wrapped onto the next line in inline layout mode.
18.	In the F12 Developer Tools window, on the **CSS** tab, click the **display: inline-block** rule. Change this rule to **display:-ms-flexbox**, and then press ENTER
19.	Switch to Microsoft Edge to view the new layout. The **div** elements are displayed in a vertical column.
20.	In the F12 Developer Tools window, on the **CSS** tab, click the **display: -ms-flexbox** rule, change it to **display:table-cell**, and then press ENTER.
21.	Switch to Microsoft Edge to view the new layout. The **div** elements are displayed in a horizontal table.

#### Switch between positioning modes in a web page

1.	In the F12 Developer Tools window, on the **CSS** tab, clear the three checkboxes next to the display attributes for **body**, **article**, and **div**.
2.	Right-click the **div** entry, and then click **Add rule after**.
3.	Type **#three** and then press **Tab**.

>**Note:** This action creates a new rule for the **&lt;div&gt;** element with the **id** property set to **three**. This is the **&lt;div&gt;** containing the text **Three**.

4.	Type **position: relative** and then press ENTER.
5.	Right-click the **#three** entry, and then click **Add attribute**.
6.	Type **top: 2em**, and then press ENTER.
7.	Right-click the **#three** entry, and then click **Add attribute**.
8.	Type **left: 2em**, and then press ENTER.
9.	In Microsoft Edge, notice how the **three** box is positioned relative to its normal position.
10.	In the F12 Developer Tools window, on the **CSS** tab, click the **position:relative** rule for the **#three** selector, change it to **position:absolute**, and then press ENTER.
11.	In Microsoft Edge, notice how the **three** box is now positioned relative to its containing **article** block.
12.	In the F12 Developer Tools window, on the **CSS** tab, on the **CSS** tab, click the **position:absolute** rule for the **#three** selectore, change it to **position:fixed**, and then press ENTER.
13.	In Microsoft Edge, notice how the **three** box is positioned relative to the browser window. Make the window small enough to require scrolling and see how the **three** box remains stationary when you scroll (it does not scroll into view).
14.	Close Microsoft Edge, and then close Visual Studio 2017. 

# Lesson 4: Enhancing Graphical Effects by Using CSS3

### Demonstration: Styling Text and Block Elements by Using CSS3

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles.

#### Demonstration Steps

1.	Read the Lab Scenario to students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to students that the Exercise Scenario for each exercise contains a description of what they will accomplish in the exercise, and is also essential reading.
3.	Start Visual Studio, and open the **ContosoConf.sln** solution in the **Allfiles\Mod06\Labfiles\Solution\Exercise 3** folder.
4.	On the **Debug** menu, click **Start Without Debugging**.

>**Note:** If the message **Intranet settings are turned off by default** appears, click **Don’t show this message** again.

5.	In Internet Explorer, on the **Home** page, point out the styling of the items in the navigation bar. Click each page in turn, and notice how the navigation bar uses a ribbon effect to indicate the current page.
6.	In the navigation bar, click **Home**.
7.	On the **Home** page, point out the **Register Free** link. This is an ordinary HTML link created as an **&lt;a&gt;** tag that navigates the user to the **Register** page, but styled to look like a large red button.
8.	Hover the mouse over the **Register Free** link and point out how the link is highlighted.
9.	In the navigation bar, click **About**. Point out the following features of the text on this page:
    1.	The text is formatted in three columns.
    2.	The first letter of the first paragraph as styled as a drop cap.
    3.	The text at the start of all the remaining paragraphs is indented.
    4.	The block quote in the third column is styled to make it stand out.
10.	Close Internet Explorer.
11.	In Solution Explorer, expand the **ContosoConf** project, expand the **styles** folder, and then double-click **nav.css**.
12.	In the Code Editor window, scroll through the code. Point out that students will add the styles defined in this file to change the layout of the navigation bar.
13.	In Solution Explorer, double-click **header.css**. 
14.	In the Code Editor window, summarize the purpose of the following style rules:
    1.	**header.page-header .register**. This rule formats the **Register Free** link as a large red button.
    2.	**header.page-header .register:hover**. This rule highlights the Register Free link when the mouse hovers over it.
    3.	**header.page-header .register:before**. This rule adds a dotted border around the button for the **Register Free** link.
    4.	**header.page-header .register .free**. This rule sets the font size of the word **Free** in the **Register Free** link. This word is displayed with a font size that is 80% of the size of the word **Register**.
15.	In Solution Explorer, in the **styles** folder, expand **pages**, and then double-click **about.css**. 
16.	In the Code Editor window, summarize the purpose of the following style rules:
    1.	**.about > article > section**. This rule formats the text on the **About** page in three columns.
    2.	**.about p:first-child:first-letter**. This rule formats the first letter of the first paragraph as a drop cap.
    3.	**.about p**. This rule indents each paragraph on the **About** page.
    4.	**.about p:first-child**. This rule prevents the drop cap in the first paragraph from being indented.
    5.	**.about blockquote**. This rule formats the text for the block quote on the **About** page.
    6.	**.about blockquote:before**. This rule adds the quote mark to the start of the block quote.


©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
