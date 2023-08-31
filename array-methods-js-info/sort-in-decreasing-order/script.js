function sortDreceasingOrder (a, b) {

    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;

}

let arr = [5, 2, 1, -10, 8];

arr.sort(sortDreceasingOrder);

console.log(arr);


// solution - js info
 
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);
