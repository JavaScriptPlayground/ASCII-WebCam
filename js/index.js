import { resizing } from './resizing.js';
import { videoElement } from './video_element.js';

const asciiBackground = document.getElementById('ascii-background');

const imageProcessing = document.createElement('canvas').getContext('2d');

resizing((width, height) => {
    asciiBackground.width = width;
    asciiBackground.height = height;
    console.log(width, height);
})

navigator.mediaDevices.getUserMedia({video: {width: 1280, height: 720}, audio: false}).then((stream) => {
    videoElement.srcObject = stream;
})


function animationLoop() {
    imageProcessing.drawImage(videoElement, 0, 0);

    requestAnimationFrame(animationLoop);
}

animationLoop();
