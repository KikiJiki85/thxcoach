import setHeaderHandlers from "./header.js";

function init() {
    const filter = document.querySelectorAll('.coaches-select__fieldset');
    const locationsList = document.querySelectorAll('.coaches-select__list');
    const icon = document.querySelectorAll('.coaches-select__icon');
    console.log(filter)
    filter.forEach((el, idx) => {
        el.addEventListener('click', () => {
            locationsList[idx].classList.toggle('coaches-select__list--show');
            icon[idx].classList.toggle('coaches-select__icon--rotate');
            filter[idx].classList.toggle('coaches-select__fieldset--picked');
            console.log('click');
        });
    });


    setHeaderHandlers();
}


document.addEventListener('DOMContentLoaded', init);
