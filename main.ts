input.onButtonPressed(Button.A, function () {
    if (debug == 1) {
        debug = 0
    } else {
        debug = 1
    }
    basic.showNumber(debug)
    basic.pause(500)
    basic.clearScreen()
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    msg = serial.readLine()
    radio.sendString(msg)
    if (debug == 1) {
        basic.showString(msg)
    }
})
let msg = ""
let debug = 0
serial.redirectToUSB()
radio.setGroup(27)
radio.setTransmitPower(7)
debug = 0
basic.showLeds(`
    . . # # .
    . # . . #
    # # # . #
    . # . . #
    . . # # .
    `)
