/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu Show */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* Menu Hidden */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  
  // Insert your service ID, template ID, and public key in the placeholders below
  const serviceID = 'service_bcfiq8o';
  const templateID = 'template_kuj34cq';
  const publicKey = 'T5O3gGhcMxIAMfptg';
  
  emailjs.sendForm(serviceID, templateID, '#contact-form', publicKey)
    .then(() => {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully';
      
      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
      
      // Clear input fields
      contactForm.reset();
    }, () => {
      // Show error message
      contactMessage.textContent = 'Message not sent (service error)';
    });
};

contactForm.addEventListener('submit', sendEmail);



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration:2500,
  delay:400,
})
sr.reveal(`.home__data, .experiance, .skills, .contact__container`)
sr.reveal(`.home__img`,{delay:600})
sr.reveal(`.home__scroll`,{delay:800})
sr.reveal(`.work__card, .services__card`,{interval:100})
sr.reveal(`.about__content`,{origin:'right'})
sr.reveal(`.about__img`,{origin:'left'})