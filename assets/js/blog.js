// Function to extract URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        username: params.get('username'),
        title: params.get('title'),
        content: params.get('content')
    };
}

// Function to save user input data to local storage
function saveUserInputToLocalStorage(username, title, content) {
    let userInputArray = JSON.parse(localStorage.getItem('userInput')) || [];

    const userInput = {
        username: username,
        title: title,
        content: content
    };

    if (!Array.isArray(userInputArray)) {
        userInputArray = [];
    }

    userInputArray.push(userInput);
    localStorage.setItem('userInput', JSON.stringify(userInputArray));
}

// Function to retrieve user input data from local storage
function getUserInputFromLocalStorage() {
    const userInput = localStorage.getItem('userInput');
    return userInput ? JSON.parse(userInput) : null;
}

// Get the user input from local storage or URL parameters
const userInput = getUserInputFromLocalStorage() || getUrlParams();

// Save the user input to local storage
saveUserInputToLocalStorage(userInput.username, userInput.title, userInput.content);

// Function to create a new card
function createCard(username, title, content) {
    const cardContainer = document.querySelector('.card-container');
    const sampleCard = document.querySelector('.sample-card');

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${title}</h3>
        <p>By ${username}</p>
        <p>${content}</p>
    `;

    // Insert the new card after the sample card if it has a next sibling
    if (sampleCard.nextSibling) {
        cardContainer.insertBefore(card, sampleCard.nextSibling);
    } else {
        cardContainer.appendChild(card); // Append the new card if no next sibling
    }
}

// Create a new card using the user input
createCard(userInput.username, userInput.title, userInput.content);

// Select the "Back to Form" button element
const backButton = document.querySelector('#back-button');

// Add a click event listener to the button
backButton.addEventListener('click', function() {
    // Redirect to index.html when the button is clicked
    window.location.href = 'index.html';
});