function init() {

    const personsLst = [
        {
            name: 'Adam adam',
            age: 22,
            email: 'adam@example.com'
        },
        {
            name: 'eve perkins',
            age: 18,
            email: 'eve@example.com'
        },
        {
            name: 'melvin wood',
            age: 20,
            email: 'melvin@example.com'
        },
        {
            name: 'signe lorenzo',
            age: 19,
            email: 'signe@example.com'
        },
        {
            name: 'william rasmussen',
            age: 25,
            email: 'william@example.com'
        }]

    let personAboveAge = [];

    let personListString = '';
    let personAboveListString = '';

    for (let person of personsLst) {
        personListString += `<li>${person.name} (${person.age}) <br />${person.email}</li>`;
    }

    for (let person of personsLst) {

        if (person.age >= 20) {
            personAboveAge.push(person);
        }
    }

    for (let i = 0; i < personAboveAge.length; i++) {
        personAboveListString += `<li>${personAboveAge[i].name} (${personAboveAge[i].age}) <br />${personAboveAge[i].email}</li>`;
    }


    const personOl = document.getElementById('personList');
    personOl.innerHTML = personListString;
    const personAbove = document.getElementById('personAboveList');
    personAbove.innerHTML = personAboveListString;
}

init();

