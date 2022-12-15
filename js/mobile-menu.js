(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mobile-open]"),
    closeModalBtn: document.querySelector("[data-mobile-close]"),
    modal: document.querySelector("[data-mobile]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleModal);
  refs.closeMobileBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.mobile.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openMobileBtn: document.querySelector("[data-menu-open]"),
    closeMobileBtn: document.querySelector("[data-menu-close]"),
    mobile: document.querySelector("[data-menu]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleModal);
  refs.closeMobileBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.mobile.classList.toggle("is-hidden");
  }
})();