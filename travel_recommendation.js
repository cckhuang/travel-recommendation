const submitContactBtn = document.getElementById('submitContactBtn');

function confirmContact(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameValue = nameInput ? nameInput.value : "";
    const emailValue = emailInput ? emailInput.value : "";
    const messageValue = messageInput ? messageInput.value : "";

    const confirmMessageDiv = document.getElementById('confirmMessage');
    let outputMessage = "";

    if (nameValue === "") {
        outputMessage = 'Please enter your name.';
    }
    else if (emailValue === "") {
        outputMessage = 'Please enter your email address.';
    }
    else if (messageValue === "") {
        outputMessage = 'Please enter a message.';
    }
    else {
        outputMessage = '<p>Thank you for contacting us! We will be in touch shortly.</p>';
    }

    if (outputMessage !== "") {
        confirmMessageDiv.innerHTML = outputMessage;
    }
}

submitContactBtn.addEventListener('click', confirmContact);
