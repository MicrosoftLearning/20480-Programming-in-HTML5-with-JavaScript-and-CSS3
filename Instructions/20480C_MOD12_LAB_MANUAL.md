## Module 12: Animating the User Interface
Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

## Lab: Animating the User Interface

#### Scenario

You have been asked to make the Contoso Conference website more engaging by adding some animation.

You decide to animate the **Register** link that is displayed on the **Home** page. When the user places the mouse pointer over this link, you will make it rotate slightly to highlight it.

The **Feedback** page contains a form that enables an attendee to provide their assessment of the conference and to make additional comments. This information is submitted by the **Feedback** page to a data-collection service. You have decided that you can make this page more interesting by animating the stars as the user places the mouse pointer over them, and by making the feedback form fly away when the user submits their feedback.

#### Objectives

After completing this lab, you will be able to:
- Animate HTML elements by using CSS transitions.
- Animate HTML elements using CSS keyframes, trigger animations, and the handle animation events by using JavaScript code.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Applying CSS Transitions

#### Scenario

In this exercise, you will use CSS transitions to animate parts of the conference website.

First, you will animate the star icons on the **Feedback** page so they react when the user moves the cursor over them. Next, you will rotate the **Register** link on the **Home** page as the mouse pointer traverses it. Finally, you will run the application, view the **Feedback** and **Home** pages, and verify that the elements are animated correctly.

#### Task 1: Review the Feedback page

1.	Start Microsoft Visual Studio, and then from the **[Repository Root]\Allfiles\Mod12\Labfiles\Starter\Exercise 1** folder, open the **ContosoConf.sln** solution.
2.	In the **ContosoConf** project, examine the contents of the **feedback.htm** file. This page contains an HTML form that collects conference attendee feedback:
    ```html
        <form method="post" action="/send-feedback">
            <div class="field feedback-question">
                <label>How would you rate the speaker's knowledge of the topic?</label>
                <input name="question" type="range" min="1" max="5"/>
            </div>
            <div class="field feedback-question">
                <label>How well could you hear the speaker?</label>
                <input name="question" type="range" min="1" max="5"/>
            </div>
            <div class="field feedback-question">
                <label>How useful did you find the information in this talk?</label>
                <input name="question" type="range" min="1" max="5"/>
            </div>
            <div class="field feedback-question">
                <label>How would you rate the overall session?</label>
                <input name="question" type="range" min="1" max="5"/>
            </div>
            <div class="field comments">
                <label>Any additional comments?</label>
                <textarea name="comments" cols="30" rows="5"></textarea>
            </div>
            <div class="field actions">
                <button type="submit">Send Feedback</button>
            </div>
        </form>
    ```
This page also references the **feedback.css** style sheet in the **/styles/pages** folder, and the **feedback.js** JavaScript file in the **/scripts/pages** folder:
  ```html
      <link href="/styles/pages/feedback.css" rel="stylesheet" type="text/css" />
  ```
  ```html
      <script src="/scripts/pages/feedback.js" type="text/javascript"></script>
  ```
3.	Run the application, and then view the **Feedback** page.
     Note that the input elements for the form have been converted into star icons. This feature is implemented by the JavaScript code in the **feedback.js** and the **StarRatingView.js** files.
4.	Close Microsoft Edge.

#### Task 2: Animate the stars on the Feedback form

1.	From the **styles\pages** folder, open the **feedback.css** style sheet.
2.	Add a CSS property to **.star:hover**so that the **.star.hover** rule transforms the stars to 1.3 times larger when the user places the mouse pointer over them.
- Add a **scale** transform to the rule.
3.	Specify that the transformation should take 0.5 seconds to perform.
- Add **transition** to the rule.
4.	When the mouse pointer is no longer over a star, the star should not suddenly jump back to its original size, so add a transition to the **.star** CSS rule so that the star reverts to its original size over 0.5 seconds.
5.	When a star has the **.selected** CSS class, it should remain scaled. Add a **scale** transform to the **.star.selected** rule to scale the star by a factor of 1.3.

