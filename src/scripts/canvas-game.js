const canvas = document.querySelector(".hero--panel");
const ctx = canvas.getContext("2d");

const dimensions = canvas.getClientRects()["0"];
console.log(dimensions.width);

canvas.width = dimensions.width;
canvas.height = dimensions.height;

class Rect{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rotation = 0;

        this.isDead = false;
    }
    draw(){
        const translateX = (this.x + this.width) / 2;
        const translateY = (this.y + this.height) / 2;
        
        ctx.save();
        
        ctx.translate(translateX, translateY);
        ctx.rotate(this.rotation);
        
        ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height );
        ctx.restore();
    }
    
    update(){
        const rotationSpeed = 0.00125;
        
        this.rotation += rotationSpeed;
        this.y += 10;
    }

    render(){
        this.draw();
        this.update();
    }
}

addEventListener("click", (e) => {
    const x = e.clientX - canvas.getBoundingClientRect().left;
    const y = e.clientY - canvas.getBoundingClientRect().top;

    // console.log(x, y, objs);

    console.log(x, y);

    objs.forEach((obj) => {
        // Since the object transform alters the x and y coordinates, we need to take that into account.
        // This is achieved by diviging the x and y coordinates by 2, since the object is drawn at half of its width and height.

        if (x > obj.x / 2 && x < (obj.x + obj.width / 2) && 
            y > obj.y / 2 && y < (obj.y + obj.height / 2)) {
                obj.isDead = true;
        }
    })
})

const objs = [];


function drawLines(){
    let x = 100;

    while(x < canvas.width){
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();

        x += 100;
        console.log(x);
    }

}

// Testing
objs.push(new Rect(100, 100, 100, 100));

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objs.filter((obj) => !obj.isDead).forEach((obj) => {

        obj.render();
    })
    requestAnimationFrame(animate);
}

let intervalTime = 2000;
window.setInterval(() => {
    const min = 100;
    const size = 100;
    const max = (Math.round( canvas.width / 100 ) * 200) - 400; // For some reason, rects are placed on half of the max bound (Given when it's divisible by 100) 
    
    const y = -size - 100;
    const x = Math.random() * (max - min) + min; // Random number between 100 and max
    objs.push(new Rect(x, y, size, size));

}, intervalTime)

animate();
// Image Loading function ()
// await Promise.all(
//     Array.from(document.images).map(
//       (image) =>
//         new Promise((resolve) => image.addEventListener("load", resolve)),
//     ),
//   );