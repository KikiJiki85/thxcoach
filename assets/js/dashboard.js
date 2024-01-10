import { miniModalHandler } from "./utils.js";

const setDashboardHandlers = () => {
    const body = document.querySelector('.page__body');
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
    const activityPickedPace = document.querySelector('.activity-picked__pace');
    const activityPickedDuration = document.querySelector('.activity-picked__duration');
    const activityPickedHeartRate = document.querySelector('.activity-picked__heart-rate');
    const activityPickedElevation = document.querySelector('.activity-picked__elevation');

    const calendarModal = document.querySelector('.calendar-modal');
    const calendarModalClose = document.querySelector('.calendar-modal__close');
    const distanceModal = document.querySelector('.distance-modal');
    const distanceModalClose = document.querySelector('.distance-modal__close');
    const paceModal = document.querySelector('.pace-modal');
    const paceModalClose = document.querySelector('.pace-modal__close');
    const durationModal = document.querySelector('.duration-modal');
    const durationModalClose = document.querySelector('.duration-modal__close');
    const heartRateModal = document.querySelector('.heart-rate-modal');
    const heartRateModalClose = document.querySelector('.heart-rate-modal__close');
    const elevationModal = document.querySelector('.elevation-modal');
    const elevationModalClose = document.querySelector('.elevation-modal__close');
    const viewActivityModal = document.querySelector('.view-activity');
    const viewActivityModalClose = document.querySelector('.view-activity__close');

    const servicesVerifyEmail = document.querySelector('.services__verify-email');
    const emailConfirmation = document.querySelector('.email-confirmation');
    const emailConfirmationClose = document.querySelector('.email-confirmation__close');

    const servicesConnectWatch = document.querySelector('.services__connect-watch');
    const connectWatch = document.querySelector('.connect-watch');
    const conncetWatchClose = document.querySelector('.connect-watch__close');

    activityPickedDistance.addEventListener('click', miniModalHandler(distanceModal, overlay2));
    distanceModalClose.addEventListener('click', miniModalHandler(distanceModal, overlay2))
    activityPickedPace.addEventListener('click', miniModalHandler(paceModal, overlay2));
    paceModalClose.addEventListener('click', miniModalHandler(distanceModal, overlay2));
    activityPickedDuration.addEventListener('click', miniModalHandler(durationModal, overlay2));
    durationModalClose.addEventListener('click', miniModalHandler(durationModal, overlay2));
    activityPickedHeartRate.addEventListener('click', miniModalHandler(heartRateModal, overlay2));
    heartRateModalClose.addEventListener('click', miniModalHandler(heartRateModal, overlay2));
    activityPickedElevation.addEventListener('click', miniModalHandler(elevationModal, overlay2));
    elevationModalClose.addEventListener('click', miniModalHandler(elevationModal, overlay2));

    scheduleCalendar.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('schedule__add-activity') || evt.target.classList.contains('schedule__add-icon')) {
            activityModal.classList.toggle('pick-activity-modal--show');
            overlay.classList.toggle('overlay--show');
            body.classList.add('no-scroll');
        }
        if (evt.target.classList.contains('activity__header-wrapper') ||
            evt.target.classList.contains('activity__done') ||
            evt.target.classList.contains('activity__name') ||
            evt.target.classList.contains('activity__icon') ||
            evt.target.classList.contains('activity__stats') ||
            evt.target.classList.contains('activity__stats-text') ||
            evt.target.classList.contains('activity__stats-header')) {
            viewActivityModal.classList.toggle('view-activity--show');
            overlay.classList.toggle('overlay--show');
            body.classList.add('no-scroll');
        }
    });

    activityModalClose.addEventListener('click', () => {
        activityModal.classList.toggle('pick-activity-modal--show');
        overlay.classList.toggle('overlay--show');
        body.classList.remove('no-scroll');
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

    calendarModalClose.addEventListener('click', () => {
        calendarModal.classList.remove('calendar-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

    viewActivityModalClose.addEventListener('click', () => {
        viewActivityModal.classList.remove('view-activity--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('no-scroll');
    });


    servicesVerifyEmail.addEventListener('click', () => {
        emailConfirmation.classList.add('email-confirmation--show');
        overlay.classList.add('overlay--show');
        body.classList.add('no-scroll');
    });

    emailConfirmationClose.addEventListener('click', () => {
        emailConfirmation.classList.remove('email-confirmation--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('no-scroll');
    });

    servicesConnectWatch.addEventListener('click', (evt) => {
        if (!evt.target.classList.contains('services__connect-watch-close') &&
            !evt.target.classList.contains('services__icon-close')) {
            connectWatch.classList.add('connect-watch--show');
            overlay.classList.add('overlay--show');
            body.classList.add('no-scroll');
        }

    });

    conncetWatchClose.addEventListener('click', () => {
        connectWatch.classList.remove('connect-watch--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('no-scroll');
    });

};

export default setDashboardHandlers;