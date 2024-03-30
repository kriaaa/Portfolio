let menu = document.querySelector('.nav_toggle');
let navbar = document.querySelector('.nav_menu');
let close = document.querySelector('.nav_close');
let nav_link = document.querySelectorAll('.nav_link');
let education_button = document.querySelector(
  '.qualification_education-button'
);
let experience_button = document.querySelector(
  '.qualification_experience-button'
);
let experience_content = document.querySelector(
  '.qualification_experience-content'
);
let education_content = document.querySelector(
  '.qualification_education-content'
);

window.addEventListener('scroll', function () {
  let header = document.querySelector('.header');
  if (this.scrollY >= 80) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});

window.addEventListener('scroll', function () {
  let scrollup = document.querySelector('.scrollup');
  if (this.scrollY >= 560) {
    scrollup.classList.add('show-scroll');
  } else {
    scrollup.classList.remove('show-scroll');
  }
});

education_button.onclick = () => {
  education_button.classList.add('qualification_active');
  experience_button.classList.remove('qualification_active');
  education_content.classList.add('qualification_content-active');
  experience_content.classList.remove('qualification_content-active');
};

experience_button.onclick = () => {
  experience_button.classList.add('qualification_active');
  education_button.classList.remove('qualification_active');
  education_content.classList.remove('qualification_content-active');
  experience_content.classList.add('qualification_content-active');
};

menu.onclick = () => {
  navbar.classList.toggle('show-menu');
};

close.onclick = () => {
  navbar.classList.remove('show-menu');
};

window.onscroll = () => {
  navbar.classList.remove('show-menu');

  let model = document.querySelectorAll('.active-model');

  model.forEach((a) => {
    a.classList.remove('active-model');
  });
};

function toggleHeader(params) {
  let className = '.' + params;
  nav_link.forEach((a) => {
    a.classList.remove('active-link');
  });
  document.querySelector(className).classList.add('active-link');
}

function toggle(number) {
  switch (number) {
    case 1:
      document
        .querySelector('.certification_model1')
        .classList.toggle('active-model');
      break;
    case 2:
      document
        .querySelector('.certification_model2')
        .classList.toggle('active-model');
      break;
    case 3:
      document
        .querySelector('.certification_model3')
        .classList.toggle('active-model');
      break;
    case 4:
      document
        .querySelector('.certification_model4')
        .classList.toggle('active-model');
      break;

    default:
      console.log(number);
      break;
  }
}
