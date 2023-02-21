function caesarCipher(string,shiftFactor){
    if(shiftFactor < 0){
        return caesarCipher(string, shiftFactor + 26);
    }
    let output = '';

    for(let i = 0; i < string.length; i++){
        let c = string.charAt(i);

        if(c.match(/[a-z]/i)){
            let code = c.charCodeAt();

            //Upper Case Letters
            if(code >= 65 && code <= 90){
                c = String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65);
            }
            else if(code >=97 && code <= 122){
                c = String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97);
            }
        }
        output += c;
    }
    return output;
}
export default caesarCipher;