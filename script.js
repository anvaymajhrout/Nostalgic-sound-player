const audio = document.querySelector("audio");

// Example: Add custom play/pause buttons
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});


document.addEventListener("DOMContentLoaded", () => {
    // Function to get a random integer between min (inclusive) and max (inclusive)
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Get the audio element and its source element
    const audioPlayer = document.getElementById('audioPlayer');
    const sourceElement = audioPlayer.querySelector('source');

    if (!audioPlayer || !sourceElement) {
        console.error('Audio player or source element not found');
        return;
    }

    // Select a random audio file between 1 and 10
    const randomAudioNumber = getRandomInt(1, 10);
    const randomAudioFile = `audios/audio${randomAudioNumber}.mp3`;

    // Update the source element and load the new audio
    sourceElement.src = randomAudioFile;
    audioPlayer.load();

    // Optional: log the selected audio file for debugging purposes
    console.log(`Loaded random audio file: ${randomAudioFile}`);
});


