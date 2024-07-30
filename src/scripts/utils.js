const popupProfileForm = document.querySelector(".popup__form_profile");
const inputNameUser = document.querySelector(".popup__form-input_type_name");
const inputAboutUser = document.querySelector(".popup__form-input_type_about");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAvatarContainer = document.querySelector(".profile__avatar-container");
const profileAvatarForm = document.querySelector(".popup__form_avatar-profile");

const cardsSection = document.querySelector(".cards");

const popupCardsForm = document.querySelector(".popup__form_cards");
const addCardsButton = document.querySelector(".profile__add-button");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  inputErrorMessageClass: "popup__form-error-message",
};

export {
  popupProfileForm,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileDescription,
  profileAvatarContainer,
  profileEditButton,
  cardsSection,
  popupCardsForm,
  addCardsButton,
  profileAvatarForm,
  config,
};
