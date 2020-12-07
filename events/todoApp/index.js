
let list = document.getElementById('list')
inp.addEventListener('keyup', e=>{
    if(e.keyCode === 13){
        addTodo()
        inp.value='';
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
    <a onclick="editTodo(${item.id})" class="btn edit"><i class="fas fa-edit"></i></a>
    <a onclick="deleteTodo(${item.id})" class="btn"><i class="fas fa-check-circle"></i></a>
    <hr>
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
