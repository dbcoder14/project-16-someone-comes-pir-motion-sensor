let sensor = 0
basic.clearScreen()
basic.forever(function () {
    sensor = pins.digitalReadPin(DigitalPin.P0)
    if (sensor) {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
        for (let index = 0; index < 10; index++) {
            pins.analogWritePin(AnalogPin.P1, 1023)
            basic.pause(5)
            pins.analogWritePin(AnalogPin.P1, 41)
        }
        basic.pause(500)
    } else {
        basic.showNumber(0)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(500)
    }
})
