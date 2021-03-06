    //alfabeto
    let aLetra = "๐คท๐๐"
    let bLetra = "๐ค๐ฃ๐"
    let cLetra = "๐ค๐๐"
    let dLetra = "๐๐ค๐ค"
    let eLetra = "๐๐ฅฐ๐"
    let fLetra = "๐๐งต๐จ"
    let gLetra = "๐ต๐งจ๐งจ"
    let hLetra = "๐๐๐"
    let iLetra = "๐ฑ๐โจ"
    let jLetra = "๐ฅต๐ฆ๐"
    let kLetra = "๐ฅถ๐๐"
    let lLetra = "๐๐๐ถ"
    let mLetra = "๐๐ฏ๐"
    let nLetra = "๐คฌ๐ฝ๐ค"
    let oLetra = "๐บ๐คด๐ณโโ๏ธ"
    let pLetra = "๐ฆ๐จโ๐ป๐ฉโ๐ค"
    let qLetra = "๐ค๐๐งฃ"
    let rLetra = "๐๐ฎ๐"
    let sLetra = "๐๐๐ก"
    let tLetra = "๐๐ฉ๐ฉฐ"
    let uLetra = "๐ฆงโฝ๐"
    let vLetra = "๐ฑ๐๐"
    let wLetra = "๐ฏโฒ๐"
    let xLetra = "๐ฝ๐๐"
    let yLetra = "๐ค๐ญ๐"
    let zLetra = "๐ซ๐โจ"

    //sinais (bagulho estranho)
    let espaรงoLetra = "โ๐ฉณ๐ซ"
    let finalLetra = "๐๐๐"
    let virgulaLetra = "๐ด๐คก๐ค "
    let exclamacaoLetra = "๐๐๐"
    let interrogacaoLetra = "๐ฅถ๐ฅต๐ฑ"

    //numeros
    let zeroLetra = "๐ฑโ๐๐ป๐ฉ"
    let umLetra = "๐ฅ๐ต๐คฏ"
    let doisLetra = "๐๐ฆง๐"
    let tresLetra = "๐น๐ฎ๐บ"
    let quatroLetra = "๐ถ๐๐คฌ"
    let cincoLetra = "๐คข๐ฆ๐ค"
    let seisLetra = "๐ป๐ฉ๐ฏ"
    let seteLetra = "๐ ๐๐ฒ"
    let oitoLetra = "๐ฑโ๐ค๐ฝ๐ค"
    let noveLetra = "๐ฏ๐ฉ๐ป"
    
    //caracter especial
    let barraLetra = "๐คฌ๐ฌ๐ญ"
    let arrobaLetra = "๐ฅณ๐ฅต๐คฏ"
    let parentesesELetra = "๐ฝ๐ป๐"
    let parentesesDLetra = "๐๐๐"

function crypt(msg, hash){

    let phrase = msg.toLowerCase().normalize("NFD").split("");


    for (let i = 0; i < phrase.length; i++) {
        if(phrase[i] == "a"){
            phrase[i] = aLetra
        }
        if(phrase[i] == "b"){
            phrase[i] = bLetra
        }
        if(phrase[i] == "c"){
            phrase[i] = cLetra
        }
        if(phrase[i] == "d"){
            phrase[i] = dLetra
        }
        if(phrase[i] == "e"){
            phrase[i] = eLetra
        }
        if(phrase[i] == "f"){
            phrase[i] = fLetra
        }
        if(phrase[i] == "g"){
            phrase[i] = gLetra
        }
        if(phrase[i] == "h"){
            phrase[i] = hLetra
        }
        if(phrase[i] == "i"){
            phrase[i] = iLetra
        }
        if(phrase[i] == "j"){
            phrase[i] = jLetra
        }
        if(phrase[i] == "k"){
            phrase[i] = kLetra
        }
        if(phrase[i] == "l"){
            phrase[i] = lLetra
        }
        if(phrase[i] == "m"){
            phrase[i] = mLetra
        }
        if(phrase[i] == "n"){
            phrase[i] = nLetra
        }
        if(phrase[i] == "o"){
            phrase[i] = oLetra
        }
        if(phrase[i] == "p"){
            phrase[i] = pLetra
        }
        if(phrase[i] == "q"){
            phrase[i] = qLetra
        }
        if(phrase[i] == "r"){
            phrase[i] = rLetra
        }
        if(phrase[i] == "s"){
            phrase[i] = sLetra
        }
        if(phrase[i] == "t"){
            phrase[i] = tLetra
        }
        if(phrase[i] == "u"){
            phrase[i] = uLetra
        }
        if(phrase[i] == "v"){
            phrase[i] = vLetra
        }
        if(phrase[i] == "w"){
            phrase[i] = wLetra
        }
        if(phrase[i] == "x"){
            phrase[i] = xLetra
        }
        if(phrase[i] == "y"){
            phrase[i] = yLetra
        }
        if(phrase[i] == "z"){
            phrase[i] = zLetra
        }
        if(phrase[i] == " "){
            phrase[i] = espaรงoLetra
        }
        if(phrase[i] == "."){
            phrase[i] = finalLetra
        }
        if(phrase[i] == "!"){
            phrase[i] = exclamacaoLetra
        }
        if(phrase[i] == "?"){
            phrase[i] = interrogacaoLetra
        }
        if(phrase[i] == ","){
            phrase[i] = virgulaLetra
        }
        if(phrase[i] == "0"){
            phrase[i] = zeroLetra
        }
        if(phrase[i] == "1"){
            phrase[i] = umLetra
        }
        if(phrase[i] == "2"){
            phrase[i] = doisLetra
        }
        if(phrase[i] == "3"){
            phrase[i] = tresLetra
        }
        if(phrase[i] == "4"){
            phrase[i] = quatroLetra
        }
        if(phrase[i] == "5"){
            phrase[i] = cincoLetra
        }
        if(phrase[i] == "6"){
            phrase[i] = seisLetra
        }
        if(phrase[i] == "7"){
            phrase[i] = seteLetra
        }
        if(phrase[i] == "8"){
            phrase[i] = oitoLetra
        }
        if(phrase[i] == "9"){
            phrase[i] = noveLetra
        }
        if(phrase[i] == "@"){
            phrase[i] = arrobaLetra
        }
        if(phrase[i] == "/"){
            phrase[i] = barraLetra
        }
        if(phrase[i] == "("){
            phrase[i] = parentesesELetra
        }
        if(phrase[i] == ")"){
            phrase[i] = parentesesDLetra
        }
        phrase[i] += hash
    }

    let output = "";
    
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
    }

    return output;

}


