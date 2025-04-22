const canvas = document.querySelector(".hero--panel");
const ctx = canvas.getContext("2d");

const dimensions = canvas.getClientRects()["0"];
console.log(dimensions.width, dimensions.height, dimensions["0"]);

canvas.width = dimensions.width;
canvas.height = dimensions.height;



let rot = 0
;
function draw(){
    ctx.save();
    // let rotateConst = Math.PI / (180 * rot);
    //Rotate on center
    ctx.translate(75, 75);
    ctx.rotate(rot);

    ctx.fillRect(-25,-25, 50, 50);
    ctx.restore();

}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    rot += 0.01;
    requestAnimationFrame(animate);
}

animate();

// const img = new Image();
// img.src = "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";

// ctx.drawImage(img, 0, 0, );

// const images = [
//     {src:"",},
//     {}
// ];

// Image Loading function ()
// await Promise.all(
//     Array.from(document.images).map(
//       (image) =>
//         new Promise((resolve) => image.addEventListener("load", resolve)),
//     ),
//   );