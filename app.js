// Find word function
function findWord() {
    let text = document.getElementById('inputText').value;
    let word = document.getElementById('wordInput').value;

    if (word === "") {
        document.getElementById('result').innerHTML = "Please enter a word to find.";
        return;
    }

    let index = text.indexOf(word);

    if (index !== -1) {
        document.getElementById('result').innerHTML = `"${word}" found at index ${index}.`;
    } else {
        document.getElementById('result').innerHTML = `"${word}" not found in the text.`;
    }
}

// Replace word function
function replaceWord() {
    let text = document.getElementById('inputText').value;
    let word = document.getElementById('wordInput').value;
    let newWord = document.getElementById('replaceWordInput').value;

    if (word === "" || newWord === "") {
        document.getElementById('result').innerHTML = "Please enter both words for replacement.";
        return;
    }

    if (text.indexOf(word) === -1) {
        document.getElementById('result').innerHTML = `"${word}" not found in the text.`;
    } else {
        let newText = text.replace(word, newWord);
        document.getElementById('result').innerHTML = `Updated text: "${newText}"`;
    }
}
