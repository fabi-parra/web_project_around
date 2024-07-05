export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplate = document.querySelector(".card-template");
    this._card = this._getTemplate();
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._cardTemplate.cloneNode(true).content.querySelector(".card");
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
      console.log("clic en imagen de carta");
      this._handleCardClick(this._link, this._name);
      console.log(this._handleCardClick)
    });
  }

  createCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
