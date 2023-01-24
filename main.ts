input.onButtonPressed(Button.A, function () {
    radio.sendString(item)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("huevos")
})
let item = ""
serial.redirectToUSB()
basic.forever(function () {
    item = serial.readLine()
    serial.writeString(item)
    basic.showString(item)
})
