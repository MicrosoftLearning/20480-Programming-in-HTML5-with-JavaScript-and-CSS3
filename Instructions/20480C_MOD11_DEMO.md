# Module 11: Creating Advanced Graphics

# Lesson 1: Creating Interactive Graphics by Using SVG

### Demonstration: Using SVG Transformations and Events

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/get_started/Allfiles.

#### Demonstration Steps

#### Transform SVG Elements

1.	On the Windows 10 **Start** screen, click the **Desktop** tile.
2.	On the Windows taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the file **Allfiles\Mod11\Democode\SvgDocument.html**. 
4.	If a message box appears asking if you want to allow blocked content, click the **Allow blocked content** button.
5.	In Microsoft Edge, click the **Transformations** button.
6.	Right-click the web page in Microsoft Edge, and then click **View source**.
7.	In the source window, locate the &lt;!-- Demonstrate transformations --&lt; comment and review the **&lt;svg&gt;** element: 
o	The <transform> elements translate the square by 200 units in the X and Y axes, scale it by a factor of 0.5, and rotate it.
8.	Close the source window.

#### Handle Events on SVG Elements

1.	In Microsoft Edge, click the **Events** button.
2.	Hover the mouse over the red shape on the left side of the window. Verify that the shape changes to a yellow fill color and a dotted green border.
3.	Move the mouse off the shape. Verify that it reverts to a red fill color with no outline.
4.	Hover the mouse over the blue shape on the right side of the window. Verify that the shape changes to a yellow fill color and a dotted green border.
5.	Move the mouse off the shape. Verify that it reverts to a blue fill color with no outline.
6.	Click the red shape. Verify that a message box appears, indicating that the shape represents Alaska. Close the message box.
7.	Click the blue shape. Verify that a message box appears, indicating that the shape represents Hawaii. Close the message box.
8.	Right-click in the browser window, and then click **View source**. 
9.	In the source window, locate the **&lt;!-- Demonstrate events --&gt;** comment and review the **&lt;svg&gt;** element:
- The **&lt;path&gt;** elements contain the data that defines the two maps.
- Each **&lt;path&gt;** element responds to the **onmousedown** event and uses JavaScript code to display the appropriate message.
10.	In the source window, locate the **path:hover** CSS rule near the top of the document. This CSS rule defines the style for all **&lt;path&gt;** elements when the user hovers over them with the mouse. 
11.	Close the source window.
12.	Close Microsoft Edge.

# Lesson 2: Drawing Graphics by Using the Canvas API

### Demonstration: Performing Transformations by Using the Canvas API

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/get_started/Allfiles.

#### Demonstration Steps

#### Perform Simple Transformations

1.	On the Windows 10 **Start** screen, click the **Desktop** tile.
2.	On the Windows taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the file **Allfiles\Mod11\Democode\CanvasDocument.html**. 
4.	If a message box appears asking if you want to allow blocked content, click the **Allow blocked content** button.
5.	In Microsoft Edge, click the **Separate Transformations** button.
6.	Right-click the web page in Microsoft Edge, and then click **View source**.
7.	In the source window, locate the **demoSeperateTransformations** function and review the code: 
- The **demoSeperateTransformations** function uses the **drawShape** function to draw a triangle filled with an image of the Welsh flag.
- Before calling the drawShape function, the code transforms the context; it moves the canvas to the right and down by half the width and height of the canvas, then it scales the context by a different value in the X and Y dimensions, and then rotates the context by PI/4 radians.
- When the **drawShape** function is called, the image is transformed according to the context settings.

>**Note:** If time allows, comment out each of the transformations and run the code again. Then uncomment each transformation one at a time, so that students can see the effects of each one.

#### Perform Matrix Transformation

1.	In Microsoft Edge, click the **Matrix Transformations** button.
2.	In the source window, locate the **demoMatrixTransformations** function and review the code: 
- This function is similar to the previous one in that it transforms the context and then calls the **drawShape** function to display the image.
- The difference is that this function uses the **transform** function to perform a matrix transformation, scaling, skewing, and translating the context in a single function call.
3.	Close the source window.
4.	Close Microsoft Edge.

### Demonstration: Creating Advanced Graphics

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub. It contains the code segments for this course's labs and demos. https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/get_started/Allfiles.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
