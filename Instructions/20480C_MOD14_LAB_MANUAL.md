## Module 14: Performing Background Processing by Using Web Workers

## Lab: Creating a Web Worker Process

#### Scenario

When a speaker creates a conference badge, the speaker drags and drops an image containing a photograph onto the web page. This photograph may be a color image. However, the conference speaker badges will be printed in grayscale. Therefore, the web page that creates the badges should render the speaker photograph in grayscale in order to give an accurate representation of the printed output.

An image file may be many megabytes in size. To avoid uploading large files to a server for processing, you have decided to convert the photos to grayscale by using JavaScript code running in the web browser.

However, processing large images will cause the web browser to become unresponsive while it performs this processing. You therefore decide to use a web worker to move the image conversion to a background process, enabling the web browser to remain responsive.

#### Objectives

After completing this lab, you will be able to:
- Create a web worker and implement a web worker script.
- Send messages to and receive messages from a web worker.

#### Lab Setup

Estimated Time: **60 minutes**

### Exercise 1: Improving Responsiveness by Using a Web Worker

#### Scenario

In this exercise, you will move slow-running image processing code into a web worker.

First, you will review the HTML markup and JavaScript code for the **Speaker Badge** page. You will then update the code so that it converts the speaker photo to grayscale. Next, you will run the application and verify that the browser becomes unresponsive while processing a large image. You will then create a web worker and move the CPU-intensive image processing code into the script for the web worker. You will use messages to communicate with the worker. Finally, you will run the application, view the **Speaker Badge** page, and verify that the web browser remains responsive while the image is being processed.

#### Task 1: Review the Speaker Badge page.

1.	Start Visual Studio and open the **ContosoConf.sln** solution from the **Allfiles\Mod14\Labfiles\Starter\Exercise 1** folder.
2.	In the **ContosoConf** project, review the **Speaker Badge** page. Note the script reference to the **grayscale.js** JavaScript file in the **/scripts** folder:
    ```html
        <script src="/scripts/grayscale.js" type="text/javascript"></script>
    ```
3.	Open the **grayscale.js** JavaScript file in the **scripts** folder, and review the code. Notice that this file contains a function named **conference.grayscaleImage**, which converts an image to grayscale. This function converts the image one pixel at a time, and can take a long time to convert a large image:
    ```javascript
        conference.grayscaleImage = function (image) {
            // Converts a colour image into gray scale.

            var deferred = $.Deferred();

            var canvas = createCanvas(image);
            var context = canvas.getContext("2d");
            var imageData = getImageData(context, image);

            // TODO: Create a Worker that runs /scripts/grayscale-worker.js

            var pixels = imageData.data;
            // 4 array items per pixel => Red, Green, Blue, Alpha
            for (var i = 0; i < pixels.length; i += 4) {
                grayscalePixel(pixels, i);
            }

            // Update the canvas with the gray scaled image data.
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.putImageData(imageData, 0, 0);

            // Returning a jQuery Deferred makes this function easy to chain together with other deferred operations.
            // The canvas object is returned as this can be used like an image.
            deferred.resolveWith(this, [canvas]);
            return deferred;
        };
    ```

>**Note:** For the purposes of this exercise, you can ignore the references to the jQuery **.Deferred()** function and the **deferred** object; this object simply enables the **grayscaleImage()** function to be used in a pipeline by using the **pipe()** function, as you will see in the next task.

4.	Also note that the **/scripts** folder contains another JavaScript file called **grayscale-worker.js**, which currently contains no code.

#### Task 2: Convert the speaker badge image to grayscale.

1.	Open the **speaker-badge.js** JavaScript file in the **scripts/pages** folder. The JavaScript code in this page contains the functions that enable a user to drop an image onto the canvas and draw the badge (you added this functionality in a previous lab). Notice that the JavaScript code also contains a reference to the **grayscaleImage()** function in a variable, also called **grayscaleImage**.
2.	In the **handleDrop** method, after the comment // TODO: Add grayscaleImage into the processing pipeline, modify the JavaScript code to insert the **grayscaleImage()** function into the processing pipeline for an image by using the jQuery **pipe()** function, as follows in bold:
    ```javascript
        this.readFile(file)
            .pipe(this.loadImage)
            .pipe(grayscaleImage)
            .done(this.drawBadge, this.notBusy);
    ```

>**Note:** The **pipe()** function enables you to chain function calls together into a pipeline. The functions can operate asynchronously, but the **pipe()** function ensures that each function call is made only after the previous call has completed.

3.	Run the application and view the **speaker-badge.htm** page.
4.	Drag the file **Allfiles\Mod14\Labfiles\Resources\mark-hanson-large.jpg** from File Explorer and drop it onto the speaker badge canvas in Microsoft Edge.
5.	While the image is being processed, try scrolling the page or moving to a different page. Note that the page is frozen.

>**Note:** Microsoft Edge may display the message **localhost is not responding due to a long-running script**. If this occurs, allow the script to complete.

>**Note:** You can observe the load that Microsoft Edge is under by using Task Manager as follows:
>1.	Right-click the Windows Taskbar and then click **Task Manager**.
>2.	In Task Manager, click **More details**, and then click the **Performance** tab.
The virtual machine is configured with two virtual CPUs, and the grayscaleImage() function will keep one of the CPUs fully occupied, resulting in an overall processor utilization of approximately 50%. When the grayscale image appears, the processor utilization will drop close to 0.

