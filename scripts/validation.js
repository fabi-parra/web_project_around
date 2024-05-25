function toggleButtonState(){};
function showInputError(){};
function hideInputError(){};
function checkInputValidity(){};
function hasInvalidInput(){};

function setEventListeners(formElement, config){
  const inputList = Array.from(formElement.querySelector(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function(){
      checkInputValidity(formElement, config)
    });
  })
};

function enableValidation (config) {
  const formList = Array.from(document.querySelector(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function(e){
      e.preventDefault();
      setEventListeners(formElement, config);
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: "popup__form-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
