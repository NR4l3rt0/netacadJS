let trainTicket = {
    fromStation: 'María Zambrano',
    endStation: 'Atocha',
    price: 145.15
}

console.log(trainTicket.fromStation);
console.log(trainTicket.endStation);
console.log(trainTicket.price);


let person = {};

person.firstName = 'John';
person.lastName  = 'Wallet';

console.log(person.firstName, person.lastName);


let arrayOfBooks = [{title: "Speaking JavaScript",
                     author: "Axel Rauschmayer",
                     pages: 460}];
let jsApps = { 
                title: "Programming JS Applications",
                author: "Eric Elliot",
                pages: 254
            };

arrayOfBooks.push(jsApps);
arrayOfBooks.unshift({ title: "Understanding ECMAScript 6",
                        author: "Nichols C.Zakas",
                        pages: 352 
                    });


let designPatterns = {
                        title: 'Learning JS Desing Patterns',
                        author: 'Addy Osmani',
                        pages: 254
                    };
                    
arrayOfBooks.push(designPatterns);

console.log(arrayOfBooks.length);

let lastTwoBooks = arrayOfBooks.slice(-2);

console.log(lastTwoBooks);

console.log(arrayOfBooks.shift());

console.log(arrayOfBooks.length);

console.log(arrayOfBooks[0].pages + arrayOfBooks[1].pages + arrayOfBooks[2].pages);



// Solution 1
let ticket = {
	from: "Berlin",
	to: "Potsdam",
	price: 11
};
console.log('Ticket from: ${ticket.from}');
console.log('Ticket to: ${ticket.to}');
console.log('Ticket price: ${ticket.price}');


// Solution 2
let person = {};
person.name = "Mary";
person.surname = "Stuart";
console.log('${person.name} ${person.surname}');

// Solution 3
let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
},
{
    title: "Programming JavaScript Applications",
    author: "Eric Elliot",
    pages: 254
},
{
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
}
];


// Solution 4
let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);

// Solution 5
let selectedBooks = books.slice(-2);

// Solution 6
books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

// Solution 7
let sum = books[0].pages + books[1].pages + books[2].pages;
console.log('pages: ${sum}');



