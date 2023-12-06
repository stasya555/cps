const link = document.querySelectorAll(".active");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    for (let j = 0; j < link.length; j++) {
      link[j].classList.remove("active--active-link");
    }
    link[i].classList.add("active--active-link");
  });
}


const menu = document.getElementById("menu");
const open = document.getElementById("open");
open.addEventListener("click", () => {
    menu.classList.add("aside-active");
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
    menu.classList.remove("aside-active");
});


document.getElementById("feedback__close").addEventListener("click", () => {
  document.getElementsByClassName("feedback")[0].classList.toggle("feedback--active");
});

let feedback__buttons = document.getElementsByClassName("feedback__button");
for (let i = 0; i < feedback__buttons.length; i++) {
  feedback__buttons[i].addEventListener("click", () => {
    document.getElementsByClassName("feedback")[0].classList.toggle("feedback--active");
  });
}

document.getElementById("phone-call__close").addEventListener("click", () => {
  document.getElementsByClassName("phone-call")[0].classList.toggle("phone-call--active");
});

let phonecall__buttons = document.getElementsByClassName("phone-call__button");
for (let i = 0; i < phonecall__buttons.length; i++) {
  phonecall__buttons[i].addEventListener("click", () => {
    document.getElementsByClassName("phone-call")[0].classList.toggle("phone-call--active");
  });
}


const box = document.querySelectorAll(".main_box");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    for (let j = 0; j < box.length; j++) {
      box[j].classList.remove("main_box--active-link ul li");
    }
    box[i].classList.add("main_box--active-link ul li");
  });
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    850: {
      spaceBetween: 0,
      enabled: false
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});