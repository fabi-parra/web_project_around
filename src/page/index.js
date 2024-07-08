import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  // profilePhoto,
  // inputPopupPhotoLink,
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
} from "../scripts/utils.js";

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

// const popupChangeProfilePhoto = new PopupWithForm ("#popup-profile-photo", () => {
//   inputPopupPhotoLink.value = profilePhoto.src;
// })
// popupChangeProfilePhoto.setEventListeners();

// profilePhoto.addEventListener("click", ()=>{
//   popupChangeProfilePhoto.handleOpen();
//   const profilePhotoFormValidator = new FormValidator(config, popupChangeProfilePhoto);
//   profilePhotoFormValidator.enableValidation();
// });
