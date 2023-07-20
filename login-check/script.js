let user = 'Admin'

let password = 'TheMaster'

let firstAnswer = prompt(`Who\'s there?`)


if (firstAnswer == user) {
    
    let secondAnswer = prompt('Password?')

    if (secondAnswer == password) {

        alert('Welcome!')

    } else if (secondAnswer == null) {
        
        alert('Canceled!')

    } else {

        alert('Wrong password, try again!')

    } 
} else if (firstAnswer == null){

    alert('Canceled!')

} else {

    alert('Idk you!')
    
}