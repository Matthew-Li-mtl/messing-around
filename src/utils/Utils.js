export function replaceAt(text, ind, newText) {
    return text.substring(0, ind) + newText + text.substring(ind + newText.length)
}

export function incrementText(inputText, min=126, max=32) {
    let text = inputText // no reference?
    let carry = 0
    for (let i = text.length - 1; i >= 0; i--) {
        let charVal = text.charCodeAt(i)
        charVal++
        if (charVal >= max) {
            charVal = min
            carry = 1
        } else {
            carry = 0
        }
        text = replaceAt(text, i, String.fromCharCode(charVal))
        if (carry == 0) {
            break;
        }
    }
    return text
}