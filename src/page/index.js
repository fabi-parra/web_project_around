import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
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
  profileAvatarContainer,
  profileAvatarForm,
  config,
} from "../scripts/utils.js";

inputNameUser.value = profileName.textContent;
inputAboutUser.value = profileDescription.textContent;

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "e5108f9c-e4b2-41e4-a072-d45a0c0a8768",
    "Content-Type": "application/json",
  },
});

api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
  api.getInitialCards().then((result) => {
    const cardList = new Section(
      {
        items: result,
        renderer: (item) => {
          const card = new Card(
            item,
            userInfo._userId,
            (cardId) => api.addLike(cardId),
            (cardId) => api.removeLike(cardId),
            popupPhoto.handleOpen,
            () => {
              popupWithConfirmation.handleOpen(item._id);
            }
          );
          const cardElement = card.createCard();
          cardList.addItem(cardElement);
        },
      },
      ".cards"
    );
    cardList.renderItems();
  });
});

const popupCards = new PopupWithForm("#popup-cards", (inputs, onClose) => {
  api.addCard(inputs).then((result) => {
    const newCard = new Card(
      result,
      userInfo._userId,
      (cardId) => api.addLike(cardId),
      (cardId) => api.removeLike(cardId),
      popupPhoto.handleOpen,
      () => {
        popupWithConfirmation.handleOpen(result._id);
      }
    );
    const newCardElement = newCard.createCard();
    cardsSection.prepend(newCardElement);
    popupCards.handleClose;
    onClose();
  });
});
popupCards.setEventListeners();

const popupPhoto = new PopupWithImage("#popup-photo");
popupPhoto.setEventListeners();

const popupProfile = new PopupWithForm("#popup-profile", (inputs, onClose) => {
  api.editProfile(inputs).then((result) => {
    userInfo.setUserInfo(result);
    popupProfile.handleClose();
    onClose();
  });
});
popupProfile.setEventListeners();

const popupAvatarProfile = new PopupWithForm(
  "#popup-avatar-profile",
  (inputs) => {
    api.editAvatarProfile(inputs).then((result) => {
      userInfo.setUserInfo(result);
      popupAvatarProfile.handleClose();
    });
  }
);
popupAvatarProfile.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(
  "#popup-delete-confirmation",
  (cardToDelete) => {
    api.deleteCard(cardToDelete).then(() => {
      popupWithConfirmation.handleClose();
      const card = document.querySelector(`#id_${cardToDelete}`);
      card.remove();
    });
  }
);
popupWithConfirmation.setEventListeners();

profileEditButton.addEventListener("click", () => {
  popupProfile.handleOpen(
    profileName.textContent,
    profileDescription.textContent
  );
  const profileFormValidator = new FormValidator(config, popupProfileForm);
  profileFormValidator.enableValidation();
});

profileAvatarContainer.addEventListener("click", () => {
  popupAvatarProfile.handleOpen();
  const avatarProfileFormValidator = new FormValidator(
    config,
    profileAvatarForm
  );
  avatarProfileFormValidator.enableValidation();
});

addCardsButton.addEventListener("click", () => {
  popupCards.handleOpen();
  const cardsFormValidator = new FormValidator(config, popupCardsForm);
  cardsFormValidator.enableValidation();
});
