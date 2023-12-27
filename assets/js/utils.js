function miniModalHandler(modalElement, overlay) {
    return (evt) => {
        modalElement.classList.toggle('mini-modal--show');
        overlay.classList.toggle('overlay2--show');
    }
}

export { miniModalHandler };