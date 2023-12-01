const addActivity = document.querySelectorAll('.schedule__add-activity');
const activityModal = document.querySelector('.type-of-activity-modal');
const activityModalClose = document.querySelector('.type-of-activity-modal__close');
const overlay = document.querySelector('.overlay');

addActivity.forEach(button => {
    button.addEventListener('click', () => {
        activityModal.classList.toggle('type-of-activity-modal--show');
        overlay.classList.toggle('overlay--show');
    });
})

activityModalClose.addEventListener('click', () => {
    activityModal.classList.toggle('type-of-activity-modal--show');
    overlay.classList.toggle('overlay--show');
});