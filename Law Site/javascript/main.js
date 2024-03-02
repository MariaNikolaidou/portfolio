let fadeInUpExecuted = false;

function fadeInUpOnScroll() {
  const sections = document.querySelectorAll('.section-container, .slider-wrapper');

  sections.forEach(section => {
    if (!fadeInUpExecuted && isElementInViewport(section)) {
      section.style.opacity = '1';
      section.classList.add('animate__animated', 'animate__fadeInUp');
      fadeInUpExecuted = true;
    }
  });
}

window.addEventListener('scroll', fadeInUpOnScroll);

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('DOMContentLoaded', function () {
  fadeInUpOnScroll();
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section-container, .slider-wrapper');

  sections.forEach(section => {
    new Waypoint({
      element: section,
      handler: function (direction) {
        if (direction === 'down') {
          section.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
        }
      },
      offset: '80%', 
    });

    new Waypoint({
      element: section,
      handler: function (direction) {
        if (direction === 'up') {
          section.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
        }
      },
      offset: '100%', 
    });
  });
});
