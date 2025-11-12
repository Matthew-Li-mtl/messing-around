import { incrementText } from "../../utils/Utils.js"

const counterText = "Big Button Can Count!"
const decimalCount = 0
const defaultText = true

function updateCounterText() {
    if (defaultText) {
        counterText = message
        defaultText = false
    }
    counterText = incrementText(counterText, minChar, maxChar)
    decimalCount++
}