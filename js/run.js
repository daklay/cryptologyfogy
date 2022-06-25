var input = document.getElementById("textid");
var output = document.getElementById("textid2");
var key = document.getElementById("key");
var alphabet  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var btncrypter = document.getElementById("crypter");
var btndecrypt = document.getElementById("decrypt");
var select = document.getElementById("selectid");


btncrypter.addEventListener("click", cesar_crypter);
btndecrypt.addEventListener("click", cesar_decrypt);

select.addEventListener("change", ()=>{
    switch(select.value){
        case 'César' :
            btncrypter.addEventListener("click", cesar_crypter);
            btndecrypt.addEventListener("click", cesar_decrypt);
            break;
        case 'vigenere' :
            btncrypter.addEventListener("click", vigenere_crypter);
            btndecrypt.addEventListener("click", cesar_decrypt);
            break;
        case 'transposition' :
            btncrypter.addEventListener("click", cesar_crypter);
            btndecrypt.addEventListener("click", cesar_decrypt);
            break;
    }
})

// * err in cesar if > 25 ...

function cesar_crypter(){
    var inputvalue = input.value.toLowerCase() ;
    var keyvalue = Number(key.value);
    var inputarr = inputvalue.split("");
    var outputresarr = [];
    var inputnumarr = [];
    for(let i=0; i<inputarr.length; i++){
        if(inputarr[i] == ' '){
            inputnumarr.push(" ");
            outputresarr.push(" ")
        }
        else{
            inputnumarr.push(alphabet.indexOf(inputarr[i]) + keyvalue);
            if(inputnumarr[i] > 25){
                inputnumarr[i]-= 26;
            }
            outputresarr.push(alphabet[inputnumarr[i]])
        }
    }
    var res1 = outputresarr.join("");
    output.innerHTML = res1;
}
function cesar_decrypt(){
    var outputvalue = output.value.toLowerCase();
    var keyvalue = Number(key.value);
    var outputarr = outputvalue.split("");
    var inputresarr = [];
    var outputnumarr = [];
    for(let i=0; i<outputarr.length; i++){
        if(outputarr[i] == ' '){
            outputnumarr.push(" ");
            inputresarr.push(" ")
        }
        else{
            outputnumarr.push(alphabet.indexOf(outputarr[i]) - keyvalue);
            inputresarr.push(alphabet[outputnumarr[i]])
        }
        
    }
    var res2 = inputresarr.join("");
    input.innerHTML = res2;
}

// * vigenere algo

function vigenere_crypter(){
    var inputvalue = input.value.toLowerCase() ;
    var keyvalue = key.value;
    var inputarr = inputvalue.split("");
    var keyarr = keyvalue.split("");
    var outputresarr = [];
    var inputnumarr = [];
    var cp = 0;

    for(let i=0; i<inputarr.length; i++){
        inputnumarr.push(alphabet.indexOf(inputarr[i]) + alphabet.indexOf(keyarr[cp]))
        if(inputnumarr[i] > 25){
            inputnumarr[i] -= 26;
        }
        outputresarr.push(alphabet[inputnumarr[i]]);
        cp != keyvalue.length-1 ? cp++ : cp=0;
    }
    var res1 = outputresarr.join(""); 
    output.innerHTML = res1;
}
function vigenere_decryp(){
    var outputvalue = output.value.toLowerCase();
    var keyvalue = key.value;
    var outputarr = outputvalue.split("");
    var keyarr = keyvalue.split("");
    var inputresarr = [];
    var outputnumarr = [];
    var cp = 0;
    // !the input nummarr where ww gonna stock the res

    for(let i=0; i<outputarr.length; i++){
        console.log(cp)
        outputnumarr.push(alphabet.indexOf(keyarr[cp]))
        if(outputnumarr[i] > 25){
            outputnumarr[i] -= 26;
        }
        inputresarr.push(alphabet[outputnumarr[i]]);
        cp != keyvalue.length-1 ? cp++ : cp=0;
    }
    var res2 = inputresarr.join(""); 
    output.innerHTML = res2;
}