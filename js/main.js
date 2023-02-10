'use strict';

const input = document.getElementById("audioFileInput");
const playButton = document.getElementById("playButton");
let audioUrl;

input.addEventListener("change", function() {
    const file = input.files[0];
    audioUrl = URL.createObjectURL(file);
});

playButton.addEventListener("click", function() {
    const audio = new Audio(audioUrl);
    audio.play();
});
