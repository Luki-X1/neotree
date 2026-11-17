let PinStrip = 300
let neostrip = neopixel.create(DigitalPin.P0, PinStrip, NeoPixelMode.RGB_RGB)
function indexing() {
    let i: number;
    for (i = 0; i < PinStrip; i++) {
        neostrip.setPixelColor(i, neopixel.colors(NeoPixelColors.White))
    }
    for (i = 1; i < PinStrip / 5; i++) {
        neostrip.setPixelColor(i * 5, neopixel.colors(NeoPixelColors.Red))
    }
    for (i = 1; i < PinStrip / 10; i++) {
        neostrip.setPixelColor(1 * 10, neopixel.colors(NeoPixelColors.Blue))
    }
}

while (true) {
    indexing()
}
