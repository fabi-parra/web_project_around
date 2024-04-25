const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const inputNameUser = document.querySelector(".popup__form-input_type_name");
const inputAboutUser = document.querySelector(".popup__form-input_type_about");
const saveButton = document.querySelector(".popup__form-button");
const closeButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editProfileButton = document.querySelector(".profile__edit-button");

editProfileButton.addEventListener("click", (e)=>{
  popup.classList.add("popup_open");
});

closeButton.addEventListener("click", (e)=>{
  e.preventDefault();
  popup.classList.remove("popup_open");
});

function handleProfileFormSubmit(e){
  e.preventDefault();
  popup.classList.remove("popup_open");
  profileName.textContent = inputNameUser.value;
  profileDescription.textContent = inputAboutUser.value;
};

popup.addEventListener("submit", handleProfileFormSubmit);




