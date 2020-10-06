
// location
// console.log(location);

// reload

// location.reload()

btn1.onclick = () => {
    location.replace("page1.html")
}

btn2.onclick = () => {
    window.open('page1.html')
}

btn3.onclick = () => {

    let newWindow = window.open();
    
    let newWindowContent = `
    <h1 style="background:#000;color:#fff;width:100%;height:50px;">New Window</h1>
    <img style="width:100%;height: 70vh" src="https://picsum.photos/200/300">
    <p>image title</p>
    <br>
    <p>
    Page body
    </p>
    <br>
    <p>
    page Footer
    </p>
    `
    newWindow.document.write(newWindowContent)
}

todo.onclick = () => {
    window.open('../events/todoApp/index.html')
}


// screen

console.log(screen)
console.log(screen.height)

// geolocation

function position(pos){
    console.log("pos",pos)
}
navigator.geolocation.getCurrentPosition(position)







