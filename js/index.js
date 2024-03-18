
function togglePlay() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function hover(element) {
    element.setAttribute('src', 'img/escudo_color.png');
}

function unhover(element) {
    element.setAttribute('src', 'img/escudo.png');
}