6.	Close Microsoft Edge.

#### Task 3: Create a web worker to perform image processing.

1.	In the **grayscale.js** file in the **grayscaleImage()** function, after the comment // TODO: Create a Worker that runs /scripts/grayscale-worker.js, add code to create a web worker that runs the **/scripts/grayscale-worker.js** JavaScript file.
- The **imageData** variable in this function contains the data to be converted to grayscale. Pass the **imageData** variable to the web worker by using the **postMessage()** function.
2.	Open the **grayscale-worker.js** file in the **scripts** folder and add an event listener for the **message** event. Create an anonymous function to handle the event, but leave this function empty (you will write the code for this event handler in a later task, when you implement the functionality to return data from the web worker).
3.	Return to the **grayscale.js** file. In the **grayscaleImage()** function, before the call to the **postMessage()** function, add an event listener called **handleMessage** for the **message** event of the web worker, like this:
    ```javascript
        var handleMessage = function (event) {
        };
        worker.addEventListener("message", handleMessage.bind(this));
    ```

>**Note:** Remember that the **bind()** function ensures that any references to **this** in the anonymous function that handles the event will be resolved to the web page and not the web worker variable.

#### Task 4: Move image processing code into the web worker.

1.	Move the **grayscalePixel** function from **grayscale.js** to **grayscale-worker.js**. The **grayscalePixel** function looks like this:
    ```javascript
        var grayscalePixel = function (pixels, index) {
            /// <summary>Updates the pixel, starting at the given index, to be gray         scale.</summary>

            var brightness = 0.34 * pixels[index] + 0.5 * pixels[index + 1] + 0.16 * pixels     [index + 2];

            pixels[index] = brightness; // red
            pixels[index + 1] = brightness; // green
            pixels[index + 2] = brightness; // blue
        };
    ```
2.	Find the **pixels** variable and the **for** loop that performs the conversion to grayscale in the **grayscaleImage()** function in **grayscale.js**:
    ```javascript
        var pixels = imageData.data;
        // 4 array items per pixel => Red, Green, Blue, Alpha
        for (var i = 0; i < pixels.length; i += 4) {
            grayscalePixel(pixels, i);
        }
    ```
3.	Move this code into the **message** callback function of **grayscale-worker.js**. 
- In the **message** callback, create and populate the **imageData** variable with the value in the **data** property of the **event** parameter:
    ```javascript
        addEventListener("message", function (event) {
        
            var imageData = event.data;
            var pixels = imageData.data;
            for (var i = 0; i < pixels.length; i += 4) {
                grayscalePixel(pixels, i);
            }
        });
    ```

#### Task 5: Return image data from the web worker.

1.	In the **grayscale-worker.js** file, in the **message** callback, after the end of the **for** loop, send the updated image data back to the web page by posting a message with the following format:
    ```javascript
        { done: imageData }
    ```
- Use the **postMessage()** function to send the message.
2.	In the **grayscale.js** file, near the end of the **grayscaleImage()** function, find the following lines of code that update a temporary canvas with the processed image data and then resolve the deferred object:
    ```javascript
        // Update the canvas with the gray scaled image data.
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.putImageData(imageData, 0, 0);

        // Returning a jQuery Deferred makes this function easy to chain together with other deferred operations.
        // The canvas object is returned as this can be used like an image.
        deferred.resolveWith(this, [canvas]);
    ```
3.	Move this block of code into the **message** event callback function (referenced by the **handleMessage** variable). 
- Retrieve the image data from the **data.done** property of the **event** parameter in the callback function and store it in a variable called **updatedImageData**.
- Pass **updatedImageData** as the first parameter to the **putImageData()** function (replace the reference to **imageData**.)

>**Note:** Make sure that you leave the following statement in place at the end of the **grayscaleImage()** function.
>
>   ```javascript
>       return deferred;
>   ```

#### Task 6: Test the application.

1.	Run the application and view the **Speaker Badge** page.

>**Note:** You may need to clear the browser cache and **restart** Microsoft Edge before testing changes to the worker script. To do this, press F12 to show the F12 Developer Tools window, and on the **Cache** menu click **Clear browser cache**.

2.	Drag and drop the file **Allfiles\Mod14\Labfiles\Resources\mark-hanson-large.jpg** onto the canvas.
3.	Verify that the page is still responsive while the image is being processed.
4.	Close Microsoft Edge.

>**Results:** After completing this exercise, you will have a created a web page that remains responsive while slow image processing code runs in a web worker.

©2018 Microsoft Corporation. All rights reserved.

The text in this document is available under the  [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/legalcode), additional terms may apply. All other content contained in this document (including, without limitation, trademarks, logos, images, etc.) are  **not**  included within the Creative Commons license grant. This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes.

This document is provided &quot;as-is.&quot; Information and views expressed in this document, including URL and other Internet Web site references, may change without notice. You bear the risk of using it. Some examples are for illustration only and are fictitious. No real association is intended or inferred. Microsoft makes no warranties, express or implied, with respect to the information provided here.
