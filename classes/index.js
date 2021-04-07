
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
class test {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  func(param) {
    console.log("param", param);
    console.log("this.name", this.name);
    return param;
  }
}

class testChild extends test {
    constructor(name, year, age){
        super(name,year);
        this.age= age
    }
}

let obj = new test("aijaz", 3030);

console.log("obj", obj);

let obj1 = new test("aijaz1", 3039);

console.log("obj1", obj1);

console.log("=====>", obj1.func("hh"));


let obj3 = new testChild("aaa",3030,33)

console.log("====> ppp",obj3);
