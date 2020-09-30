
// now it is just declered
// hoisting
// let a;
// console.log("a",a)


let obj1 = {name:"abc",marks:33}

//  here obj2 and obj1 both has same reference.
let obj2 = obj1


obj1.name = "uuu"

// when I reassign the value to the object then it's refernece will break.
obj1 = null

obj2.marks = 56

// console.log("==>",obj2)

function Creater(name,marks){
this.name = name
this.marks = marks
this.hello = ()=>"Hi"
}

let obj3 = new Creater("a1",22)
let obj4 = new Creater("a2",26)
let obj5 = new Creater("a3",28)

Creater.prototype.section = "A"

// console.log("obj5",obj5.section)
console.log(new Creater().hello())




function creater(name,marks){
    return {
        name,
        marks,
    }
    
}

let obj6 = creater("a1",22)
// console.log("obj6",obj4)

// console.log("object.keys",Object.keys(obj6))
// console.log("object.values",Object.values(obj6))

let obj7 = {
    name:"charlotte",
    game:"socker"
}

// spread operator
// it will break the reference

let obj8 = {...obj7}

obj8.name = "abc"

console.log("obj8",obj8)
console.log("obj7",obj7)


console.log("object.entries",Object.entries(obj7))




