# Module 12: Animating the User Interface
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 1: Applying CSS Transitions

### Demonstration: Using CSS Transitions

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Apply CSS Transitions to HTML Elements

1.	On the Start screen, click the **Desktop** tile.
2.	On the Windows taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\Transitions.html**. 
4.	If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.
5.	Place the mouse pointer over the upper rectangle on the web page. Verify that the following transitions are applied simultaneously to the rectangle:
- The width, height, and font size increase over a period of two seconds.
- The background color transitions to red over a period of 3.75 seconds.
6.	Move the mouse pointer away from the upper rectangle. Verify that the rectangle reverts to its original appearance, over the same period of time.
7.	Repeat the previous two steps for the second rectangle. Verify that the same animations apply.
8.	Right-click the page in Microsoft Edge and then click **View source**. Note that:
- The first **div** rule defines default CSS properties for all the **&lt;div&gt;** elements.
- The **div.simple** rule defines a **transition** property that applies to transitions on the **width**, **height**, **font-size**, and **background-color** CSS properties.
- The **div.complex** rule defines similar transitions, but it uses separate **transition-property**, **transition-duration**, **transition-timing-function**, and **transition-delay** properties.
- The **div:hover** rule defines the final values for the **width**, **height**, **font-size**, and **background-color** CSS properties when the user places the mouse pointer over a **&lt;div&gt;**

#### Handle the Transitionend Event

1.	In Microsoft Edge, expand the drop-down list box. Verify that it displays messages for all the transitions that have ended. The list includes events for the original transitions when you place the mouse pointer over a rectangle, as well as events for the reverse transitions when you move the mouse pointer away from a rectangle.
2.	Switch to the source window.
3.	In the JavaScript code, note that:
- The **onLoad()** function sets up event-handlers that call the **onTransitionend()** function when the **transitionend** event is raised on all the **&lt;div&gt;** elements.
- The **onTransitionend()** function displays information about the **transitionend** event, by using the **propertyName** and **elapsedTime** properties of the event argument.
4.	Close the source window.
5.	Close Microsoft Edge.

# Lesson 2: Transforming Elements

### Demonstration: Performing 2D Transformations

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course. 

#### Demonstration Steps

#### Perform 2D Translations

1.	On the Start screen, click the **Desktop** tile.
2.	On the Windows taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\2DTranslations.html**. 
4.	If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.
5.	Verify that the browser displays a series of rectangles. Each rectangle demonstrates how to perform a 2D translation by using the **translate()**, **translateX()**, or **translateY()** functions. The text message inside each rectangle describes the transformation for that rectangle.
6.	Right-click in the browser window, and then select **View source**. 
7.	In the source window, scroll down to the bottom of the document. Note that the body of the document has a series of **&lt;div&gt;** elements and each element has a distinct CSS class.
8.	Scroll up to the top of the code, and then locate the **&lt;style&gt;** element. The CSS rules implement translations for all the **&lt;div&gt;** elements. The CSS rules set the standard **transform** property as well as the following vendor-specific properties:
- **-ms-transform**: Perform a transformation on Microsoft Edge 9.
- **-webkit-transform**: Perform a transformation on Webkit-based browsers such as Chrome and Safari.
- **-moz-transform**: Perform a transformation on Mozilla browsers.
- **-o-transform**: Perform a transformation on Opera browsers.
9.	Close the source window.

#### Perform 2D Scaling Transformations

1.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\2DScaling.html**. 
2.	Verify that the browser displays a series of rectangles. Each rectangle demonstrates how to perform a 2D scaling transformation by using the **scale()**, **scaleX()**, or **scaleY()** functions. The text message inside each rectangle describes the transformation for that rectangle. 
3.	Right-click in the browser window, and then select **View source**. 
4.	In the source window, scroll down to the bottom of the document. Note that the body of the document has a series of **&lt;div&gt;** elements and each element has a distinct CSS class.
5.	Scroll up to the top of the code and locate the **&lt;style&gt;** element. The CSS rules implement scaling transformations for all the **&lt;div&gt;** elements. The CSS rules set the standard **transform** property as well as vendor-specific properties.
6.	Close the source window.

#### Perform 2D Rotations

1.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\2DRotations.html**. 
2.	Verify that the browser displays a series of rectangles. Each rectangle demonstrates how to perform a 2D rotation by using the **rotate()** function. The fourth rectangle also shows how to perform multiple transformations, and how to change the origin of the transformation to the top left of the target element.
3.	Right-click in the browser window, and then select **View source**. 
4.	In the source window, scroll down to the bottom of the document. Note that the body of the document has a series of **&lt;div&gt;** elements and each element has a distinct CSS class.
5.	Scroll up to the top of the code, and then locate the **&lt;style&gt;** element. The CSS rules implement rotations for all the **&lt;div&gt;** elements. The CSS rules set the standard **transform** property as well as vendor-specific properties. The final CSS rule shows how to apply multiple transformations, specifically a translation followed by a rotation. The final CSS rule also shows how to set change the origin of the transformation by setting the **transform-origin** property and its vendor-specific equivalent properties.
6.	Close the source window.

