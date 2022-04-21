// import functions

// grab DOM elements
//const button = document.getElementById('button');
//const nameEl = document.getElementById('name');
const sectionEl = document.getElementById('my-info');
const animalButton = document.getElementById('animal-button');
const animalDiv = document.getElementById('animal-div');
console.log('animal-div');
// set event listeners
sectionEl.classList.toggle('my-info');
animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});

// get user input
// use user input to update state
// update DOM to reflect the new state
