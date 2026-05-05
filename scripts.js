

const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const muteBtn = document.getElementById('muteBtn');
const introVideo = document.getElementById('introVideo');
const videoIntro = document.getElementById('videoIntro');
const mainContent = document.querySelector('main.container');

mainContent.hidden = true;

introVideo.volume = 0;
introVideo.muted = true;

// Play/Pause toggle e icono
playPauseBtn.onclick = () => {
  if (introVideo.paused) {
    introVideo.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    introVideo.muted = false;
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    introVideo.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
};

// Stop video y mostrar contenido
stopBtn.onclick = () => {
  introVideo.pause();
  videoIntro.classList.add('hide');
  setTimeout(() => (videoIntro.style.display = 'none'), 800);
  mainContent.hidden = false;
};

// Mute/Unmute + cambio icono
muteBtn.onclick = () => {
  introVideo.muted = !introVideo.muted;
  muteBtn.innerHTML = introVideo.muted
    ? '<i class="fas fa-volume-mute"></i>'
    : '<i class="fas fa-volume-up"></i>';
};

// Cuando termina el video
introVideo.onended = () => {
  videoIntro.classList.add('hide');
  setTimeout(() => (videoIntro.style.display = 'none'), 800);
  mainContent.hidden = false;
};

// Intentar autoplay mute al cargar
window.onload = () => {
  introVideo.play().catch(() => {});
};
// Cuando video termina
introVideo.onended = () => {
  videoIntro.classList.add('hide');
  setTimeout(() => (videoIntro.style.display = 'none'), 800);
  mainContent.hidden = false;
};

// Intentar autoplay mute al cargar
window.onload = () => {
  introVideo.play().catch(() => {});
};

// Countdown timer
const weddingDate = new Date('2024-12-15T18:00:00').getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days >= 0 ? days.toString().padStart(2, '0') : '00';
  document.getElementById('hours').textContent = hours >= 0 ? hours.toString().padStart(2, '0') : '00';
  document.getElementById('minutes').textContent = minutes >= 0 ? minutes.toString().padStart(2, '0') : '00';
  document.getElementById('seconds').textContent = seconds >= 0 ? seconds.toString().padStart(2, '0') : '00';

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<h3>¡HOY ES EL DÍA! 💒✨</h3>';
  }
}, 1000);

// Formulario RSVP
document.getElementById('rsvpForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por confirmar! 💕 Tu mensaje fue enviado.');
  e.target.reset();
});