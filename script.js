var rain = new Howl({
    src: 'rain.mp3',
    volume: 0.2
})

var bigThunder = new Howl({
    src: 'thunder_start.mp3',
    volume: 0.5
})

function playBigThunder() {
    // console.log('big thunder')
    bigThunder.play()
}

var thunder = new Howl({
    src: ['thunder_sprites.mp3'],
    sprite: {
        a: [0, 8000],
        b: [8000, 16000],
        c: [16000, 24000],
        d: [24000, 32000]
    },
    volume: 0.5
})

function playRandomThund() {
    // console.log('random')
    var index = Math.floor(Math.random() * 4)
    var sprite = 'abcd'[index]
    thunder.play(sprite)
}


var body = document.body

function flashOn() {
    // console.log('flashing on')
    body.style.background = 'white'
    // var tree = document.getElementById('trees')
    // tree.style.color = '#142F44'

    setTimeout(flashOff, 10)

    if (Math.random() < 0.75) {
        setTimeout(flashOn, 50 + Math.random() * 450)
    }
}

function flashOff() {
    // console.log('flashing off')
    body.style.background = 'midnightblue'
}

var firstClick = true

function click() {
    // console.log('clicking')
    flashOn()

    if (firstClick) {
        rain.play()
        firstClick = false

        setTimeout(playBigThunder, 1000)
    } else {
        var delay = 2000 + Math.floor(Math.random() * 3000)
        setTimeout(playRandomThund, delay)
    }
}

window.addEventListener('click', click)