function groupById(array) {

    return array.reduce((createdObj, currentObj) => {

        createdObj[currentObj.id] = currentObj;
        return createdObj;

    },{})

}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

console.log(groupById(users));