
btn.addEventListener("click",e=>{
    console.log("==>")
})

textArea.addEventListener('keyup',e =>{
    if (e.keyCode == 53){
        color =Math.random()*1000
        color = '#' + Math.floor(color)
        console.log(color);
        e.target.style.color=color;
    }
})

div1.addEventListener('click', e => {
    console.log("e.target div1",e.target)
})

div3.addEventListener('click',e=>{
    console.log("e.target div3",e.target)
    
})



