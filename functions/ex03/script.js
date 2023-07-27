let word = prompt('Type something');

function capitalize() {

    let FirsChar = word.slice(0, 1).toUpperCase();

    let rest = word.slice(1);

    word = FirsChar + rest;
    

}

capitalize();

alert(word);