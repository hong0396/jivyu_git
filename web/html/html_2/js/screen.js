'use strict'

// fitvids

$(".post-content").fitVids();

// background

const autoDetectRenderer = PIXI.autoDetectRenderer
const loader = PIXI.loader
const resources = PIXI.loader.resources
const Sprite = PIXI.Sprite
const ParticleContainer = PIXI.particles.ParticleContainer

function random(min, max) {
    return Math.random() * (max - min) + min
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function weightedRangeRandom(...rules) {
    if (rules.length === 0) {
        throw new Error('at least one rule required')
    }
    let weightList = [0]
    for (let rule of rules) {
        let weight = (xs => {
                for (let i in xs) {
            return Number(i)
        }
    })(rule)
        weightList.push(weightList[weightList.length - 1] + weight)
    }
    let result = randomInt(1, weightList[weightList.length - 1])
    for (let i = 0; i < weightList.length; i++) {
        if (result > weightList[i] && result <= weightList[i + 1]) {
            let range = (xs => {
                    for (let i in xs) {
                return xs[i]
            }
        })(rules[i])
            return random(...range)
        }
    }
}

function createFlame(xRange, yRange) {
    let length = weightedRangeRandom({ 30: [10, 30] }, { 5: [30, 50] })
    return {
        x: random(...xRange)
, y: random(...yRange)
, scale: random(1, 3)
        , angle: Math.PI / 180 * random(160, 200)
        , length
        , width: length / random(2, 3)
        , alpha: weightedRangeRandom({ 50: [0.9, 1]}, { 20: [0.5, 0.9] })
        , speed: weightedRangeRandom({ 20: [0.3, 0.6] }, { 100: [0.1, 0.3] })
}
}

function createGraphics(flame) {
    let sprite = new Sprite(resources['images/particle.png'].texture)
    sprite.width = flame.length * flame.scale
    sprite.height = flame.width * flame.scale
    sprite.rotation = flame.angle
    sprite.position.set(flame.x + sprite.width, flame.y)
    sprite.speed = flame.speed
    return sprite
}

function update() {
    let prepareRemove = []
    for (let i = stage.children.length; i--;) {
        let sprite = stage.children[i]
        if (sprite.x > renderer.width + 3 * 50 || sprite.y > renderer.height || sprite.x < 0 || sprite.y < 0 || sprite.alpha <= 0) {
            prepareRemove.push(i)
            continue
        }
        sprite.x += Math.cos(sprite.rotation) * sprite.speed
        sprite.y += Math.sin(sprite.rotation) * sprite.speed
        sprite.alpha += random(-0.03, 0.03)
    }

    for (let i of prepareRemove) {
        stage.removeChildAt(i)
    }

    for (let i = limit - stage.children.length; i > 0; i--) {
        stage.addChild(createGraphics(createFlame([renderer.width, renderer.width + 3 * 50], [0, renderer.height])))
    }

    lastUpdate = Date.now()
}

function animate() {
    requestAnimationFrame(animate)
    update()
    renderer.render(stage)
}

function start() {
    renderer.view.id = 'background'
    document.body.appendChild(renderer.view)

    window.addEventListener('resize', () => {
        let oldWidth = renderer.width
        renderer.resize(window.innerWidth, window.innerHeight)
    limit = Math.floor((renderer.width * renderer.height) / (100 * 100) / 5)
    for (let i = limit - stage.children.length; i > 0; i--) {
        stage.addChild(createGraphics(createFlame([oldWidth, renderer.width], [0, renderer.height])))
    }
})

    for (let i = limit; i--;) {
        stage.addChild(createGraphics(createFlame([0, renderer.width], [0, renderer.height])))
    }

    animate()
}

let renderer = autoDetectRenderer(window.innerWidth, window.innerHeight, {
    antialias: false
    , transparent: false
    , resolution: 1
})
    , stage = new ParticleContainer()
    , limit = Math.floor((renderer.width * renderer.height) / (100 * 100) / 5)
    , lastUpdate = Date.now()

if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    loader
        .add('images/particle.png')
        .load(start)
}