#### Task 3: Animate the Register link on the Home page

The **index.htm** page has a large **Register** link in the header. This link is styled by using the rules in the **header.css** style sheet. In this style sheet, add CSS properties to animate the **Register** link when the mouse pointer is placed over it, as follows:
- Rotate the link to 16 degrees and scale it by a factor of 1.1 in both dimensions.
- Transition the transformations over a period of one second.
- When the mouse pointer moves away, return the **Register** link to its original state over a period of one second.

#### Task 4: Test the application

1.	Run the application, and then view the **Feedback** page.
2.	Place the mouse pointer over the stars. Verify that their size changes and they remain larger when selected.
3.	View the **Home** page.
4.	Move the mouse pointer over the **Register Free** link in the header, and then verify that it rotates and enlarges.
5.	Close Microsoft Edge.

>**Results**: After completing this exercise, the **Register** link will rotate and the feedback stars will animate when the user places the mouse pointer over them.

### Exercise 2: Applying Keyframe Animations

#### Scenario

In this exercise, you will create a keyframe animation to animate the form on the **Feedback** page. The form will fly off the page when the user submits the form.

First, you will define a keyframe animation by using CSS. Next, you will use the keyframe animation in a CSS rule. Then, you will add this CSS rule to the **Feedback** form to trigger the animation when the form is submitted. You will handle an animation event to show a message when the animation is complete. Finally, you will run the application, view the **Feedback** page, and then verify that the form animates correctly when the user submits it.

#### Task 1: Define a keyframe animation

1.	In Visual Studio, from the **[Repository Root]\Allfiles\Mod12\Labfiles\Starter\Exercise 2** folder, open the **ContosoConf.sln** solution.
2.	In the **feedback.css** style sheet, in the **styles\pages** folder, find the following comment:
    ```css
        /* TODO: Add key frame animation named "send"
                 At 0% scale(1)
                 At 50% scale(.8)
                 At 100% translate(0, -1000px)
        */
    ```
3.	After this comment, define keyframes animation named **send**. The animation should perform the following operations:
- Reduce the size of the targeted element by using a scale transform to 0.8 times the original size.
- Slide the target element up off the page. A translation of 1000px up is enough to move the feedback form out of view.
4.	The **sending** CSS class will be added to the feedback form when it is submitted (you will write the JavaScript code to do this in the next task). 
5. In the **feedback.css** style sheet, add CSS properties to the **.sending** rule to apply the **send** animation and where indicated by the comment in this rule:
- Set the animation duration to one second.
- Ensure that the animation runs only once and it maintains the properties set by the last keyframe after completion.

#### Task 2: Trigger the animation

1.	From the **scripts\pages** folder, open the **feedback.js** file. 
2.	A submit event listener has already been added to the feedback form. This event listener calls the **formSubmitting** function. In the **formSubmitting** function, after the **// TODO: Trigger the animation by adding the "sending" CSS class to the form** comment, add the CSS class **sending** to the **form** element.

>**Note**: Adding this class to the **form** element triggers the animation that you defined in the previous task.

3.	After the feedback form has finished animating, the **feedback-sent &lt;div&gt;** in the feedback form should be displayed. This **&lt;div&gt;** displays the **Thanks for the feedback** message. The **animationEnded** function displays this <div>. In this function, after the **// TODO: Add listener for the animationend event** comment, add an **animationend** event listener to the form, which calls **animationEnded**.

#### Task 3: Test the application

1.	Run the application, and then view the **Feedback** page.
2.	Click **Send Feedback**.
3.	Verify that the form shrinks and flies off the top of the page.
4.	Close Microsoft Edge.
5. Close all open windows.

>**Result**: After completing this exercise, submitting the conference feedback form will trigger an animation that makes the form fly off the page.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
