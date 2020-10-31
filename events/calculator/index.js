// $("input:text").val("5");

let input = document.getElementById("input");

let equation = '';

let result = '';

// Typing in the input bar
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        equation = $("input:text").val();
        console.log($("input:text").val());

        result = eval(equation);
        $("input:text").val(result);
        equation = ''       

    };
});


// Using buttons
<<<<<<< HEAD
calculator.onclick = e => {
    if (e.target.innerText === "="){
        result = eval(equation);
        $("input:text").val(result);
        equation = result;
    }

    else if (e.target.innerText === "C"){
        equation = '';
        result = ''
        $("input:text").val('');
    }

    else{
        equation = equation + e.target.innerText
        $("input:text").val(equation);
        console.log('equation', equation);
    }

=======

// document.getElementsByClassName("btn").onclick=function(){
//     console.log("button clicked");
// }
console.log("testing");

calculator.onclick = e => {
    console.log("click",e.target.value);
>>>>>>> 10f97fe02502835b9411dfc1d926c865651ea7cb
}