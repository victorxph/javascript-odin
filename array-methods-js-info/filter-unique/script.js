function unique(arr) {

    return arr.filter((current, index) => arr.indexOf(current) === index);

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));