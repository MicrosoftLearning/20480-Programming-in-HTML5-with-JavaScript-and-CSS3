import { ScheduleItem } from "./ScheduleItem.js";

export class ScheduleList {
    constructor(listElement, localStarStorage) {
        this.element = listElement;
        this.localStarStorage = localStarStorage;
        this.items = [];
    }

    async startDownload() {
        // await response of fetch call
        let response = await fetch("/schedule/list")
        // transform body to json
        let data = await response.json();

        // checking response is ok
        if (response.ok) {
            this.downloadDone(data);
        } else {
            this.downloadFailed();
        }

    }

    downloadDone(responseData) {
        this.addAll(responseData.schedule);
    }

    downloadFailed() {
        alert("Could not retrieve schedule data at this time. Please try again later.");
    }

    addAll(itemsArray) {
        itemsArray.forEach(this.add, this);
    }

    add(itemData) {
        const item = new ScheduleItem(itemData, this.localStarStorage);
        this.items.push(item); // Store item object in our array
        this.element.appendChild(item.element); // Also add the item element to the UI.
    }
}