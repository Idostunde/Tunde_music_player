
import { musicData } from "./data/data.js";

const musicPlayer = document.getElementById("music-player");
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const volumeSlider = document.getElementById("volume-slider");
const trackName = document.getElementById("track-name");


let track_index = 0

function loadTrack(track){
    musicPlayer.src = `./audio/${musicData[track].path}`
    musicPlayer.load();
}
loadTrack(track_index);

function playSong(){
    musicPlayer.play()
}


function nextSong() {
   
    if (track_index < musicData.length - 1)
      track_index += 1;
    else track_index = 0;
   
    // Load and play the new track
    loadTrack(track_index);
    playSong();
  }
   
  function prevSong() {    
    if (track_index > 0)
      track_index -= 1;
    else track_index = track_list.length - 1;
     
    // Load and play the new track
    loadTrack(track_index);
    playSong();
  }

  //Next Button Event Listener
  nextButton.addEventListener('click', nextSong)
  // Prev Button Event Listener
  prevButton.addEventListener('click', prevSong)

// Play Button Event Listener
playButton.addEventListener("click", playSong);

// Pause Button Event Listener
pauseButton.addEventListener("click", () => {
  musicPlayer.pause();
});

// Volume Slider Event Listener
volumeSlider.addEventListener("input", () => {
  musicPlayer.volume = volumeSlider.value;
});

// Music Player Event Listeners
musicPlayer.addEventListener("play", () => {  
  trackName.textContent = `${musicData[track_index].name}`;  
});



