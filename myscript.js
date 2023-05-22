

const buttonPali = document.getElementById("buttonpalindrome");



buttonPali.addEventListener("click" , function (){

    let userWord = (document.getElementById("userword")).value

    checkpalindromeword(userWord)

})


/*FUNZIONE */
function checkpalindromeword(word) {

let result = ""
    
for (let i = word.length; i > -1; i--){
    
    result += word.charAt(i);

}

if (result != word) {

    document.getElementById("check").innerHTML = "THE WORD ISN'T PALINDROME"

} else {
    document.getElementById("check").innerHTML = "THE WORD IS PALINDROME"
}

}
