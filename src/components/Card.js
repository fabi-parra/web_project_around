export default class Card {
  constructor(cardData, userId, handleLikeCard, handleUnlikeCard, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardTemplate = document.querySelector(".card-template");
    this._card = this._getTemplate();
    this._handleLikeCard = handleLikeCard;
    this._handleUnlikeCard = handleUnlikeCard;
    this._handleCardClick = handleCardClick;
    this._likes = cardData.likes;
    this._userId = userId;
    this._cardId = cardData._id;
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
    if (this._likes.some(item => item._id === this._userId)){
      this._likeButton.classList.toggle("card__icon_type_like-active");
    }
  }

  _handleDeleteCard() {
    this._card.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likes.some(item => item._id === this._userId)){
        this._handleUnlikeCard(this._cardId);
        this._likeButton.classList.toggle("card__icon_type_like-active");
      } else {
        this._handleLikeCard(this._cardId);
        this._likeButton.classList.toggle("card__icon_type_like-active");
      }
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }

  createCard() {
    this._setProperties();
    this._setEventListeners();
    return this._card;
  }
}
