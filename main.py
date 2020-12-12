def on_data_received():
    global msg
    msg = serial.read_line()
    radio.send_string(msg)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

msg = ""
serial.redirect_to_usb()
radio.set_group(27)
radio.set_transmit_power(7)
basic.show_leds("""
    . . # # .
    . # . . #
    # # # . #
    . # . . #
    . . # # .
    """)
basic.pause(500)
basic.clear_screen()