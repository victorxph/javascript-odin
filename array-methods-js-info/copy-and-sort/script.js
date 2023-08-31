function copySorted (arr) {

    let copy = arr.slice();

    return copy.sort()

}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

// js info solution
function copySortedJS(arr) {
    return arr.slice().sort();
  }
  