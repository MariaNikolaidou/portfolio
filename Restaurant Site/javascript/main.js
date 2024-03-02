let fadeInLeftExecuted = false;

function fadeInLeftOnScroll() {
  const sections = document.querySelectorAll('.section-container');

  sections.forEach(section => {
    if (!fadeInLeftExecuted && isElementInViewport(section)) {
      section.style.opacity = '1';
      section.classList.add('animate__animated', 'animate__fadeInLeft');
      fadeInLeftExecuted = true;
    }
  });
}

window.addEventListener('scroll', fadeInLeftOnScroll);

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
  fadeInLeftOnScroll();
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section-container');

  sections.forEach(section => {
    new Waypoint({
      element: section,
      handler: function (direction) {
        if (direction === 'down') {
          section.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
        }
      },
      offset: '80%', 
    });

    new Waypoint({
      element: section,
      handler: function (direction) {
        if (direction === 'up') {
          section.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
        }
      },
      offset: '100%', 
    });
  });
});


//Κώδικας για το scroll-to-top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
