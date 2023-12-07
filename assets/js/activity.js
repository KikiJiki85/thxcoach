const activityPick = () => {
    const overlay = document.querySelector('.overlay');
    const addActivity = document.querySelectorAll('.schedule__add-activity');
    const activityModal = document.querySelector('.pick-activity-modal');
    const activityModalClose = document.querySelector('.pick-activity-modal__close');
    const activityModalContinue = document.querySelector('.pick-activity-modal__continue');

    const activityPicked = document.querySelector('.activity-picked');
    const activityPickedBack = document.querySelector('.activity-picked__back');

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

    activityModalContinue.addEventListener('click', () => {
        activityPicked.classList.add('activity-picked--show');
    });

    activityPickedBack.addEventListener('click', () => {
        activityPicked.classList.remove('activity-picked--show');
    });

};

export default activityPick;