// Select the form element
const form = document.querySelector('#form-input');

// Add a submit event listener to the form
if (form) {
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input value from the form
    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // Construct the URL with the user inputs as parameters
    const url = `blog.html?username=${username}&title=${title}&content=${content}`;

    // Redirect to the blog.html page with the user input as a parameter
    window.location.replace(url);
});
} else {
    console.error('Form element not found');

}

