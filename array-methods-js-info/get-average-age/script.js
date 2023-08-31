function getAverageAge(arr) {
    
    let ages = arr.map(obj => obj.age);

    let reduced = ages.reduce((sum, current) => sum + current, 0);

    let average = reduced / arr.length;

    return average

}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr));

// JS solution

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }