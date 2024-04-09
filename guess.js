const sports = ['Rugby', 'Soccer', 'Cricket', 'Hurling', 'Golf', 'Polo', 'Rowing']; 

//getting random words
let randInt = Math.floor(Math.random() * sports.length);

let randomSport = sports[randInt]; 
console.log(randomSport);

//store guessed letters 
let guessedLetter = []; 

// for initial display word blanks
let displayWord = ""; 
for(let i = 0; i < randomSport.length; i++){; 
    displayWord += "_ ";
}; 

document.getElementById('display-word').textContent = displayWord; 