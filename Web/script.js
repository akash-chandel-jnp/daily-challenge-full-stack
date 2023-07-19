// JavaScript code can be added here if needed
window.addEventListener('DOMContentLoaded', (event) => {
    const codeElement = document.getElementById('code');
    const lineNumbersElement = document.getElementById('line-numbers');
    const codeLines = codeElement.innerText.trim().split('\n');
    const lineNumbers = [];

    for (let i = 0; i < codeLines.length; i++) {
        lineNumbers.push(i + 1);
    }

    lineNumbersElement.innerText = lineNumbers.join('\n');
});
