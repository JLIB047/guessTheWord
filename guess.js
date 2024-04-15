 const categories = {
    sports : ['football', 'rugby', 'soccer', 'cricket', 'basketball', 'baseball',
        'polo', 'tennis', 'lacrosse', 'golf'], 

    animals : ['dolphin', 'raccoon', 'squirrel', 'lamb', 'chicken', 'salmon', 
        'moose', 'whale', 'gorilla', 'frog'], 

    food : ['pizza', 'burgers', 'fries', 'banana', 'oranges', 'dumplings', 'noodles', 
    'calzone', 'icecream', 'pudding'],

};

// acccessing random category 
const randomProp = (obj) => {
    const randomProp = Object.keys(obj)
    [Math.random() * Object.keys(obj).length | 0]; 

    return randomProp; 
} ; 

const prop = randomProp(categories); 
console.log(prop);  
//getting random words from random prop. 
const randomInt = Math.floor(Math.random() * prop.length); 

console.log(randomInt); 

const randomWord = prop[randomInt]; 
console.log(randomWord);


//store guessed letters 
let guessedList = [];  

// for initial display word blanks
let displayWord = ""; 
for(let i = 0; i < random.length; i++){; 
    displayWord += "_ ";
}; 

document.getElementById('display-word').textContent = displayWord; 

// function to guess letter
function guessLetter() {
    //guessed input variable 
    let letterInput = document.getElementById('letter-input'); 
    
    // get empty input 
    if (!letterInput.value){
        alert('Empty input box, please insert a letter.');
        return; 
    } 

    // use .value to access input value 
    let letter = letterInput.value.toLowerCase(); 
    console.log(letter);
    //clear the input field
    letterInput.value = ""; 

    //check if the letter has already been guessed. 
    if(guessedList.includes(letter)){
        alert('You have already guessed that letter!');
        return;
    }
    //add the letter to the guessed letter array 
    guessedList.push(letter); 
    document.getElementById('guessed-letters').textContent = guessedList; 
    //update the word display based on the guessed letters 
    let updatedDisplay = "";
    let allLettersGuessed = true; 
    for(let i = 0; i < randomSport.length; i ++){
        if(guessedList.includes(randomSport[i])){
            updatedDisplay += randomSport[i] + " ";
        } else {
            updatedDisplay += "_ "; 
            allLettersGuessed = false; 
        }
    }
    document.getElementById('display-word').textContent = updatedDisplay; 

    //check if all letters have been guessed 
    if(allLettersGuessed){
        alert('Congratulations! You guessed the word correctly! '); 
    } 

}; 
