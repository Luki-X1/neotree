PinStrip = 300
neostrip = neopixel.create(DigitalPin.P0, PinStrip, NeoPixelMode.RGB_RGB)

def indexing():
    for i in range(PinStrip):
        neostrip.set_pixel_color(i, neopixel.colors(NeoPixelColors.WHITE))
    for i in range(1, PinStrip/5):
        neostrip.set_pixel_color(i*5, neopixel.colors(NeoPixelColors.RED))
    for i in range(1, PinStrip/10):
        neostrip.set_pixel_color(1*10, neopixel.colors(NeoPixelColors.BLUE))

while True:
    indexing()