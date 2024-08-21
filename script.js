function convertToUpper() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toUpperCase();
    document.getElementById('outputText').innerText = outputText;
}

function convertToLower() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toLowerCase();
    document.getElementById('outputText').innerText = outputText;
}
