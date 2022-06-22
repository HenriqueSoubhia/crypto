    //alfabeto
    let aLetra = "🤷😎😚"
    let bLetra = "🤞😣😚"
    let cLetra = "🤔😄😘"
    let dLetra = "🙄🤗🤗"
    let eLetra = "😏🥰😈"
    let fLetra = "😛🧵🎨"
    let gLetra = "🌵🧨🧨"
    let hLetra = "😑🛒🎃"
    let iLetra = "😱🎈✨"
    let jLetra = "🥵🦄🙉"
    let kLetra = "🥶🙄😁"
    let lLetra = "😎🎃😶"
    let mLetra = "🐒💯😎"
    let nLetra = "🤬👽🤔"
    let oLetra = "👺🤴👳‍♀️"
    let pLetra = "🦄👨‍💻👩‍🎤"
    let qLetra = "🤑👜🧣"
    let rLetra = "🐀🎮🔔"
    let sLetra = "🙉👔🎡"
    let tLetra = "🙈🎩🩰"
    let uLetra = "🦧⚽💍"
    let vLetra = "🐱🎄🎎"
    let wLetra = "💯⏲🖇"
    let xLetra = "👽👙👑"
    let yLetra = "🖤🎭🎁"
    let zLetra = "💫🎆✨"

    //sinais (bagulho estranho)
    let espaçoLetra = "✌🩳🍫"
    let finalLetra = "😖😜🙃"
    let virgulaLetra = "😴🤡🤠"
    let exclamacaoLetra = "😗🙂🙄"
    let interrogacaoLetra = "🥶🥵😱"

    //numeros
    let zeroLetra = "🐱‍👓👻💩"
    let umLetra = "🐥😵🤯"
    let doisLetra = "🐒🦧🙈"
    let tresLetra = "🐹🐮🐺"
    let quatroLetra = "😶😟🤬"
    let cincoLetra = "🤢🦊🤑"
    let seisLetra = "😻💩🐯"
    let seteLetra = "🐠🙃😲"
    let oitoLetra = "🐱‍👤👽🤓"
    let noveLetra = "🐯💩😻"
    
    //caracter especial
    let barraLetra = "🤬😬😭"
    let arrobaLetra = "🥳🥵🤯"
    let parentesesELetra = "👽👻🙊"
    let parentesesDLetra = "💀😇🙂"

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
            phrase[i] = espaçoLetra
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
        if(msg[i] == espaçoLetra){
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


let encripyt = crypt("Eu, garibél (MuitoNerd@gmail.com), nasci no dia 12/05/2006","😳😫🥱")

let solve = descrypt(encripyt,"😳😫🥱")

console.log(encripyt)

console.log(solve)
