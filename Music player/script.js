const songs = [{
        name: "song1.mp3",
        title: "Dream",
        artist: "Lost Sky"
    },
    {
        name: "song2.mp3",
        title: "Fade",
        artist: "Alan Walker"
    },
    {
        name: "song3.mp3",
        title: "On & On",
        artist: "Cartoon"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume");
const songList = document.getElementById("song-list");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = `songs/${song.name}`;
}

function playSong() {
    audio.play();
    document.querySelector(".controls button:nth-child(2)").textContent = "⏸️";
}

function pauseSong() {
    audio.pause();
    document.querySelector(".controls button:nth-child(2)").textContent = "▶️";
}

function togglePlay() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function nextSong