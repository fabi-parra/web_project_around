function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

function hasInvalidInput(inputList) {
  console.log("ejecutando hasInvalidInput");
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function showInputError(formElement, inputElement, errorMessage, config) {
  console.log("ejecutando showInputError");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.inputErrorMessageClass);
  errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement, config) {
  console.log("ejecutando hideInputError");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.inputErrorMessageClass);
  errorElement.textContent = " ";
}

function checkInputValidity(formElement, inputElement, config) {
  console.log("ejecutando checkinputValidity");
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  };
}

function setEventListeners(formElement, config) {
  console.log("ejecutando setEventListeners");
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}

function enableValidation(config) {
  console.log("ejecutando enableValidation");
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    });
    setEventListeners(formElement, config);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__form-button",
  inactiveButtonClass: ".popup__form-button_disabled",
  inputErrorClass: ".popup__form-input_type_error",
  inputErrorMessageClass: ".popup__form-error-message",
});
