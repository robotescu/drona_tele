input.onButtonPressed(Button.A, function () {
    radio.sendString("Stanga")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("Spate")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Dreapta")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("Fata")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("Decoleaza")
})
basic.showString("T")
radio.setGroup(2)
