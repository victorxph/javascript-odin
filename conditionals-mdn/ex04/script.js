    let machineActive = true;
    let pwd = 'cheese';

    let machineResult;
    let pwdResult;

    // Add your code here

    if (machineActive){
 // if (machineActive === true){

        machineResult = 'The machine its ON!'

        pwdResult = (pwd === 'cheese') ? 'You\'re succesfully logged in!' : 'Wrong password, try again!'

        //   if (pwd === 'cheese') {
        //  
        //       pwdResult = 'You\'re succesfully logged in!'
        //          
        //   } else {
        //     
        //       pwdResult = 'Wrong password, try again!'
        //      
        //   }
        
    } else {
        
        machineResult = 'The machine its OFF!'
        
    }

    // Don't edit the code below here!

    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    para1.textContent = machineResult;
    para2.textContent = pwdResult;

    section.appendChild(para1);
    section.appendChild(para2);