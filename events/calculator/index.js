// $("input:text").val("5");

let input = document.getElementById("input");


// Typing in the input bar
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        let equation = $("input:text").val();
        console.log($("input:text").val());

        let result = eval(equation);
        $("input:text").val(result);        

    };
});


// Using buttons

// document.getElementsByClassName("btn").onclick=function(){
//     console.log("button clicked");
// }
console.log("testing");