let user = {name: 'John',};


function isEmpty (obj) {

    for (let prop in obj){

        return false

    }
   
    return true

}

console.log(isEmpty(user));