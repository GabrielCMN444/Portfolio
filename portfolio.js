// Chuva
const canvas = document.getElementById('rain');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const drops = [];
  for (let i = 0; i < (w < 768 ? 90 : 160); i++) {
    drops.push({
      x: Math.random() * w,
      y: Math.random() * h - h,
      length: Math.random() * 22 + 10,
      speed: Math.random() * 14 + 7
    });
  }

  function animateRain() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.38;

    drops.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.length);
      ctx.stroke();
      d.y += d.speed;
      if (d.y > h) {
        d.y = -d.length;
        d.x = Math.random() * w;
      }
    });
    requestAnimationFrame(animateRain);
  }
  animateRain();

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });
}

const player = document.getElementById('jazz-player');
const audio = document.getElementById('audio');

if (player && audio) {
  let isPlaying = false;

  player.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      player.classList.remove('playing');
    } else {
      audio.play().catch(() => {});
      player.classList.add('playing');
    }
    isPlaying = !isPlaying;
  });

  audio.volume = 0.70;  // suave
}


// Smooth scroll
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 100; // altura navbar
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});