
let list = document.getElementById('list')
inp.addEventListener('keyup', e=>{
    if(e.keyCode === 13){
        addTodo()
    }
})

const addTodo = () => {
    const id = Math.floor(Math.random()*999999)
    let todo = inp.value;
    render({id,todo})
}


const render = item => {
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    ul.setAttribute('id',item.id)

    li.innerHTML = `
    <div>
    <h3 id='hp${item.id}'>${item.todo}</h3>
    <button onclick="editTodo(${item.id})">Edit</button>
    <button onclick="deleteTodo(${item.id})">Delete</button>
    </div>
    `
    ul.appendChild(li)
    list.appendChild(ul)
}

const deleteTodo = id => {
document.getElementById(id).remove()
}

const editTodo = (id) => {
    let node = document.getElementById(`hp${id}`)
    let editedTask = prompt('change', node.innerText)
    node.innerText = editedTask
}

const factorial = (num) => {
    let result = 1;
    for (i=1; i <= num; i++){
        result = i*result;
    }
    console.log(result)
}
factorial(5);

let factorize = (num,result=1) => {
    if(num > 1) {
        result = result*num
        console.log(result)
        return factorize(--num, result)
    }
    return result
}


let arr = ['a','b',['c','d',[]]]

let lastItem = arr.pop()
if(Array.isArray(lastItem)){
   arr =  arr.concat(lastItem)
}
console.log("arr",arr)


console.log("==>",Array.isArray(lastItem))
