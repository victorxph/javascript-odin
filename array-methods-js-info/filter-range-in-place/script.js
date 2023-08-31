function filterRangeInPlace (arr, a, b) {

    for (i = 0; i < arr.length; i++){

        let num = arr[i];

        if (num < a || num > b) {

            arr.splice(i, 1)
            i--;

        }

    }


}

let arr = [5, 3, 8, 1];
let array = [1, 2, 3, 4, 5];

filterRangeInPlace(array, 2, 4);
console.log(array);


