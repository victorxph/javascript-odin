const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (i = 0; i <= people.length - 1 ; i++){

    if (people[i] === 'Phil' || people[i] === 'Lola') {

        refused.textContent += `${people[i]}, `;

    } else if (i === people.length - 1 && people[i] != 'Phil' && people[i] != 'Lola'){

        admitted.textContent += `${people[i]}.`;
        
    } else {
        
        admitted.textContent += `${people[i]}, `;
        
    }

}

