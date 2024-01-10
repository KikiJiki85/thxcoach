const setCoachesPickHandler = () => {

    const locationsArray = [];
    const sportTypeArray = []
    const languageArray = []
    const locationsPick = document.querySelectorAll('.coaches-select__input--location');
    const locationPlaceholder = document.querySelector('.coaches-select__placeholder--location');
    const sportTypePick = document.querySelectorAll('.coaches-select__input--type');
    const sportTypePlaceholder = document.querySelector('.coaches-select__placeholder--type');
    const languagePick = document.querySelectorAll('.coaches-select__input--language');
    const languagePlaceholder = document.querySelector('.coaches-select__placeholder--language');

    const body = document.querySelector('.page__body');
    const overlay = document.querySelector('.overlay');

    const filter = document.querySelectorAll('.coaches-select__fieldset');
    const locationsList = document.querySelectorAll('.coaches-select__filter-list');
    const icon = document.querySelectorAll('.coaches-select__icon');
    const searchField = document.querySelector('.coaches-select__search-input');

    const coachesSelectList = document.querySelector('.coaches-select__list');
    const coachDescription = document.querySelector('.coach-description');
    const coachDescriptionClose = document.querySelector('.coach-description__close');

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

    // Move to utils as a separate punction to unite all three 
    locationsPick.forEach((checkbox) => {
        checkbox.addEventListener('change', (evt) => {
            if(evt.target.checked) locationsArray.push(evt.target.name)
            else {
                const idx = locationsArray.indexOf(evt.target.name);
                if(idx !== -1) locationsArray.splice(idx,1);
            }
            if (locationPlaceholder.textContent === 'Location') {
                locationPlaceholder.textContent = '';
                locationPlaceholder.classList.add('coaches-select__active-color');
            }
            locationPlaceholder.textContent = locationsArray.join(', ');
            if (!locationsArray.length) {
                locationPlaceholder.textContent = 'Location';
                locationPlaceholder.classList.remove('coaches-select__active-color');
            }
        });
    });

    sportTypePick.forEach((checkbox) => {
        checkbox.addEventListener('change', (evt) => {
            if(evt.target.checked) sportTypeArray.push(evt.target.name)
            else {
                const idx = sportTypeArray.indexOf(evt.target.name);
                if(idx !== -1) sportTypeArray.splice(idx,1);
            }
            if (sportTypePlaceholder.textContent === 'Type of sport') {
                sportTypePlaceholder.textContent = '';
                sportTypePlaceholder.classList.add('coaches-select__active-color');
            }
            sportTypePlaceholder.textContent = sportTypeArray.join(', ');

            if (!sportTypeArray.length) {
                sportTypePlaceholder.textContent = 'Type of sport';
                sportTypePlaceholder.classList.remove('coaches-select__active-color');
            }
        });
    });

    languagePick.forEach((checkbox) => {
        checkbox.addEventListener('change', (evt) => {
            if(evt.target.checked) languageArray.push(evt.target.name)
            else {
                const idx = languageArray.indexOf(evt.target.name);
                if(idx !== -1) languageArray.splice(idx,1);
            }
            if (languagePlaceholder.textContent === 'Language') {
                languagePlaceholder.textContent = '';
                languagePlaceholder.classList.add('coaches-select__active-color');
            }

            languagePlaceholder.textContent = languageArray.join(', ');
            if (!languageArray.length) {
                languagePlaceholder.textContent = 'Language';
                languagePlaceholder.classList.remove('coaches-select__active-color');
            }
        });
    });
    // -------------------------

    searchField.addEventListener('focus', () => {
        filter.forEach((el, index) => {
            locationsList[index].classList.remove('coaches-select__filter-list--show');
            icon[index].classList.remove('coaches-select__icon--rotate');
            filter[index].classList.remove('coaches-select__fieldset--picked');
        });
    });

    coachesSelectList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('coach__photo') ||
            evt.target.classList.contains('coaches-select__coach') ||
            evt.target.classList.contains('coach__kind-list') ||
            evt.target.classList.contains('coach__kinds-icon') ||
            evt.target.classList.contains('coach__name') ||
            evt.target.classList.contains('coach__experience') ||
            evt.target.classList.contains('coach__location') ||
            evt.target.classList.contains('coach__text-wrapper')) {
            coachDescription.classList.toggle('coach-description--show');
            overlay.classList.toggle('overlay--show');
            body.classList.add('no-scroll');
        }
    });

    coachDescriptionClose.addEventListener('click', () => {
        coachDescription.classList.toggle('coach-description--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('no-scroll');
    });

}

export default setCoachesPickHandler;



