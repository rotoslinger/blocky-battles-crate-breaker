namespace SpriteKind {
    export const store_block = SpriteKind.create()
    export const coin = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.vy > 0) {
        mySprite.vy = -110
        otherSprite.destroy()
    } else {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.store_block, function (sprite, otherSprite) {
    if (mySprite.vy < 0) {
        if (Math.percentChance(50)) {
            mySprite4 = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Food)
            mySprite4.setPosition(otherSprite.x, otherSprite.y - 3)
        } else {
            mySprite4 = sprites.create(img`
. . b b b . . 
. b 5 5 5 b . 
b 5 d 3 d 5 b 
b 5 3 5 1 5 b 
c 5 3 5 1 5 c 
c 5 5 1 1 d c 
a d d 1 d d a 
. f d d d f . 
. . f f f . . 
`, SpriteKind.coin)
            mySprite4.setPosition(otherSprite.x, otherSprite.y)
        }
        otherSprite.destroy()
    }
})
let mySprite4: Sprite = null
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Enemy)
mySprite = sprites.create(img`
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
`, SpriteKind.Player)
let mySprite3 = sprites.create(img`
f f f f f f f f f f f f f f f f f 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
f f f f f f f f f f f f f f f f f 
`, SpriteKind.store_block)
mySprite2.setPosition(40, 104)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite3.setPosition(75, 69)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
info.setLife(3)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
forever(function () {
    pause(2000)
    mySprite3 = sprites.create(img`
f f f f f f f f f f f f f f f f f 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
e e f e e f e e f e e f e e f e e 
f f f f f f f f f f f f f f f f f 
`, SpriteKind.store_block)
    mySprite3.setPosition(Math.randomRange(0, 155), 69)
})
forever(function () {
    blockSettings.writeNumber("high score", info.highScore())
})
