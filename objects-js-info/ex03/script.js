let salaries = {

    John: 100,
    Ann: 160,
    Pete: 130,

}

function sumSalaries (obj) {

    let sum = 0;

    for (let prop in obj) {

        sum += obj[prop];

    }

    return sum;
    // console.log(sum);

}

console.log(sumSalaries(salaries));