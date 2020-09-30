let name = "charlotte"

// backtick *multiline *add variables
let a = `Hello ${name}`

let str1 = "I am a Developer"

let res = str1.slice(0,3) // I a
console.log("res",res)


let res1 = str1.substr(0,3)
console.log("res1",res1)


// how to know acsii code 

console.log("hello".codePointAt(0))

// toLowerCase

let str2 = "Hi Aijaz"
// it return the lower case not change the original one
str2.toLowerCase()

console.log(str2.toUpperCase());


// stringReplacer("hello aijaz", "aijaz", "abc") //hello abc

let str5 = 'Hello from abc'
let res6 = str5.replace("abc", "there")
console.log(res6)




let stringReplacer = (sentence, word, replacement) => {

    let len = sentence.length;
    let wordLength = word.length
    let start = 0; 
    
    while(wordLength <= len){
        let wordInSentence = sentence.slice(start,wordLength)
        if(wordInSentence === word){
            sentence = sentence.slice(0,start) + replacement + sentence.slice(wordLength)
        }
        start++
        wordLength++
    }
    
    return sentence
    
}

let sent = "publish it anywhere. Contentful is a flexible and future-friendly"

let newString = stringReplacer(sent,"flexible and","non ____" )

console.log("newString",newString)

function hello(a){
    console.log(a)
}

hello("abc","bbbb")


