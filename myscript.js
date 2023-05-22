

let userWord = prompt("insert a word")

checkpalidromeword(userWord)



/*FUNZIONE */
function checkpalidromeword(word) {

let result = ""
    
for (let i = word.length; i > -1; i--){
    
    result += word.charAt(i);

}

if (result != word) {

    console.log("La parola non è Palidroma");
} else {
    console.log("La parola è Palidroma")
}

}
