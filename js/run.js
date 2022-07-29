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
            btndecrypt.addEventListener("click", vigenere_decryp);
            break;
        case 'transposition' :
            btncrypter.addEventListener("click", cesar_crypter);
            btndecrypt.addEventListener("click", cesar_decrypt);
            break;
    }
})

// * cesar algo

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
    var outputvalue = input.value.toLowerCase();
    var keyvalue = Number(key.value);
    var outputarr = outputvalue.split("");
    var inputresarr = [];
    var outputnumarr = [];
    var outputnumarrZ = [];
    for(let i=0; i<outputarr.length; i++){
        if(outputarr[i] == ' '){
            outputnumarr.push(" ");
            inputresarr.push(" ")
        }
        else{
            outputnumarr.push(alphabet.indexOf(outputarr[i]) - keyvalue);
            outputnumarrZ.push(alphabet.indexOf(outputarr[i]));
            if(keyvalue > outputnumarrZ[i]){
                var x = 25 - (keyvalue - outputnumarrZ[i] - 1);
                inputresarr.push(alphabet[x])
            }
            else{
                inputresarr.push(alphabet[outputnumarr[i]])
            }
        }
        
    }
    var res2 = inputresarr.join("");
    output.innerHTML = res2;
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
    var value = input.value.toLowerCase();
    var keyv = key.value;
    var value_arr = value.split("");
    var valuearr_index = [];
    var key_arr = keyv.split("");
    var result_arr = [];
    var resultarr_index = [];
    var inputresarrNum = [];
    var cp = 0;
    var alphabet_cp = 24
    // !the input nummarr where ww gonna stock the res

    for(let i=0; i<value_arr.length; i++){
        // console.log(cp)
        resultarr_index.push(alphabet.indexOf(key_arr[cp]));
        valuearr_index.push(alphabet.indexOf(value_arr[i]));

        if(resultarr_index[i] > 25){
            resultarr_index[i] -= 26;
        }
        var x = valuearr_index[i] - resultarr_index[i]
        // we can start from the key val and do it in reverse ,the +2 is bc a is 0
        if(x<0){
            var time_to_loop = resultarr_index[i] - (valuearr_index[i]+2)
            x = alphabet_cp - (time_to_loop);
        }
        inputresarrNum.push(x)
        // result_arr.push(alphabet[resultarr_index[i]]);
        result_arr.push(alphabet[inputresarrNum[i]]);
        cp != keyv.length-1 ? cp++ : cp=0;
    }
    var result = result_arr.join(""); 
    output.innerHTML = result;
}

// alphabet.indexOf(value_arr) outputnumarr
