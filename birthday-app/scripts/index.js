function revealSurprise() {
  const heroSection = document.querySelector('.hero-section');
  const mainContent = document.getElementById('main-content');

  // Hide hero section with fade out
  heroSection.style.transition = 'opacity 1s ease-out';
  heroSection.style.opacity = '0';

  // Show main content after hero fades
  setTimeout(() => {
    heroSection.style.display = 'none';
    mainContent.style.display = 'block';
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1s ease-in';

    // Trigger fade in
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, 100);
  }, 1000);
}

function showButtons() {
  const buttonContainer = document.getElementById('animated-buttons');
  buttonContainer.style.display = 'block';
  const buttons = buttonContainer.querySelectorAll('button');
  buttons.forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateY(20px)';
    setTimeout(() => {
      button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    }, index * 200);
  });

  // Show hidden text after clicking "View Gift"
  const hiddenText = document.getElementById('hidden-text');
  hiddenText.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  // Function to create floating gifts and hearts
  function createFloatingElement(type) {
    const element = document.createElement('div');
    element.className = type === 'gift' ? 'floating-gift' : 'floating-heart';
    element.textContent = type === 'gift' ? '🎁' : '❤️';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 1 + 's';
    document.getElementById('floating-elements').appendChild(element);

    // Remove element after animation
    setTimeout(() => {
      element.remove();
    }, 6000);
  }

  // Create floating elements periodically
  setInterval(() => {
    createFloatingElement('gift');
    setTimeout(() => createFloatingElement('heart'), 2000);
  }, 4000);

  // Music toggle functionality
  const musicToggle = document.getElementById('music-toggle');
  const backgroundMusic = document.getElementById('background-music');

  if (musicToggle && backgroundMusic) {
    musicToggle.addEventListener('click', function() {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = '⏸️';
      } else {
        backgroundMusic.pause();
        musicToggle.textContent = '▶️';
      }
    });
  }
});
