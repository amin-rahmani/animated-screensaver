// set up our canvas
//gives access to the drawing properties
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.width = width.innerWidth;
const height = canvas.height = height.innerHeight

// function to generate random number
function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function to generate a random RGB color
function randomRGB(){
    return `rgb(${random(0,255)},${random(0,255)})`
}

class Ball {
    constructor(x,y,velX,velY,color,size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
}