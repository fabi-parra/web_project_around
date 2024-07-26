export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      userDescription: this._description.textContent,
    };
  }

  setUserInfo(data) {
    console.log(this._name);
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    if (data.avatar) {
      this._avatar.src = data.avatar;
    }
    if (data._id) {
      this._userId = data._id;
    }
  }
}