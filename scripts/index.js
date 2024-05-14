const popupProfile = document.querySelector("#popup-profile");
const popupProfileContainer = document.querySelector(".popup__container");
const inputNameUser = document.querySelector(".popup__form-input_type_name");
const inputAboutUser = document.querySelector(".popup__form-input_type_about");
const saveButton = document.querySelector(".popup__form-button");
const closeProfileButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileButton = document.querySelector(".profile__edit-button");

const initialCards = [
  {
    name: "Valparaíso",
    link: "./images/1-card-image-valparaiso.jpeg",
    alt: "Fotografía de la playa Las Cruces, en Valparaíso"
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

function handleOpenPopupProfile (){
  popupProfile.classList.add("popup_open");
};

function handleClosePopupProfile(){
  popupProfile.classList.remove("popup_open");
};

function handleProfileFormSubmit(e){
  e.preventDefault();
  popupProfile.classList.remove("popup_open");
  profileName.textContent = inputNameUser.value;
  profileDescription.textContent = inputAboutUser.value;
};

function createCard (name, link) {
  const card = cardTemplate.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const deleteButton = card.querySelector(".card__icon_type_trash");
  deleteButton.addEventListener("click", function(){
    card.remove();
  });
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  cardsSection.append(card);
};

initialCards.forEach(function(item){
  createCard(item.name, item.link);
});

editProfileButton.addEventListener("click", handleOpenPopupProfile);
closeProfileButton.addEventListener("click", handleClosePopupProfile);
popupProfile.addEventListener("submit", handleProfileFormSubmit);








