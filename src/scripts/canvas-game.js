const canvas = document.querySelector(".hero--panel");
const ctx = canvas.getContext("2d");

const dimensions = canvas.getClientRects()["0"];
console.log(dimensions.width, dimensions.height, dimensions["0"]);

canvas.width = dimensions.width;
canvas.height = dimensions.height;

ctx.fillRect(100, 100, 50, 50);