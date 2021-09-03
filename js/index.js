// * Header Fixed
window.addEventListener("scroll", () => {
  document
    .querySelector(".navbar")
    .classList.toggle("fixed", window.scrollY > 10);
});
// * Navbar
const nav = document.querySelector(".nav-box");
const openBtn = document.querySelector(".menu-bars");

openBtn.addEventListener("click", () => {
  nav.classList.remove("close");
  nav.classList.add("open");
});

const closeBtn = document.querySelector(".menu-close");
closeBtn.addEventListener("click", () => {
  nav.classList.replace("open", "close");
});

const navLinks = document.querySelectorAll(".nav__link");
const navLinks2 = document.querySelectorAll(".footer__nav-link");
navLinks.forEach(navLink =>{
  navLink.addEventListener('click',() => {
      closeNavbox();
  });
})
navLinks2.forEach(navLink =>{
  navLink.addEventListener('click',() => {
      closeNavbox();
  });
})

function closeNavbox() {
  nav.classList.replace("open", "close");
}

// * AOS Js 
AOS.init();

// * Modals
const images = document.querySelectorAll("#portfolio-image");
const overlays = document.querySelectorAll(".portfolio__overlay");
const openImageBtns = document.querySelectorAll(
  "#portfolio__slider-modal--close"
);
const closeImageBtn = document.querySelector("#closeImageBtn");
const portfolioModal = document.querySelector("#portfolio__slider");
let number = 0;
// ? Open Modals Window

// TODO: Swiper Slider Modal Open
overlays.forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    portfolioModal.style.cssText = `
        opacity: 1;
        z-index: 6;
        `;
    if (overlay.previousElementSibling.id == "cross") {
      number = 1;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "omonMeat") {
      number = 2;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "betonext") {
      number = 3;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "elmart") {
      number = 4;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "zarafshan") {
      number = 5;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "ilm-chashmalari") {
      number = 6;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "tescos") {
      number = 7;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "ezaz") {
      number = 8;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "liberty") {
      number = 9;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "limpeza") {
      number = 10;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "wooding") {
      number = 11;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "mfactor") {
      number = 12;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "garden-emira") {
      number = 13;
      changeImage();
    }
    if (overlay.previousElementSibling.id == "saray") {
      number = 14;
      changeImage();
    }
  });
});
// TODO: Main Modal Open
const mainModal = document.querySelector(".main-modal");
const bodyOverlay = document.querySelector(".body__overlay");
window.onload = () => {
  function showMainModal() {
    mainModal.classList.add("showMainModal");
    bodyOverlay.classList.add("body__overlay--on");
  }
  setTimeout(showMainModal, 25000);
};
// TODO: Contact Modal Open
const contactModal = document.querySelector(".contact-modal");
const bodyOverlay2 = document.querySelector(".body__overlay-2");
const contactModalOpenBtn = document.querySelector(".contact__modal-openbtn");
const contactModalOpenBtn2 = document.querySelector(".order-btn");
contactModalOpenBtn.addEventListener("click", () => {
  contactModal.classList.toggle("showContactModal");
  bodyOverlay2.classList.toggle("body__overlay2--on");
});
contactModalOpenBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.classList.toggle("showContactModal");
  bodyOverlay2.classList.toggle("body__overlay2--on");
});
// TODO: Video Modal Open
const videoModal = document.querySelector(".video-modal");
const videoModalOpenBtn = document.querySelector(".video__modal-openbtn");
const bodyOverlay3 = document.querySelector(".body__overlay-3");
videoModalOpenBtn.addEventListener("click", () => {
  videoModal.classList.add("showVideoModal");
  bodyOverlay3.classList.add("body__overlay3-on");
});
// TODO Form Validation Modal Open
const formValidationModal = document.querySelector(".form__validation-modal");
const formValidationModalOpenBtn = document.querySelector(
  ".contact__modal-btn"
);
const bodyOverlay4 = document.querySelector(".body__overlay-4");
const contactModalInput = document.querySelector("#contact__modal-input");
const contactModalInput2 = document.querySelector("#contact__modal-input2");
const contactModalInput3 = document.querySelector("#order__input");
const contactModalInput4 = document.querySelector("#order__input2");
const contactModalInput5 = document.querySelector("#main__modal-input");
const contactModalInput6 = document.querySelector("#main__modal-input2");
const formValidationModalCloseBtnIcon = document.querySelector(
  "#form__validation-modal__closebtn-icon"
);
const formValidationModalText = document.querySelector(
  ".form__validation-modal__text"
);
const formValidationModalOpenBtn2 = document.querySelector(".order__btn");
const formValidationModalOpenBtn3 = document.querySelector(".main__modal--btn");
formValidationModalOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation(contactModalInput, contactModalInput2);
});
formValidationModalOpenBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation(contactModalInput3, contactModalInput4);
});
formValidationModalOpenBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation(contactModalInput5, contactModalInput6);
});

