const setFilterHandlers = () => {
    const filter = document.querySelectorAll('.coaches-select__fieldset');
    const locationsList = document.querySelectorAll('.coaches-select__filter-list');
    const icon = document.querySelectorAll('.coaches-select__icon');
    const searchField = document.querySelector('.coaches-select__search-input');

    filter.forEach((el, idx) => {
        el.addEventListener('click', () => {
            filter.forEach((element, index) => {
                if (idx !== index) {
                    locationsList[index].classList.remove('coaches-select__filter-list--show');
                    icon[index].classList.remove('coaches-select__icon--rotate');
                    filter[index].classList.remove('coaches-select__fieldset--picked');
                }
            });
            locationsList[idx].classList.toggle('coaches-select__filter-list--show');
            icon[idx].classList.toggle('coaches-select__icon--rotate');
            filter[idx].classList.toggle('coaches-select__fieldset--picked');
        });
    });

    searchField.addEventListener('focus', () => {
        filter.forEach((el, index) => {
            locationsList[index].classList.remove('coaches-select__filter-list--show');
            icon[index].classList.remove('coaches-select__icon--rotate');
            filter[index].classList.remove('coaches-select__fieldset--picked');
        });
    });
}

export default setFilterHandlers;



