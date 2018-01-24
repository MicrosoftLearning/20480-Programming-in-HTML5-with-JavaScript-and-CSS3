function addHobbies() {
    //Get all hobbies inputs
    const inputList = document.querySelectorAll('.hobbiesInput');
    //check if hobbies input elements less then 5
    if (inputList.length < 5) {
        //Get hobbies input list div
        const hobbiesList = document.getElementById('hobbiesList');
        //Create new elements
        const newLineElement = createNode('br'),
            createNode('input');
        //Set class attribute to the new input element
        inputElement.setAttribute("class", "hobbiesInput");
        //Insert the new elements to the end of the div
        append(hobbiesList, newLineElement);
        append(hobbiesList, inputElement);
    }
    else {
        alert("Can't add more hobbies (max: 5)");
    }
}

//Create new element by element name
function createNode(element) {
    return document.createElement(element);
}

// Append the element(el) into the parent
function append(parent, el) {
    return parent.appendChild(el);
}