// Utilizing Web MDN Documentation for MediaDevice getUserMedia functionality:
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

const constraints = {
    audio: true,
    video: { width: 1280, height: 720 }
  };

function startVideo() { navigator.mediaDevices.getUserMedia(constraints)
    .then((mediaStream) => {
      const video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((err) => {
      // always check for errors at the end.
      console.error(`${err.name}: ${err.message}`);
    });
}

startVideo();