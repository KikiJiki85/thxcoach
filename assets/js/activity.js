const activityPick = () => {
    const overlay = document.querySelector('.overlay');
    const overlay2 = document.querySelector('.overlay2');
    const scheduleCalendar = document.querySelector('.schedule__calendar');
    const activityModal = document.querySelector('.pick-activity-modal');
    const activityModalClose = document.querySelector('.pick-activity-modal__close');
    const activityModalContinue = document.querySelector('.pick-activity-modal__continue');

    const activityPicked = document.querySelector('.activity-picked');
    const activityPickedBack = document.querySelector('.activity-picked__back');
    const activityPickedCalendar = document.querySelector('.activity-picked__calendar');
    const activityPickedDistance = document.querySelector('.activity-picked__distance');

    const calendarModal = document.querySelector('.calendar-modal');
    const calendarModalClose = document.querySelector('.calendar-modal__close');

    const distanceModal = document.querySelector('.distance-modal');
    const distanceModalClose = document.querySelector('.distance-modal__close');

    scheduleCalendar.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('schedule__add-activity') || evt.target.classList.contains('schedule__add-icon')) {
            activityModal.classList.toggle('pick-activity-modal--show');
            overlay.classList.toggle('overlay--show');
        }
    });

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

    activityPickedCalendar.addEventListener('click', () => {
        calendarModal.classList.add('calendar-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    activityPickedDistance.addEventListener('click', () => {
        distanceModal.classList.add('distance-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    distanceModalClose.addEventListener('click', () => {
        distanceModal.classList.remove('distance-modal--show');
        overlay2.classList.remove('overlay2--show');
    });



    calendarModalClose.addEventListener('click', () => {
        calendarModal.classList.remove('calendar-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

};

export default activityPick;