function descrypt(cypher, hash){
    let h = String(hash)

    const msg = cypher.split(h);

    for (let i = 0; i < msg.length; i++) {
        if(msg[i] == aLetra){
            msg[i] = "a"
        }
        if(msg[i] == bLetra){
        msg[i] = "b"
        }
        if(msg[i] == cLetra){
            msg[i] = "c"
        }
        if(msg[i] == dLetra){
            msg[i] = "d"
        }
        if(msg[i] == eLetra){
            msg[i] = "e"
        }
        if(msg[i] == fLetra){
            msg[i] = "f"
        }
        if(msg[i] == gLetra){
            msg[i] = "g"
        }
        if(msg[i] == hLetra){
            msg[i] = "h"
        }
        if(msg[i] == iLetra){
            msg[i] = "i"
        }
        if(msg[i] == jLetra){
            msg[i] = "j"
        }
        if(msg[i] == kLetra){
            msg[i] = "k"
        }
        if(msg[i] == lLetra){
            msg[i] = "l"
        }
        if(msg[i] == mLetra){
            msg[i] = "m"
        }
        if(msg[i] == nLetra){
            msg[i] = "n"
        }
        if(msg[i] == oLetra){
            msg[i] = "o"
        }
        if(msg[i] == pLetra){
            msg[i] = "p"
        }
        if(msg[i] == qLetra){
            msg[i] = "q"
        }
        if(msg[i] == rLetra){
            msg[i] = "r"
        }
        if(msg[i] == sLetra){
            msg[i] = "s"
        }
        if(msg[i] == tLetra){
            msg[i] = "t"
        }
        if(msg[i] == uLetra){
            msg[i] = "u"
        }
        if(msg[i] == vLetra){
            msg[i] = "v"
        }
        if(msg[i] == wLetra){
            msg[i] = "w"
        }
        if(msg[i] == xLetra){
            msg[i] = "x"
        }
        if(msg[i] == yLetra){
            msg[i] = "y"
        }
        if(msg[i] == zLetra){
            msg[i] = "z"
        }
        if(msg[i] == espaรงoLetra){
            msg[i] = " "
        }
        if(msg[i] == finalLetra){
            msg[i] = "."
        }
        if(msg[i] == exclamacaoLetra){
            msg[i] = "!"
        }
        if(msg[i] == interrogacaoLetra){
            msg[i] = "?"
        }
        if(msg[i] == virgulaLetra){
            msg[i] = ","
        }
        if(msg[i] == zeroLetra){
            msg[i] = "0"
        }
        if(msg[i] == umLetra){
            msg[i] = "1"
        }
        if(msg[i] == doisLetra){
            msg[i] = "2"
        }
        if(msg[i] == tresLetra){
            msg[i] = "3"
        }
        if(msg[i] == quatroLetra){
            msg[i] = "4"
        }
        if(msg[i] == cincoLetra){
            msg[i] = "5"
        }
        if(msg[i] == seisLetra){
            msg[i] = "6"
        }
        if(msg[i] == seteLetra){
            msg[i] = "7"
        }
        if(msg[i] == oitoLetra){
            msg[i] = "8"
        }
        if(msg[i] == noveLetra){
            msg[i] = "9"
        }
        if(msg[i] == arrobaLetra){
            msg[i] = "@"
        }
        if(msg[i] == barraLetra){
            msg[i] = "/"
        }
        if(msg[i] == parentesesELetra){
            msg[i] = "("
        }
        if(msg[i] == parentesesDLetra){
            msg[i] = ")"
        }
    }

    let output = "";

    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    return output;

}


let encripyt = crypt("Eu, garibรฉl (MuitoNerd@gmail.com), nasci no dia 12/05/2006","๐ณ๐ซ๐ฅฑ")

let solve = descrypt(encripyt,"๐ณ๐ซ๐ฅฑ")

console.log(encripyt)

console.log(solve)
