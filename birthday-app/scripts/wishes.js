document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.wish-section');
  let currentSection = 0;

  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  function showNextSection() {
    if (currentSection < sections.length) {
      const section = sections[currentSection];
      section.classList.add('visible');

      // Get all paragraphs in this section
      const paragraphs = section.querySelectorAll('p');
      let paraIndex = 0;

      function typeNextParagraph() {
        if (paraIndex < paragraphs.length) {
          const originalText = paragraphs[paraIndex].textContent;
          typeWriter(paragraphs[paraIndex], originalText, 50);
          paraIndex++;
          setTimeout(typeNextParagraph, originalText.length * 50 + 1000); // Wait for typing + 1 second
        } else {
          // Move to next section after all paragraphs are typed
          currentSection++;
          setTimeout(showNextSection, 2000); // Wait 2 seconds before next section
        }
      }

      typeNextParagraph();
    }
  }

  // Start showing sections
  showNextSection();

  // Floating hearts animation
  function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('floating-hearts').appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }

  // Create hearts periodically
  setInterval(createFloatingHeart, 2000);
});
