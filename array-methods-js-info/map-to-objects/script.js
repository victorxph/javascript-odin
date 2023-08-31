let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({

    fullName: `${user.name} ${user.surname}`,
    id: user.id,

}));

/*
 Os parenteses envolvendo o obj literal "({ })" são para que o objeto seja criado primeiro e interpretado corretamente, sem os parenteses o JS interpreta como um bloco de código e nn um object
*/

console.log(usersMapped);