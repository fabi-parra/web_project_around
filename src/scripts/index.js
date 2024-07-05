import "../pages/index.css";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";
import {
  popupProfileForm,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileDescription,
  profileEditButton,
  initialCards,
  cardsSection,
  popupCardsForm,
  addCardsButton,
  inputFormPlaceTitle,
  inputFormPlaceLink,
  config,
} from "./utils.js";

inputNameUser.value = profileName.textContent;
inputAboutUser.value = profileDescription.textContent;

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
});

const popupPhoto = new PopupWithImage("#popup-photo");
popupPhoto.setEventListeners();

const popupProfile = new PopupWithForm("#popup-profile", (input) => {
  userInfo.setUserInfo({ name: input.name, description: input.about });
});
popupProfile.setEventListeners();

const popupCards = new PopupWithForm("#popup-cards", () => {
  const newCard = new Card(
    inputFormPlaceTitle.value,
    inputFormPlaceLink.value,
    (link, name) => popupPhoto.handleOpen(link, name)
  ).createCard();
  cardsSection.prepend(newCard);
});
popupCards.setEventListeners();

// initialCards.forEach((item) => {
//   const initialCard = new Card(item.name, item.link, () =>
//     popupPhoto.handleOpen(item.link, item.name)
//   ).createCard();
//   cardsSection.append(initialCard);
// });

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cards = new Card(item.name, item.link, () => {
        popupPhoto.handleOpen(item.link, item.name);
      });
      const cardElement = cards.createCard();

      cardList.addItem(cardElement);
    },
  },
  ".cards"
);

cardList.renderItems();

profileEditButton.addEventListener("click", () => {
  popupProfile.handleOpen(
    profileName.textContent,
    profileDescription.textContent
  );
  const profileFormValidator = new FormValidator(config, popupProfileForm);
  profileFormValidator.enableValidation();
});

addCardsButton.addEventListener("click", () => {
  popupCards.handleOpen();
  const cardsFormValidator = new FormValidator(config, popupCardsForm);
  cardsFormValidator.enableValidation();
});
