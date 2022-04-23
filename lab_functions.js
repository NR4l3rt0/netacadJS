/* Estimated time

30-45 minutes
Level of difficulty

Medium
Objectives

Familiarize the student with:

    Function basics (what are functions, declaring functions, calling functions, local variables, the return statement, function parameters, shadowing);
    Functions as first-class members (function expressions, passing a function as a parameter, callbacks);
    Arrow functions (declaring and calling);
    Recursion (basic idea).

Scenario

Our program has grown quite a bit, making it a little hard to read. It is especially visible in the switch instruction, where most of the logic is enclosed. Try to organize your program code by using functions. Define and call three functions in the appropriate places:

    showContact: the function should take two arguments; the first is the list of contacts, and the second is the index number of the contact to display; inside the function, check if the correct arguments are passed, that is, if the contacts are an array (use the instanceofArray construction for this);
    showAllContacts: the function should take one argument, the list of contacts; inside the function, check if the given argument is an array;
    addNewContact: the function should take four arguments, a contact list and the data of the new contact, that is: name, phone, and number; before adding a new contact, check if the passed argument is an array and if the new contact data have any value.
 
 
let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

    


////////////////////////////////////////////////////

Lab 2

Objectives

Familiarize the student with:

    Function basics (what are functions, declaring functions, calling functions, local variables, the return statement, function parameters, shadowing);
    Functions as first-class members (function expressions, passing a function as a parameter, callbacks);
    Arrow functions (declaring and calling);
    Recursion (basic idea).

Scenario

We will use the functions to add one more item of functionality. Arrays have a sort method that allows us to sort their elements. To this method, we pass a function which should compare two elements of the array and decide which one is smaller and which one is bigger. If the first element is smaller, the function returns a value less than zero, if they are equal it returns zero, and if the first is larger, it returns a value greater than zero. For example, the array:
let numbers = [10, 50, 40, 20];

can be sorted in ascending order with a call:
numbers.sort(function (a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = 1;
    } else {
        retVal = -1;
    }
    return retVal;
});

or more simply:

numbers.sort((a, b) => a - b);

Give the user the option to select a sort action from the list. When this option is selected, the user should be able to specify whether they want to sort the contacts by name, phone, or email.

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];
let showContact = function (contacts, i) {
if (contacts instanceof Array && contacts[i]) {
    console.log('${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}');
}
}

let showAllContacts = function (contacts) {
if (contacts instanceof Array) {
    for (contact of contacts) {
        console.log('${contact.name} / ${contact.phone} / ${contact.email}');
    }
}
}

let addNewContact = function (contacts, name, phone, email) {
if (contacts instanceof Array && name && phone && email) {
    contacts.push({
        name: name,
        phone: phone,
        email: email
    });
}
}
*/