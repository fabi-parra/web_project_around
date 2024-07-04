import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = Array.from(this._formElement.querySelectorAll(".popup__form-input"));
  }
  _getInputValues(){
    this._formValues = {};
    this._inputList.forEach((inputElement) => {
      this._formValues[inputElement.textContent] = this._formValues[inputElement.textContent]
    });
    return this._formValues;
  }

  handleClose(){
    super.handleClose();
    this._formElement.reset();
  }

  setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.handleClose();
    });
  }
}