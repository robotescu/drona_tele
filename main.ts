input.onButtonPressed(Button.A, function () {
    radio.sendString("Stanga")
})
input.onGesture(Gesture.LogoUp, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Dreapta")
})
input.onGesture(Gesture.LogoDown, function () {
	
})
basic.showString("T")
radio.setGroup(2)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        radio.sendString("Spate")
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendString("Fata")
    }
    basic.pause(500)
})
