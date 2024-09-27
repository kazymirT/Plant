/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

const toggleMenu = () => {
  navMenu.classList.toggle('left-[0]');
  hamburger.classList.toggle('ri-close-large-line');
};

hamburger.addEventListener('click', toggleMenu);

navLinks.forEach((link) => link.addEventListener('click', toggleMenu));

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.querySelector('#scroll-up');

  if (window.scrollY >= 250) {
    scrollUpBtn.classList.remove('-bottom-1/2');
    scrollUpBtn.classList.add('bottom-4');
  } else {
    scrollUpBtn.classList.add('-bottom-1/2');
    scrollUpBtn.classList.remove('bottom-4');
  }
};
window.addEventListener('scroll', scrollUp);
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.querySelector('#navbar');

  if (window.scrollY >= 50) {
    header.classList.add('border-b', 'border-yellow-500');
  } else {
    header.classList.remove('border-b', 'border-yellow-500');
  }
};
window.addEventListener('scroll', scrollHeader);
/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');

    if (link.href.includes(current)) {
      link.classList.add('active');
    }
  });
};
window.addEventListener('scroll', activeLink);
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
