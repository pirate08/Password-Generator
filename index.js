const toMoveTheRange = document.getElementById("toMoveTheRange")
let toMoveTheNumber = document.getElementById("toMoveTheNumber")
const form = document.getElementById("passwordGeneratorForm")
const includeUppercaseElement = document.getElementById("includeUpper")
const includeNumberElement = document.getElementById("includeNum")
const includeSymbolElement = document.getElementById("includeSymb")
const passwordDisplayEle = document.getElementById("passwordDisplay")
const generatePassButton = document.getElementById("generatePass")


const arrayFromLowToHigh = (low, high) => {
    let arr = [];
    for (i = low; i <= high; i++) arr.push(i)
    
    return arr;
}


const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57);
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64) 
).concat(
    arrayFromLowToHigh(91,96)
).concat(
    arrayFromLowToHigh(123,126)
)

toMoveTheNumber.addEventListener('input',syncCharacterAmount)
toMoveTheRange.addEventListener('input',syncCharacterAmount)

function syncCharacterAmount(e){
    const val = e.target.value
    console.log('Value from syncCha', val)
    toMoveTheNumber.value = val
    toMoveTheRange.value = val
}

form.addEventListener('submit', e =>{
    e.preventDefault()
    const toMove = toMoveTheNumber.value
    const includeUpper = includeUppercaseElement.checked
    const includeNum = includeNumberElement.checked
    const includeSymb = includeSymbolElement.checked
    const password = generatePassword(toMove, includeUpper, includeNum, includeSymb)
    passwordDisplayEle.innerText = password
})

function generatePassword(toMoveTheNumber, includeUpper, includeNum, includeSymb){
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUpper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNum) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymb) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

    const passwordCharacters = []
    for(let i = 0; i < toMoveTheNumber; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

