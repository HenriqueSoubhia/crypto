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
    let espaçoLetra = "✌🩳🍫"
    let finalLetra = "😖😜🙃"
    let exclamacaoLetra = "😗🙂🙄"
    let interrogacaoLetra = "🥶🥵😱"
    let virgulaLetra = "🦝🐸🐽"

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
    }

    let output = "";

    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    return output;

}


let encripyt = crypt("IGOR, TeuS CABèLO É DAôRA","😳😫🥱")

let solve = descrypt(encripyt,"😳😫🥱")

console.log(encripyt)

console.log(solve)
