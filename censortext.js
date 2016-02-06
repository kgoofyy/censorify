var censoredWords = ['smutny', 'niedobry', 'szalony'];
var customCensoredWords = [];
function censor(inStr) {
    var i = 0;
    for (i = 0; i < censoredWords.length; i += 1) {
        inStr = inStr.replace(censoredWords[i], '***');
    }
    for (i = 0; i < customCensoredWords.length; i += 1) {
        inStr = inStr.replace(customCensoredWords[i], '***');
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
