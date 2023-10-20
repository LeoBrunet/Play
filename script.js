var mediaContainer = document.getElementById("mediaContainer");
var mediaVideo = document.getElementById("mediaVideo");
var mediaAudio = document.getElementById("mediaAudio");

function playMedia(mediaType, sourceFile) {
    stopMedia();
    if (mediaType === "video") {
        mediaVideo.style.display = "block";
        mediaVideo.src = sourceFile;
        mediaVideo.play();
    } else if (mediaType === "audio") {
        mediaAudio.style.display = "block";
        mediaAudio.src = sourceFile;
        mediaAudio.play();
    }
    document.getElementById("stop").style.display = "block";
}

function stopMedia() {
    mediaVideo.pause();
    mediaVideo.currentTime = 0;
    mediaVideo.style.display = "none";

    mediaAudio.pause();
    mediaAudio.currentTime = 0;
    mediaAudio.style.display = "none";

    document.getElementById("stop").style.display = "none";
}

document.getElementById("party").addEventListener("click", function () {
    playMedia("video", "party.mp4");
});

document.getElementById("potter").addEventListener("click", function () {
    playMedia("video", "potter.mp4");
});

document.getElementById("birthday").addEventListener("click", function () {
    playMedia("video", "birthday.mp4");
});

document.getElementById("clickMessage").addEventListener("click", function () {
    playMedia("audio", "anniversaire.mp3");
});

document.getElementById("fredStory").addEventListener("click", function () {
    playMedia("audio", "fred.mp3");
});

document.getElementById("lastChristmas").addEventListener("click", function () {
    playMedia("audio", "last_christmas.mp3");
});

document.getElementById("felicita").addEventListener("click", function () {
    playMedia("audio", "felicita.mp3");
});

document.getElementById("stop").addEventListener("click", function () {
    stopMedia();
});
