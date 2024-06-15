function handleEscapeKey(e, popup) {
  if (e.key === "Escape") {
    handleClosePopups(popup);
  }
}

export function handleClickOutside(e) {
  if (e.target.className === "popup popup_open") {
    handleClosePopups(e.target);
  }
}

export function handleOpenPopups(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", (e) => {
    handleEscapeKey(e, popup);
  });
}

export function handleClosePopups(popup) {
  popup.classList.remove("popup_open");
}


