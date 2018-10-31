# Module 11: Creating Advanced Graphics
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 1: Creating Interactive Graphics by Using SVG

### Demonstration: Using Scalable Vector Graphics (SVG) Transformations and Events

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Transform SVG Elements

1.	On the **Start** menu, click the **Desktop** tile.
2.	On the taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the **[Repository Root]\Allfiles\Mod11\Democode\SvgDocument.html** file.
4.	If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.
5.	In Microsoft Edge, click **Transformations**.
6.	in Microsoft Edge, right-click the webpage, and then select **View source**.
7.	In the source window, locate the **&lt;!-- Demonstrate transformations --&lt;** comment, and then review the **&lt;svg&gt;** element:
-	The **<transform>** elements translate the square by **200** units in the X and Y axes, scale it by a factor of **0.5**, and then rotate it.
8.	Close the source window.

#### Handle Events on SVG Elements

1.	In Microsoft Edge, click **Events**.
2.	Place the mouse pointer over the red shape on the left side of the window. Verify that the color of the shape changes to yellow with a dotted green border.
3.	Move the mouse pointer off the shape. Verify that its color reverts to red with no outline.
4.	Place the mouse pointer over the blue shape on the right side of the window. Verify that the color of the shape changes to yellow with a dotted green border.
5.	Move the mouse pointer off the shape. Verify that its color reverts to blue with no outline.
6.	Click the red shape. Verify that a message box appears, indicating that the shape represents Alaska. Close the message box.
7.	Click the blue shape. Verify that a message box appears, indicating that the shape represents Hawaii. Close the message box.
8.	Right-click in the browser window, and then select **View source**.
9.	In the source window, locate the **&lt;!-- Demonstrate events --&gt;** comment, and then review the **&lt;svg&gt;** element:
- The **&lt;path&gt;** elements contain the data that defines the two maps.
- Each **&lt;path&gt;** element responds to the **onmousedown** event and uses JavaScript code to display the appropriate message.
10.	In the source window, locate the **path:hover** Cascading Style Sheets (CSS) rule near the top of the document. This CSS rule defines the style for all **&lt;path&gt;** elements when the user places the mouse pointer over them.
11.	Close the source window.
12.	Close Microsoft Edge.

>**Note**: The HTML document has two buttons that enable you to demonstrate transformations and events. There is a separate **&lt;svg&gt;** element for each part of the demonstration. When you click one of the buttons on the page, the page uses the DOM to locate the appropriate **&lt;svg&gt;** element for that part of the demonstration.
When you click **Transformations**, the webpage displays two rectangles. The first rectangle is not transformed. The second rectangle has three transformations applied to it: a translation, a scale, and a skew in the X direction.
When you click **Events**, the webpage displays two **&lt;path&gt;** shapes representing Alaska and Hawaii. To display a message box when the user clicks the shape, the **onmousedown** event is handled on each shape. The webpage also defines a CSS rule that changes the color of the shape when the user places the mouse pointer over the shape.


# Lesson 2: Drawing Graphics by Using the Canvas API

### Demonstration: Performing Transformations by Using the Canvas API

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Perform Simple Transformations

1.	On the **Start** menu, click the **Desktop** tile.
2.	On the taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the **[Repository Root]\Allfiles\Mod11\Democode\CanvasDocument.html** file.
4.	If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.
5.	In Microsoft Edge, click **Separate Transformations**.
6.	In Microsoft Edge, right-click the webpage, and then select **View source**.
7.	In the source window, locate the **demoSeperateTransformations** function, and then review the code:
- The **demoSeperateTransformations** function uses the **drawShape** function to draw a triangle filled with an image of the Welsh flag.
- Before calling the **drawShape** function, the code transforms the context. It moves the canvas to the right and down by half the width and height of the canvas, then it scales the context by a different value in the X and Y dimensions, and then rotates the context by **pi/4** radians.
- When the **drawShape** function is called, the image is transformed according to the context settings.

>**Note**: If time allows, comment out each of the transformations and run the code again. Then, uncomment each transformation one at a time, so that students can see the effects of each one.

#### Perform Matrix Transformation

1.	In Microsoft Edge, click **Matrix Transformations**.
2.	In the source window, locate the **demoMatrixTransformations** function, and then review the code:
- This function is similar to the previous one in that it transforms the context, and then calls the **drawShape** function to display the image.
- The difference is that this function uses the **transform** function to perform a matrix transformation, and scales, skews, and translates the context in a single function call.
3.	Close the source window.
4.	Close Microsoft Edge.

>**Note**: When you click **Separate Transformations**, the webpage invokes the **demoSeparateTransformations()** function. This function invokes separate transformation functions in the two-dimensional context. Explain these functions. Also point out the **save()** and **restore()** function calls, which save the initial context, and then restore it at the end of the drawing operations.
When you click **Matrix Transformations**, the webpage invokes the **demoMatrixTransformations()** function. This function performs a composite relative transformation on the coordinate system by using the **transform()** function. The code also contains a commented-out call to **setTransform()** to show how to perform an absolute transformation. Explain the difference between **transform()** and **setTransform()**.


### Demonstration: Creating Advanced Graphics

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the exercise scenario for each exercise is essential reading and contains a description of what they will accomplish in the exercise.
3. In Microsoft Visual Studio, on the **File** menu Point to **Open**, and then click **Project/Solution**.
4.	Browse to **[Repository Root]\Allfiles\Mod11\Labfiles\Solution\Exercise 2**, and then open the **ContosoConf.sln** solution.

>**Note**: If **Security Warning for ContosoConf** dialog box appears clear **Ask me for every project in this solution** and then click **OK**.

5.	On the **Debug** menu, click **Start Without Debugging**.

>**Note**: If the **Intranet settings are turned off by default** message appears, click **Don’t show this message** again.

6.	In Microsoft Edge, on the navigation bar, click **Location**.
7.	In the **localhost wants to track your physical location** message box, click **Allow once**.
8.	Scroll down and point out the location map. Mention that the students will implement a part of this map in Exercise 1.
9.	In the location map, click **Room B**. Point out that that the students will write the code to catch the **click** event of the SVG element that defines the map for room B and use this event to display the sessions being held in that room.
10.	Close the Microsoft Edge.
11.	In **Solution Explorer**, expand the **ContosoConf** project, and then double-click **location.htm**.
12.	In the **Code Editor** window, find the **&lt;svg viewBox …&gt;** element, and then explain that students will implement this element to draw the venue map for Room B.
13.	In **Solution Explorer**, expand the **scripts** folder, expand the **pages** folder, and then double-click **location-venue.js**.
14.	In the **Code Editor** window, explain that the code in this file handles the click event for the **&lt;svg&gt;** element, and then displays the list of sessions that run in the room that the user clicked.
15.	In **Solution Explorer**, double-click **speaker-badge.htm**.
16.	In the **Code Editor** window, find the following section:
```html
        <section class="page-section badge">
            <div class="container">
                <h1>Create your speaker badge for ContosoConf</h1>
                <!-- TODO: Add canvas here -->
                <canvas width="500" height="200" style="border: 1px solid #888" data-speaker-id="234724" data-speaker-name="Mark Hanson">
                </canvas>
            </div>
        </section>
   ```
17.	Explain that in Exercise 2, the students will create the **&lt;canvas&gt;** element in this section and use it to display the photograph of the instructor, instead of using an **&lt;img&gt;** element.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
