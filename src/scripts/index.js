import "../pages/index.css";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

import PopupWithForm from "./PopupWithForm.js";

const popupProfileForm = document.querySelector(".popup__form_profile");
const inputNameUser = document.querySelector(".popup__form-input_type_name");
const inputAboutUser = document.querySelector(".popup__form-input_type_about");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileEditButton = document.querySelector(".profile__edit-button");

const initialCards = [
  {
    name: "Valparaíso",
    link: "https://i.imgur.com/nwVAJkI.jpg",
    alt: "Fotografía de la playa Las Cruces, en Valparaíso",
  },
  {
    name: "Araucanía",
    link: "https://i.imgur.com/VGFVUW6.jpg",
    alt: "Fotografía de una araucaría, con la cordillera de fondo, en la región de la Araucanía",
  },
  {
    name: "Chaitén",
    link: "https://i.imgur.com/YsE5mUk.jpg",
    alt: "Fotografía de un sendero en un bosque en Chaitén, sur de Chile",
  },
  {
    name: "Atacama",
    link: "https://i.imgur.com/TxPxRfz.jpg",
    alt: "Fotografía del desierto de Atacama, en el norte de Chile",
  },
  {
    name: "Rapanui",
    link: "https://i.imgur.com/JaPHfQA.jpg",
    alt: "Fotografía de una fila de Moais en Isla de Pascua, al atardecer",
  },
  {
    name: "Torres del Paine",
    link: "https://i.imgur.com/WHIZX9k.jpg",
    alt: "Fotografía de un guanaco con las Torres del Paine de fondo, en la patagonia chilena",
  },
];
const cardsSection = document.querySelector(".cards");

const popupCards = document.querySelector("#popup-cards");
const popupCardsForm = document.querySelector(".popup__form_cards");
const addCardsButton = document.querySelector(".profile__add-button");
const inputFormPlaceTitle = document.querySelector(
  ".popup__form-input_type_place"
);
const inputFormPlaceLink = document.querySelector(
  ".popup__form-input_type_link"
);

const popupProfile = new PopupWithForm("#popup-profile", () => {});
popupProfile.setEventListeners();

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
  popupProfile.handleOpen();
});

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
