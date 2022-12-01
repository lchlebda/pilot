input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
    if (isTurningLeft) {
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    isTurningLeft = !(isTurningLeft)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("backward")
    isDrivingForward = !(isDrivingForward)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
    if (isTurningRight) {
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    isTurningRight = !(isTurningRight)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("drive")
    if (isDrivingForward) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    radio.sendString("stop")
    basic.clearScreen()
})
let isTurningRight = false
let isTurningLeft = false
let isDrivingForward = false
radio.setGroup(1)
isDrivingForward = true
isTurningLeft = false
isTurningRight = false
