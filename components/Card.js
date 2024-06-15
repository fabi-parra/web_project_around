import {
  cardTemplate,
  popupPhoto,
  popupPhotoImage,
  popupPhotoTitle,
} from "../scripts/index.js";

import { handleOpenPopups } from "../scripts/utils.js";

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this._getTemplate();
  }

  _getTemplate() {
    return cardTemplate.cloneNode(true).content.querySelector(".card");
  }

  _setProperties() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardTitle = this._card.querySelector(".card__title");
    this._likeButton = this._card.querySelector(".card__icon_type_like");
    this._deleteButton = this._card.querySelector(".card__icon_type_delete");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
  }

  _handlelikeCard() {
    this._likeButton.classList.toggle("card__icon_type_like-active");
  }

  _handleDeleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handlelikeCard();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      handleOpenPopups(popupPhoto);
      popupPhotoImage.src = this._link;
      popupPhotoTitle.textContent = this._name;
    });
  }

  createCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