function formValidation(input1, input2) {
  bodyOverlay4.classList.add("body__overlay4-on");
  setTimeout(() => {
    bodyOverlay4.classList.remove("body__overlay4-on");
  }, 2700);
  formValidationModal.classList.add("showFormValidationModal");
  if (input1.value == "" || input2.value == "") {
    formValidationModalCloseBtnIcon.removeAttribute("class");
    formValidationModalCloseBtnIcon.classList.add("fas", "fa-times-circle");
    formValidationModalText.textContent = "Пожалуйста, заполните все поля";
    setTimeout(() => {
      formValidationModal.classList.remove("showFormValidationModal");
    }, 2700);
  } else {
    formValidationModalCloseBtnIcon.removeAttribute("class");
    formValidationModalCloseBtnIcon.classList.add("fas", "fa-check-circle");
    formValidationModalText.textContent = "Успешно отправлен";
    setTimeout(() => {
      formValidationModal.classList.remove("showFormValidationModal");
    }, 2700);
  }
}

// ? Close Modals Window

// TODO: Swiper Slider Modal Close
closeImageBtn.addEventListener("click", () => {
  portfolioModal.style.cssText = `
  opacity: 0;
  z-index: -1;
  `;
});

// TODO: Main Modal Close
const mainModalCloseBtn = document.querySelector(".main__modal-close__btn");
mainModalCloseBtn.addEventListener("click", () => {
  console.log("Close");
  mainModal.classList.remove("showMainModal");
  bodyOverlay.classList.remove("body__overlay--on");
});

// TODO: Contact Modal Close
document
  .querySelector(".contact__modal-close__btn")
  .addEventListener("click", () => {
    contactModal.classList.remove("showContactModal");
    bodyOverlay2.classList.remove("body__overlay2--on");
  });
bodyOverlay2.addEventListener("click", () => {
  contactModal.classList.remove("showContactModal");
  bodyOverlay2.classList.remove("body__overlay2--on");
});

// TODO: Landing Modal
setTimeout(() => {
  document.querySelector(".landing-modal").classList.add("landing-modal-of");
}, 7000);

// TODO: Video Modal Close
const videoModalCloseBtn = document.querySelector(".video__modal-closebtn");
videoModalCloseBtn.addEventListener("click", () => {
  videoModal.classList.remove("showVideoModal");
  bodyOverlay3.classList.remove("body__overlay3-on");
});
bodyOverlay3.addEventListener("click", () => {
  videoModal.classList.remove("showVideoModal");
  bodyOverlay3.classList.remove("body__overlay3-on");
});
// * Change Modal Images
function changeImage() {
  console.log("ishlayabdi");
  let product = crossImgs;
  if (number == 1) {
    product = crossImgs;
  } else if (number == 2) {
    product = omonMeatImgs;
  } else if (number == 3) {
    product = betonextImgs;
  } else if (number == 4) {
    product = elmartImgs;
  } else if (number == 5) {
    product = zarafshanImgs;
  } else if (number == 6) {
    product = ilmChashmalariImgs;
  } else if (number == 7) {
    product = tescosImgs;
  } else if (number == 8) {
    product = ezazImgs;
  } else if (number == 9) {
    product = libertyImgs;
  } else if (number == 10) {
    product = limpezaImgs;
  } else if (number == 11) {
    product = woodingImgs;
  } else if (number == 12) {
    product = mfactorImgs;
  } else if (number == 13) {
    product = gardenEmiraImgs;
  } else if (number == 14) {
    product = sarayImgs;
  }
  let len = product.length;
  document.querySelector(".swiper-wrapper").innerHTML = "";
  for (let index = 0; index < len; index++) {
    let newItem = document.createElement("div");
    newItem.innerHTML = `
        <img src="${product[index]}" class="umidjon" alt="image">
        `;
    newItem.classList.add("swiper-slide");
    newItem.id = "swiper-slide";
    document.querySelector(".swiper-wrapper").appendChild(newItem);
  }
}
changeImage();
