let findWord = (sentence1, sentence2) => {
    length = sentence1.length
    return sentence1.substr(length-sentence2.length, length) === sentence2
}

console.log(findWord("charlotte", "otte"))