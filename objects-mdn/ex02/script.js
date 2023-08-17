// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     }
//   }


// const cat2 = {
//     name : 'Garfield',
//     breed : 'Persian',
//     color : 'Orange',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     }
//   }

// cat2.greeting();

function Cat(name, breed, color) {

    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = function () {

        console.log(`Hello, said ${this.name} the ${this.breed}.`);

    }

}

let cat = new Cat ('Garfield', 'Persian', 'Orange')

let cat2 = new Cat ('Bertie', 'Cymric', 'White')

console.log(cat2);

cat2.greeting();