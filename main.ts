let valor = 0
input.onButtonPressed(Button.A, function () {
    valor = randint(1, 6)
    if (valor == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (valor == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (valor == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    if (valor == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (valor == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (valor == 6) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . # # . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
