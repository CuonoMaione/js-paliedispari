

const buttonPali = document.getElementById("buttonpalindrome");



buttonPali.addEventListener("click" , function (){

    let userWord = (document.getElementById("userword")).value

    checkpalindromeword(userWord)

})



/*FUNZIONE */
function checkpalindromeword(word) {

let result = ""
    
for (let i = word.length -1; i > -1; i--){
    
    result += word.charAt(i);

}

if (result.toLowerCase() != word.toLowerCase()) {

    document.getElementById("check").innerHTML = "THE WORD ISN'T PALINDROME"
    

} else {
    document.getElementById("check").innerHTML = "THE WORD IS PALINDROME"
    
}

}



/* ODD OR EVEN*/

const userChoice = prompt("even or odd?");
const userNumber = parseInt(prompt("select number from 1 to 5"));

checkoddoreven(userChoice,userNumber);


/*FUNCTION */
function checkoddoreven(userChoice , userNumber) {
    
    const randomNumber = parseInt(Math.floor(Math.random() * (5) + 1));
    console.log(randomNumber)
    let sum = userNumber + randomNumber

if (sum % 2 === 0 && userChoice === "even" || sum % 2 != 0 && userChoice === "odd") {
    console.log("you have win")
} else {
    console.log("you have loose")
}

console.log(userChoice,userNumber,sum)

}



