const video = document.getElementById("video");
const openCam = document.getElementById("openCam");

function startCamera() {
    navigator.getUserMedia(
        {
            video: {}
        },
        stream => (video.srcObject = stream),
        err => console.log(err)
    );
}

    startCamera()