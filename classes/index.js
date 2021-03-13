
class parent {
    constructor(name){
        this.name = name;
    }

    test1 = () =>{
        console.log("not static")
    }

    static test = ()=>{
        console.log("static")
    }
}


class child extends parent {
    constructor(name,age){
        super(name);
        this.age = age
    }
}



let p1 = new parent("abc")

console.log("p1",p1.test1(), parent.test())


let c1 = new child("hhh",23);

console.log("c1",c1)