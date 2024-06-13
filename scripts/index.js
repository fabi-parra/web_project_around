import Card from "../components/Card.js";
// import Validator from "../components/FormValidator.js";

export const popupProfile = document.querySelector("#popup-profile");
export const popupProfileForm = document.querySelector(".popup__form_profile");
export const inputNameUser = document.querySelector(
  ".popup__form-input_type_name"
);
export const inputAboutUser = document.querySelector(
  ".popup__form-input_type_about"
);
export const popupProfileCloseButton = popupProfile.querySelector(
  ".popup__close-button"
);

export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileEditButton = document.querySelector(
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
export const cardsSection = document.querySelector(".cards");

export const popupCards = document.querySelector("#popup-cards");
export const popupCardsForm = document.querySelector(".popup__form_cards");
export const addCardsButton = document.querySelector(".profile__add-button");
export const popupCardsCloseButton = popupCards.querySelector(
  ".popup__close-button"
);
export const inputFormPlaceTitle = document.querySelector(
  ".popup__form-input_type_place"
);
export const inputFormPlaceLink = document.querySelector(
  ".popup__form-input_type_link"
);

export const popupPhoto = document.querySelector("#popup-photo");
export const popupPhotoCloseButton = popupPhoto.querySelector(
  ".popup__close-button"
);
export const popupPhotoImage = document.querySelector(".popup__image");
export const popupPhotoTitle = document.querySelector(".popup__subtitle");

function handleEscapeKey(e, popup) {
  if (e.key === "Escape") {
    handleClosePopups(popup);
  }
}

function handleClickOutside(e) {
  if (e.target.className === "popup popup_open") {
    handleClosePopups(e.target);
  }
}

export function handleOpenPopups(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", (e) => {
    handleEscapeKey(e, popup);
  });
}

function handleClosePopups(popup) {
  popup.classList.remove("popup_open");
}

// function createCard(name, link) {
//   const card = cardTemplate.cloneNode(true).content.querySelector(".card");
//   const cardImage = card.querySelector(".card__image");
//   const cardTitle = card.querySelector(".card__title");
//   const deleteButton = card.querySelector(".card__icon_type_delete");
//   const likeButton = card.querySelector(".card__icon_type_like");
//   deleteButton.addEventListener("click", function () {
//     card.remove();
//   });
//   likeButton.addEventListener("click", function () {
//     likeButton.classList.toggle("card__icon_type_like-active");
//   });

//   cardImage.addEventListener("click", function () {
//     popupPhotoImage.src = link;
//     popupPhotoTitle.textContent = name;
//     handleOpenPopups(popupPhoto);
//   });

//   cardImage.src = link;
//   cardTitle.textContent = name;
//   cardImage.alt = name;
//   return card;
// }

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
