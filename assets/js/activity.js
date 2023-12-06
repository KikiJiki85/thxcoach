const activityPick = () => {
    const addActivity = document.querySelectorAll('.schedule__add-activity');
    const activityModal = document.querySelector('.pick-activity-modal');
    const activityModalClose = document.querySelector('.pick-activity-modal__close');
    const activityModalButtonContinue = document.querySelector('.pick-activity-modal__continue');
    const overlay = document.querySelector('.overlay');

    addActivity.forEach(button => {
        button.addEventListener('click', () => {
            activityModal.classList.toggle('pick-activity-modal--show');
            overlay.classList.toggle('overlay--show');
        });
    })

    activityModalClose.addEventListener('click', () => {
        activityModal.classList.toggle('pick-activity-modal--show');
        overlay.classList.toggle('overlay--show');
    });

    activityModalButtonContinue.addEventListener('click', () => {

    });

};

export default activityPick;