async function sendMessage(message) {
  const responseElement = document.getElementById('response');
  responseElement.innerText = "Thinking...";

  try {
    const response = await fetch('https://mera-answer-backend-4.onrender.com/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    });

    const data = await response.json();
    responseElement.innerText = data.reply;
  } catch (err) {
    console.error('Error:', err);
    responseElement.innerText = "Error contacting AI. Please try again later.";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('sendBtn');
  const input = document.getElementById('messageInput');
  button.addEventListener('click', function() {
    const message = input.value.trim();
    if (message) {
      sendMessage(message);
    }
  });
});
