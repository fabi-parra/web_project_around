const popupProfile = document.querySelector("#popup-profile");
const inputNameUser = document.querySelector(".popup__form-input_type_name");
const inputAboutUser = document.querySelector(".popup__form-input_type_about");
const popupProfileCloseButton = popupProfile.querySelector(
  ".popup__close-button"
);

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileButton = document.querySelector(".profile__edit-button");

const initialCards = [
  {
    name: "Valparaíso",
    link: "./images/1-card-image-valparaiso.jpeg",
    alt: "Fotografía de la playa Las Cruces, en Valparaíso",
  },
  {
    name: "Araucanía",
    link: "./images/2-card-image-araucania.jpeg",
    alt: "Fotografía de una araucaría, con la cordillera de fondo, en la región de la Araucanía",
  },
  {
    name: "Chaitén",
    link: "./images/3-card-image-chaiten.jpeg",
    alt: "Fotografía de un sendero en un bosque en Chaitén, sur de Chile",
  },
  {
    name: "Atacama",
    link: "./images/4-card-image-atacama.jpeg",
    alt: "Fotografía del desierto de Atacama, en el norte de Chile",
  },
  {
    name: "Rapanui",
    link: "./images/5-card-image-rapanui.jpeg",
    alt: "Fotografía de una fila de Moais en Isla de Pascua, al atardecer",
  },
  {
    name: "Torres del Paine",
    link: "./images/6-card-image-torresdelpaine.jpeg",
    alt: "Fotografía de un guanaco con las Torres del Paine de fondo, en la patagonia chilena",
  },
];
const cardTemplate = document.querySelector(".card-template");
const cardsSection = document.querySelector(".cards");

const popupCards = document.querySelector("#popup-cards");
const popupCardsForm = document.querySelector(".popup__form_cards");
const addCardsButton = document.querySelector(".profile__add-button");
const popupCardsCloseButton = popupCards.querySelector(".popup__close-button");
const inputFormPlaceTitle = document.querySelector(
  ".popup__form-input_type_place"
);
const inputFormPlaceLink = document.querySelector(
  ".popup__form-input_type_link"
);

const popupPhoto = document.querySelector("#popup-photo");
const popupPhotoCloseButton = popupPhoto.querySelector(".popup__close-button");
const popupPhotoImage = document.querySelector(".popup__image");
const popupPhotoTitle = document.querySelector(".popup__subtitle");

function handleOpenPopups(popup) {
  const buttonSave = popup.querySelector(".popup__form-button");
  popup.classList.add("popup_open");
  buttonSave.classList.add("popup__form-button_disabled");
}

function handleClosePopups(popup) {
  popup.classList.remove("popup_open");
}

function createCard(name, link) {
  const card = cardTemplate.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const deleteButton = card.querySelector(".card__icon_type_trash");
  const likeButton = card.querySelector(".card__icon_type_like");
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__icon_type_like-active");
  });

  cardImage.addEventListener("click", function () {
    popupPhotoImage.src = link;
    popupPhotoTitle.textContent = name;
    popupPhoto.classList.add("popup_open");
  });

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = inputNameUser.value;
  profileDescription.textContent = inputAboutUser.value;
  popupProfile.classList.remove("popup_open");
}

function handlePopupCardsSubmit(e) {
  e.preventDefault();
  const newCard = createCard(
    inputFormPlaceTitle.value,
    inputFormPlaceLink.value
  );
  handleClosePopups(popupCards);
  cardsSection.prepend(newCard);
}

initialCards.forEach(function (item) {
  const initialCard = createCard(item.name, item.link);
  cardsSection.append(initialCard);
});

editProfileButton.addEventListener("click", () => {
  handleOpenPopups(popupProfile);
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

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    handleClosePopups(popupCards);
    handleClosePopups(popupPhoto);
    handleClosePopups(popupProfile);
  }
});

popupProfile.addEventListener("click", (e) => {
  if (e.target === popupProfile) {
    handleClosePopups(popupProfile);
  }
});

popupCards.addEventListener("click", (e) => {
  if (e.target === popupCards) {
    handleClosePopups(popupCards);
  }
});

popupPhoto.addEventListener("click", (e) => {
  if (e.target === popupPhoto) {
    handleClosePopups(popupPhoto);
  }
});

popupProfile.addEventListener("submit", handleProfileFormSubmit);
popupCardsForm.addEventListener("submit", handlePopupCardsSubmit);
