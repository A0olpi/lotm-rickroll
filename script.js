// Button logic
const clickMeBtn = document.getElementById('clickMeBtn');
let emojiInterval = null;
clickMeBtn.addEventListener('click', function() {
    document.getElementById('ipadLinkContainer').style.display = 'block';
    clickMeBtn.textContent = '🔮 You revealed the mystery! 🔮';
    clickMeBtn.style.background = '#e0d8c3';
    clickMeBtn.style.color = '#bfa76a';
    clickMeBtn.style.fontSize = '1.3em';
    clickMeBtn.style.boxShadow = '0 4px 16px #000';
    if (!emojiInterval) {
        emojiInterval = setInterval(spawnEmoji, 400);
    }
});

// Flying emoji logic
function spawnEmoji() {
    const emojis = ['🎉', '🎆'];
    const emoji = document.createElement('div');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * 90 + 'vw';
    emoji.style.top = '100vh';
    emoji.style.fontSize = (Math.random() * 2 + 2) + 'em';
    emoji.style.zIndex = 9999;
    emoji.style.pointerEvents = 'none';
    emoji.style.transition = 'transform 2.5s linear, opacity 2.5s linear';
    document.body.appendChild(emoji);
    setTimeout(() => {
        emoji.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
        emoji.style.opacity = '0';
    }, 50);
    setTimeout(() => {
        emoji.remove();
    }, 2600);
}

// Slideshow logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start slideshow
showSlide(currentSlide);
setInterval(nextSlide, 4000);
