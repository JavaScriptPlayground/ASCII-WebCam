const videoElement = document.createElement('video');

videoElement.setAttribute('autoplay', true);
videoElement.classList.add('video-processing')

document.body.appendChild(videoElement)

export { videoElement }
