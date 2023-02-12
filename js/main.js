'use strict';

const playChrome = document.getElementById("playChrome");
const playEdge = document.getElementById("playEdge");
const playSafari = document.getElementById("playSafari");

const paragraph = document.querySelector('p');

function myPlayAudio(audioUrl) {
    paragraph.textContent = "Playing " + audioUrl + " ...";
    const audio = new Audio(audioUrl);
    audio.play();
}
playChrome.addEventListener("click", function () {
    myPlayAudio("wav/" + playChrome.textContent + ".wav")
});

playEdge.addEventListener("click", function () {
    myPlayAudio("wav/" + playEdge.textContent + ".wav")
});

playSafari.addEventListener("click", function () {
    myPlayAudio("wav/" + playSafari.textContent + ".wav")
});
