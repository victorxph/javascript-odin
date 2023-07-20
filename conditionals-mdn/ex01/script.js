
let season = 'summer';
let response;

// Add your code here

if (season == 'summer') {
  
  response = 'It\'s sunny out there!'
  
  
} else if (season == 'winter') {
  
  response = 'It\'s snowing'
  
} else {
  
   response = "I'm not sure what the weather is like.";
  
}

// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    