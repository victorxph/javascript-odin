function filterRange (arr, a, b) {

    return arr.filter(num => num >= a && num <= b)

}

let array = [5, 3, 8, 1];

console.log(filterRange(array, 1, 4));