#### Perform 2D Skewing Transformations

1.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\2DSkewing.html**. 
2.	Verify that the browser displays a series of rectangles. Each rectangle demonstrates how to perform a 2D skewing operation by using the **skew()**, **skewX()**, or **skewY()** functions. 
3.	Right-click in the browser window, and then select **View source**. 
4.	In the source window, scroll down to the bottom of the document. Note that the body of the document has a series of **&lt;div&gt;** elements and each element has a distinct CSS class.
5.	Scroll up to the top of the code, and then locate the **&lt;style&gt;** element. The CSS rules implement skewing transformations for all the **&lt;div&gt;** elements. 
6.	Close the source window.
7.	Close Microsoft Edge.

>**Note**: Some of the transformations in this demonstration cause the target elements to appear partially off the screen.

### Demonstration: Performing 3D Transformations

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Perform 3D Transformations that Include Transitions

1.	On the Start screen, click the **Desktop** tile.
2.	On the Windows taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\3DTransformations.html**. 
4.	If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.
5.	Verify that the browser displays a cube. There are six faces to the cube, each of which displays text and has a different background color. The front face is partially transparent so that it does not completely obscure the other faces.
6.	Place the mouse pointer over the cube. Verify that it rotates by 90 degrees over a period of five seconds. Then, move the mouse pointer off the cube, and then verify that the cube rotates smoothly back to its original position.
7.	Right-click in the browser window, and then select **View source**. 
8.	In the source window, scroll down to the bottom of the document. Note that the body of the document has six **&lt;div&gt;** elements that represent the six faces of the cube. These **&lt;div&gt;** elements are contained in a parent **&lt;div&gt;** element named **container**.
9.	Scroll up to the top of the code, and then locate the **&lt;style&gt;** element. Note the following CSS rules:
- **#container**: Specifies a perspective for all the child elements of the **container** element, and a transition of five seconds for transformations.
- **#container:hover**: Specifies a rotation of 90 degrees when the user places the mouse pointer over the **container** element.
- **#rightFace**: Transforms the **rightFace** element in 3D space, so that it appears on the right side of the cube.
- **#leftFace**: Transforms the **leftFace** element in 3D space, so that it appears on the left side of the cube.
- **#topFace**: Transforms the **topFace** element in 3D space, so that it appears on the top of the cube.
- **#bottomFace**: Transforms the **bottomFace** element in 3D space, so that it appears on the bottom of the cube.
- **#backFace**: Transforms the **backFace** element in 3D space, so that it appears at the back of the cube.
- **#frontFace**: Transforms the **frontFace** element in 3D space, so that it appears at the front of the cube. The background color is partially transparent.
10. Close the source window.
11. Close Microsoft Edge.

# Lesson 3: Applying CSS Keyframe Animations

### Demonstration: Implementing Keyframe Animations

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course. 

#### Demonstration Steps

#### Define and Run a Keyframe Animation

