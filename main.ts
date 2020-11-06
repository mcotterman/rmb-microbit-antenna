serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    msg = serial.readLine()
    radio.sendString(msg)
})
let msg = ""
serial.redirectToUSB()
radio.setGroup(27)
radio.setTransmitPower(7)
basic.showLeds(`
    . . # # .
    . # . . #
    # # # . #
    . # . . #
    . . # # .
    `)
basic.pause(500)
basic.clearScreen()
