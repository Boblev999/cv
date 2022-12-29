var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');
var notAutoPlayed = true;

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else {
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

document.body.title = "Click anywhere to enable music";

document.body.addEventListener("click", function () {
    if (notAutoPlayed && track.paused) {
		track.play();
		controlBtn.className = "pause";
		notAutoPlayed = false;
		document.body.removeAttribute("title");
    }
});