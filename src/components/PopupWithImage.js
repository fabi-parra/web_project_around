import Popup from "./Popup";

export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._title = this._popupElement.querySelector(".popup__subtitle");
  }

  handleOpen(link, name){
    super.handleOpen();
    this._image.src = link;
    this._title.textContent = name;
  }


}