(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
  };
  const toggleModal = () =>
  {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
   for (let i = 0; i < refs.openModalBtns.length; i++) {
     refs.openModalBtns[i].addEventListener("click", toggleModal);
 }
  refs.closeModalBtn.addEventListener("click", toggleModal);
})();