1.	On the Start screen, click the **Desktop** tile.
2.	On the Windows taskbar, click **Microsoft Edge**.
3.	In Microsoft Edge, open the file **[Repository Root]\Allfiles\Mod12\Democode\KeyframeAnimations.html**. 
4.	If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.
5.	Verify that a green rectangle appears on the page, with a small white circle in the top left corner. The green rectangle represents a pool table and the white circle represents a ball. There is also a button that enables you to start the animation.
6.	Click **Start Animation**. 
- After three seconds, the ball starts moving diagonally on the pool table. The color of the pool table also changes to blue and a message appears at the bottom of the page to indicate the start time of the animation.
- As the animation proceeds, the ball appears to bounce off the sides of the pool table and the color of the ball varies from white to yellow, then to orange, then to red, and then finally to purple.
- When the ball reaches the bottom right corner of the pool table, a message appears to indicate that the first iteration of the animation has completed. The next iteration of the animation begins; this iteration plays the animation in reverse so that the ball ends up in its original position with its original color. 
- At the end of the animation, the pool table reverts to green and messages appear at the bottom of the page to indicate the elapsed time of the animation.
7.	Right-click in the browser window, and then select **View source**. 
8.	In the source window, scroll down to the bottom of the document. Note that the body of the document has a **&lt;div&gt;** element named **pooltable** that represents the pool table and a nested **&lt;div&gt;** named **ball** that represents the ball on the pool table. There is also a **&lt;button&gt;** element to start the animation, and a **&lt;div&gt;** named **messageLabel** where messages are displayed.
9.	Scroll up to the top of the file, and then locate the **&lt;style&gt;** element. Note the following CSS rules:
- **#pooltable**: Specifies the initial appearance of the pool table.
- **#pooltable.animate**: Specifies a different color for the pool table during an animation. There is JavaScript code elsewhere in the document that programmatically adds the **animate** class to the **pooltable** element when an animation starts to cause the pool table to turn blue during an animation.
- **#ball**: Specifies the initial appearance of the ball.
- **@-ms-keyframes ballmovement**: Defines a keyframe animation named **ballmovement**. The first rule-set specifies the original color and location of the ball. Each subsequent rule-set simulates the ball hitting one of the sides of the pool table and causes the ball to change color during each part of its journey. The final rule-set specifies the final color and location of the ball.
- **#ball.animate**: Applies the **ballmovement** keyframe animation to a ball when the ball has the **animate** class. There is JavaScript code elsewhere in the document that programmatically adds the **animate** class to the **ball** element when the user clicks the **Start Animation** button to trigger the animation.
10. Locate the **&lt;script&gt;** element. Note that:
- The **init()** function, invoked as soon as the page has loaded, establishes event-handler functions for the **MSAnimationStart**, **MSAnimationIteration**, and **MSAnimationEnd** events on the **ball** element: 
- The **MSAnimationStart** event-handler function is called when an animation starts on the **ball** element. The function adds the **animate** class to the pool table so that the pool table becomes blue. The function also displays a message to indicate the time when the animation started.
- The **MSAnimationIteration** event-handler function is called when each iteration of the animation has completed. The function displays a message to indicate the elapsed time of the animation.
- The **MSAnimationEnd** event-handler function is called when an animation ends on the **ball** element. The function enables the button, removes the **animate** class from the ball and the pool table, and then displays a message to indicate the elapsed time of the animation.
- The **startAnimation()** function is Invoked when the user clicks the **Start Animation** button. The function disables the button and adds the **animate** class to the ball to trigger the animation. The animation starts three seconds later, due to the **-ms-animation-delay: 3s;** property in the **#ball.animate** CSS rule.
11. Close the source window.
12. Close Microsoft Edge.

### Demonstration: Animating the User Interface

#### Preparation Steps 

1. Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course. 

#### Demonstration Steps

1.	Read the lab scenario to the students and point out that they should read each scenario before attempting the lab for a module.
2.	Point out to the students that the exercise scenario for each exercise contains a description of what they will accomplish in the exercise and is also essential reading.
3.	Start Microsoft Visual Studio, and from the **[Repository Root]\Allfiles\Mod12\Labfiles\Solution\Exercise 2** folder, open the **ContosoConf.sln** solution.

>**Note**: If **Security Warning for ContosoConf** dialog box appears clear **Ask me for every project in this solution** and then click **OK**.

4.	On the **Debug** menu, click **Start Without Debugging**.

>**Note**: If the message **Intranet settings are turned off by default** appears, click **Don’t show this message again**.

5.	In Microsoft Edge, on the **Home** page, move the mouse pointer over the **Register Free** link, and then point out how the link expands and rotates as the mouse pointer traverses it.
6.	In the navigation bar, click **Feedback**.
7.	On the **Feedback** page, place the mouse pointer over the stars, and then point out how they are animated.
8.	Click **Send Feedback**, and then point out how the feedback form is animated; it changes the size and then flies off the top of the screen
9.	Close Microsoft Edge.
10. In **Solution Explorer**, expand the **ContosoConf** project, expand the **styles** folder, and then double-click **header.css**.
11. In the **Code Editor** window, find the **header.page-header .register:hover** rule, and then draw students' attention to the **transform** and **transition** properties in this rule. These properties rotate and scale the **Register Free** link over a period of one second.
12. In **Solution Explorer**, in the **styles** folder, expand the **pages** folder, and then double-click **feedback.css**. 
13. In the **Code Editor** window, point out the transition and transform properties in the **.star, .star:hover** and **.star:selected** rules. These are the transformations and transitions that occur when the user places the mouse pointer over the stars on the **Feedback** page.
14. Point out the **@keyframes** send and the **.sending** rules. These are the CSS rules that animate the feedback form, causing it to fly off the page when the user clicks **Send Feedback**.
15. In **Solution Explorer**, expand the **scripts** folder, expand the **pages** folder, and then double-click **feedback.js**. 
16. In the **Code Editor** window, find the following line of code:
    ```javascript
        form.classList.add("sending");
    ```
17. Explain that this statement adds the **sending** class to the feedback form, which triggers the animation defined by the **.sending** rule in the **feedback.css** stylesheet.
18. Close all open windows.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
