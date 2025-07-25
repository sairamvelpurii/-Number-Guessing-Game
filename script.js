
let raandom = Math.floor(Math.random() * 50);

const button = document.querySelector(".btn");
const inputt = document.getElementById("inputs");
const para = document.querySelector(".status");

const resetbtn = document.querySelector(".btn-reset");

button.addEventListener("click", function () {
     const userGuess = parseInt(inputt.value);

    if ( userGuess === raandom){
        console.log("your guess");
        document.querySelector(".status").textContent="Your guess is correct !!";
        document.querySelector(".status").style.backgroundColor= "orange";
    } else if ( userGuess < raandom){
         document.querySelector(".status").textContent="Your guess is too low ";
         document.querySelector(".status").style.backgroundColor= "lightGreen";
    } else {
        console.log("your guess too high")
         document.querySelector(".status").textContent="Your guess too high ";
         document.querySelector(".status").style.backgroundColor= "red";
    }
} )

resetbtn.addEventListener("click", function () {
    document.getElementById("inputs").value="";
    document.querySelector(".status").textContent="";
})