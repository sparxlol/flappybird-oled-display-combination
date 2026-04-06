input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 101; index++) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(100)
    }
})
let Pos = 0
let sprite: game.LedSprite = null
OLED.init(128, 64)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    for (let index = 0; index < 2000; index++) {
        Pos += 1
        OLED.drawLine(
        0,
        Pos + 2,
        Pos + 3,
        Pos + 11
        )
        OLED.drawRectangle(
        Pos + 11,
        Pos + 2,
        Pos + 10,
        Pos + 21
        )
    }
    OLED.clear()
})
