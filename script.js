const video = document.getElementById('video');

// connect to Webcam and start video
function startVideo() {
    navigator.mediaDevices.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo()