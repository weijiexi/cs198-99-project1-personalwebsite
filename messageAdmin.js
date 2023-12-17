// Get references to HTML elements
const form = document.getElementById('myForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messages');


// Add an event listener for form submission
form.addEventListener('submit',  (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the values entered by the user
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const messageText = document.getElementById('messageInput').value;

    // Check if the message is not empty
    if (messageText !== '') {
        // Create a new message element (a paragraph)
        const messageElement = document.createElement('p');
        
        // Concatenate the name and messageText
        const messageContent = `${name}: ${messageText}`;
        
        messageElement.textContent = messageContent;

        // Append the message to the messages container
        messagesContainer.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';
    }

    // You can now manipulate the form data as needed
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', messageText);

    // Here, you can perform additional actions like sending the data to a server via AJAX or processing it in JavaScript.
});

