export class SpeakerBadgePage {
    constructor(element) {
        this.imageElement = element.querySelector("img");

        // TODO: Add event listeners for element "dragover" and "drop" events.
        //       handle with this.handleDragOver.bind(this) and this.handleDrop.bind(this)
    }

    handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy'; // Makes the browser display a "copy" cursor.
    }

    handleDrop(event) {
        event.stopPropagation();
        event.preventDefault();

        // TODO: Get the files from the event
        // const files = ... ;

        if (files.length == 0) return;

        // TODO: Read the first file in the array
        //       Check the file type is an image
        //       Use this.readFile to read the file, then display the image
        //       (Note that this.readFile returns a Promise, so chain ((file)=> this.displayImage(file)) using the "then" method.)
                    
    }

    isImageType(type) {
        const imageTypes = ["image/jpeg", "image/jpg", "image/png"];
        return imageTypes.indexOf(type) >= 0;
    }

    readFile(file) {
        // Return a new promise.
        return new Promise(function (resolve, reject) {

            // TODO: Create a new FileReader
            // const reader = ... ;

            // TODO: Assign a callback function for reader.onload

            // TODO: In the callback use resolve([fileDataUrl]); to return the file data URL.

            // TODO: Start reading the file as a DataURL

        });
    }

    displayImage(imageUrl) {
        this.imageElement.src = imageUrl;
    }
}