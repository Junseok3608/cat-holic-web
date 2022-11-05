const images = ["cat0001.jpg", "cat0002.jpg", "cat0003.jpg", "cat0004.jpg", "cat0005.jpg", "cat0006.jpg", "cat0007.jpg"];

const pickImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${pickImg}`;

document.body.appendChild(bgImg);
