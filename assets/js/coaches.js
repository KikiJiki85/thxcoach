import setHeaderHandlers from "./header.js";

function init() {
    const filter = document.querySelectorAll('.coaches-select__fieldset');
    const locationsList = document.querySelectorAll('.coaches-select__list');
    const icon = document.querySelectorAll('.coaches-select__icon');
    const searchField = document.querySelector('.coaches-select__search-input');

    filter.forEach((el, idx) => {
        el.addEventListener('click', () => {
            filter.forEach((element, index) => {
                if (idx !== index) {
                    locationsList[index].classList.remove('coaches-select__list--show');
                    icon[index].classList.remove('coaches-select__icon--rotate');
                    filter[index].classList.remove('coaches-select__fieldset--picked');
                }
            });
            locationsList[idx].classList.toggle('coaches-select__list--show');
            icon[idx].classList.toggle('coaches-select__icon--rotate');
            filter[idx].classList.toggle('coaches-select__fieldset--picked');
        });
    });

    searchField.addEventListener('focus', () => {
        filter.forEach((el, index) => {
            locationsList[index].classList.remove('coaches-select__list--show');
            icon[index].classList.remove('coaches-select__icon--rotate');
            filter[index].classList.remove('coaches-select__fieldset--picked');
        });
    });


    setHeaderHandlers();
}


document.addEventListener('DOMContentLoaded', init);
