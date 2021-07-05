const contactsButton = document.querySelector(".button-write_us");
const contactsPopup = document.querySelector(".write_us");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsForm = contactsPopup.querySelector(".write_us-form");
const contactsName = contactsPopup.querySelector(".write_us-input_name");
const contactsEmail = contactsPopup.querySelector(".write_us-input_email");
const contactsText = contactsPopup.querySelector(".write_us-input_textarea");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("write_us-show");
  contactsName.focus();
});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("write_us-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("write_us-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("write_us-show");
    }
  }
});
