const imgPlay = document.getElementById("playimg");
const inputVolume = document.getElementById("volumeimg");
const mivideo = document.getElementById("mivideo");
const nvideo = document.getElementById("mivideo");

//https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


document.addEventListener('scroll', function () {
    if (isInViewport(mivideo)) {
        if (mivideo.paused) {
            mivideo.play();
            imgPlay.innerText = "play_circle";
        }
    } else {
        if (!mivideo.paused) {
            mivideo.pause();
            inputVolume.innerText = "volume_off"
            mivideo.muted = true;
            imgPlay.innerText = "pause_circle";
        }
    }
}, {
    passive: true
});







function twicePlayPause() {
    if (nvideo.paused) {
        nvideo.play();
        imgPlay.innerText = "play_circle";
        return;
    }
    //En compote de if-else si fico un return surt de la funcio
    nvideo.pause();
    imgPlay.innerText = "pause_circle";
}


function twiceMuteSound() {
    if (nvideo.muted) {
        inputVolume.innerText = "volume_up"
        nvideo.muted = false;
        return;
    }
    inputVolume.innerText = "volume_off"
    nvideo.muted = true;

    console.log(nvideo.muted);
}