import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import {
  popupProfileForm,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileDescription,
  profileEditButton,
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
  avatarSelector: ".profile__image",
});

const popupPhoto = new PopupWithImage("#popup-photo");
popupPhoto.setEventListeners();

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  api.editProfile(inputs).then((result) => {
    userInfo.setUserInfo(result);
    popupProfile.handleClose();
  })
});
popupProfile.setEventListeners();

const popupCards = new PopupWithForm("#popup-cards", (inputs) => {
  console.log(inputs);
  api.addCard(inputs).then((result) => {
    const newCard = new Card(
      result,
      popupPhoto.handleOpen
    ).createCard();
    cardsSection.prepend(newCard);
    popupCards.handleClose
  })
});
popupCards.setEventListeners();

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

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "e5108f9c-e4b2-41e4-a072-d45a0c0a8768",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then((result) => {
  console.log(result)
  const cardList = new Section(
    {
      items: result,
      renderer: (item) => {
        const card = new Card(
          item,
          userInfo._userId,
          () => {
            return api.addLike(item._id); //CREAR
          },
          () => {
            return api.removeLike(item._id); //CREAR remove o deleteLike
          },
          popupPhoto.handleOpen,
        );
        const cardElement = card.createCard();
        cardList.addItem(cardElement);
      },
    },
    ".cards"
  );
  cardList.renderItems();
});

api.getUserInfo().then((result) => {
  console.log(result);
  userInfo.setUserInfo(result);
});
