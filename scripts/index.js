import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  handleOpenPopups,
  handleClosePopups,
  handleClickOutside,
} from "./utils.js";

const popupProfile = document.querySelector("#popup-profile");
const popupProfileForm = document.querySelector(".popup__form_profile");
const inputNameUser = document.querySelector(
  ".popup__form-input_type_name"
);
const inputAboutUser = document.querySelector(
  ".popup__form-input_type_about"
);
const popupProfileCloseButton = popupProfile.querySelector(
  ".popup__close-button"
);

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(
  ".profile__description"
);
const profileEditButton = document.querySelector(
  ".profile__edit-button"
);

const initialCards = [
  {
    name: "Valparaíso",
    link: "./images/1-card-image.jpeg",
    alt: "Fotografía de la playa Las Cruces, en Valparaíso",
  },
  {
    name: "Araucanía",
    link: "./images/2-card-image.jpeg",
    alt: "Fotografía de una araucaría, con la cordillera de fondo, en la región de la Araucanía",
  },
  {
    name: "Chaitén",
    link: "./images/3-card-image.jpeg",
    alt: "Fotografía de un sendero en un bosque en Chaitén, sur de Chile",
  },
  {
    name: "Atacama",
    link: "./images/4-card-image.jpeg",
    alt: "Fotografía del desierto de Atacama, en el norte de Chile",
  },
  {
    name: "Rapanui",
    link: "./images/5-card-image.jpeg",
    alt: "Fotografía de una fila de Moais en Isla de Pascua, al atardecer",
  },
  {
    name: "Torres del Paine",
    link: "./images/6-card-image.jpeg",
    alt: "Fotografía de un guanaco con las Torres del Paine de fondo, en la patagonia chilena",
  },
];
export const cardTemplate = document.querySelector(".card-template");
const cardsSection = document.querySelector(".cards");

const popupCards = document.querySelector("#popup-cards");
const popupCardsForm = document.querySelector(".popup__form_cards");
const addCardsButton = document.querySelector(".profile__add-button");
const popupCardsCloseButton = popupCards.querySelector(
  ".popup__close-button"
);
const inputFormPlaceTitle = document.querySelector(
  ".popup__form-input_type_place"
);
const inputFormPlaceLink = document.querySelector(
  ".popup__form-input_type_link"
);

export const popupPhoto = document.querySelector("#popup-photo");
const popupPhotoCloseButton = popupPhoto.querySelector(
  ".popup__close-button"
);
export const popupPhotoImage = document.querySelector(".popup__image");
export const popupPhotoTitle = document.querySelector(".popup__subtitle");

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputNameUser.value;
  profileDescription.textContent = inputAboutUser.value;
  popupProfile.classList.remove("popup_open");
}

function handlePopupCardsSubmit(e) {
  e.preventDefault();
  const newCard = new Card(
    inputFormPlaceTitle.value,
    inputFormPlaceLink.value
  ).createCard();
  handleClosePopups(popupCards);
  cardsSection.prepend(newCard);
}

initialCards.forEach((item) => {
  const initialCard = new Card(item.name, item.link).createCard();
  cardsSection.append(initialCard);
});

inputNameUser.value = profileName.textContent;
inputAboutUser.value = profileDescription.textContent;

profileEditButton.addEventListener("click", () => {
  handleOpenPopups(popupProfile);
  inputNameUser.value = profileName.textContent;
  inputAboutUser.value = profileDescription.textContent;
});

addCardsButton.addEventListener("click", () => {
  handleOpenPopups(popupCards);
});

popupProfileCloseButton.addEventListener("click", () => {
  handleClosePopups(popupProfile);
});

popupCardsCloseButton.addEventListener("click", () => {
  handleClosePopups(popupCards);
});

popupPhotoCloseButton.addEventListener("click", () => {
  handleClosePopups(popupPhoto);
});

popupProfile.addEventListener("click", handleClickOutside);
popupCards.addEventListener("click", handleClickOutside);
popupPhoto.addEventListener("click", handleClickOutside);

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);
popupCardsForm.addEventListener("submit", handlePopupCardsSubmit);

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__form-input_type_error",
  inputErrorMessageClass: "popup__form-error-message",
};

const profileFormValidator = new FormValidator(config, popupProfileForm);
profileFormValidator.enableValidation();
const cardsFormValidator = new FormValidator(config, popupCardsForm);
cardsFormValidator.enableValidation();
