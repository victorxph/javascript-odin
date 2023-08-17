let content = document.querySelector('div.content');

let para = document.createElement('p');

para.textContent = "Hey I'm red!";
para.style.color = 'red';

content.appendChild(para);



let title3 = document.createElement('h3');

title3.textContent = "I'm a blue h3!";
title3.style.color = 'blue';

content.appendChild(title3);



let pinkDiv = document.createElement('div');

pinkDiv.style.cssText = 'border: 1px solid black; background-color: pink; padding-left: 15px; margin-bottom: 10px;'

let container = document.querySelector('div#container');

container.appendChild(pinkDiv);



let title1 = document.createElement('h1');

title1.textContent = "I'm in a div";

pinkDiv.appendChild(title1);



let pinkPara = document.createElement('p');

pinkPara.textContent = "Me too";

pinkDiv.appendChild(pinkPara);



// function alertFunction () {

//     alert('YAY! YOU DID IT!');

// }

let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {

    e.target.style.background = 'blue';

})





/*
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/