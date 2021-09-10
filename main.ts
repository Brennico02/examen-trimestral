let y = 0
let x = 0
basic.forever(function () {
    y = 5
    for (let index = 0; index < 5; index++) {
        y += -1
        led.plot(0, y)
        basic.pause(200)
        led.plot(0, y)
        basic.pause(200)
        basic.clearScreen()
    }
    x = 0
    for (let index = 0; index < 5; index++) {
        x += 1
        led.plot(x, 0)
        basic.pause(200)
        led.plot(x, 0)
        basic.pause(200)
        basic.clearScreen()
    }
    y = 0
    for (let index = 0; index < 5; index++) {
        y += 1
        led.plot(4, y)
        basic.pause(200)
        led.plot(4, y)
        basic.pause(200)
        basic.clearScreen()
    }
    x = 5
    for (let index = 0; index < 5; index++) {
        x += -1
        led.plot(x, 4)
        basic.pause(200)
        led.plot(x, 4)
        basic.pause(200)
        basic.clearScreen()
    }
})
