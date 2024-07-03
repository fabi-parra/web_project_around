export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );
  }

  handleOpen() {
    this._popupElement.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscapeKey);
  }

  handleClose() {
    this._popupElement.classList.remove("popup_open");
  }

  _handleEscapeKey(e) {
    if (e.key === "Escape") {
      this.handleClose();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.handleClose();
    });
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.className === "popup popup_open") {
        this.handleClose();
      }
    });
  }
}

