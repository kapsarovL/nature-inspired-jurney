const forestSound = document.getElementById('forest-sound');
const riverSound = document.getElementById('river-sound');
const summitSound = document.getElementById('summit-sound');

let soundsPlaying = false;

function playSound(audio) {
    if (!soundsPlaying) return;
    forestSound.pause();
    riverSound.pause();
    summitSound.pause();
    audio.play();
}

function toggleSound() {
    soundsPlaying = !soundsPlaying;
    if (!soundsPlaying) {
        forestSound.pause();
        riverSound.pause();
        summitSound.pause();
    } else {
        playSound(forestSound); // Start with the first section sound
    }
}

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const forestSection = document.getElementById('forest').offsetTop;
    const riverSection = document.getElementById('river').offsetTop;
    const summitSection = document.getElementById('summit').offsetTop;

    if (scrollPosition >= forestSection && scrollPosition < riverSection) {
        playSound(forestSound);
    } else if (scrollPosition >= riverSection && scrollPosition < summitSection) {
        playSound(riverSound);
    } else if (scrollPosition >= summitSection) {
        playSound(summitSound);
    }
});



document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200, // Animation duration in milliseconds
    });
});
