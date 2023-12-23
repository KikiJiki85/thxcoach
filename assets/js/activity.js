const activityPick = () => {
    const body = document.querySelector('.page__body');

    const overlay = document.querySelector('.overlay');
    const overlay2 = document.querySelector('.overlay2');
    const notifyButton = document.querySelector('.user-menu__notify');
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

    const notifications = document.querySelector('.notifications');
    const notificationsClose = document.querySelector('.notifications__close');
    const notificationsEdit = document.querySelector('.notifications__edit');
    const notificationsModal = document.querySelector('.notifications-modal');
    const notificationsModalClose = document.querySelector('.notifications-modal__close');

    const servicesVerifyEmail = document.querySelector('.services__verify-email');
    const emailConfirmation = document.querySelector('.email-confirmation');
    const emailConfirmationClose = document.querySelector('.email-confirmation__close');

    const servicesConnectWatch = document.querySelector('.services__connect-watch');
    const connectWatch = document.querySelector('.connect-watch');
    const conncetWatchClose = document.querySelector('.connect-watch__close');

    const pageHeaderBurger = document.querySelector('.page-header__burger');
    const pageHeaderBurgerMobile = document.querySelector('.page-header__burger-mobile');
    const sideMenu = document.querySelector('.side-menu');
    const mainContent = document.querySelector('.main-content');

    const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
    const desktopWidthMediaQuery = window.matchMedia('(min-width: 768px)');


    scheduleCalendar.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('schedule__add-activity') || evt.target.classList.contains('schedule__add-icon')) {
            activityModal.classList.toggle('pick-activity-modal--show');
            overlay.classList.toggle('overlay--show');
            body.classList.add('no-scroll');
        }
        console.log(evt.target)
        if (evt.target.classList.contains('activity__header-wrapper') ||
            evt.target.classList.contains('activity__done') ||
            evt.target.classList.contains('activity__name') ||
            evt.target.classList.contains('activity__icon') ||
            evt.target.classList.contains('activity__stats')) {
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

    activityPickedDistance.addEventListener('click', () => {
        distanceModal.classList.add('mini-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    distanceModalClose.addEventListener('click', () => {
        distanceModal.classList.remove('mini-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

    activityPickedPace.addEventListener('click', () => {
        paceModal.classList.add('mini-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    paceModalClose.addEventListener('click', () => {
        paceModal.classList.remove('mini-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

    activityPickedDuration.addEventListener('click', () => {
        durationModal.classList.add('mini-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    durationModalClose.addEventListener('click', () => {
        durationModal.classList.remove('mini-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

    activityPickedHeartRate.addEventListener('click', () => {
        heartRateModal.classList.add('mini-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    heartRateModalClose.addEventListener('click', () => {
        heartRateModal.classList.remove('mini-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

    activityPickedElevation.addEventListener('click', () => {
        elevationModal.classList.add('mini-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    elevationModalClose.addEventListener('click', () => {
        elevationModal.classList.remove('mini-modal--show');
        overlay2.classList.remove('overlay2--show');
    });

    viewActivityModalClose.addEventListener('click', () => {
        viewActivityModal.classList.remove('view-activity--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('no-scroll');
    });

    notifyButton.addEventListener('click', () => {
        notifications.classList.add('notifications--show');
        overlay.classList.add('overlay--show');
        body.classList.add('no-scroll');
    });

    notificationsClose.addEventListener('click', () => {
        notifications.classList.remove('notifications--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('no-scroll');
    });

    notificationsEdit.addEventListener('click', () => {
        notificationsModal.classList.add('mini-modal--show');
        overlay2.classList.add('overlay2--show');
    });

    notificationsModalClose.addEventListener('click', () => {
        notificationsModal.classList.remove('mini-modal--show');
        overlay2.classList.remove('overlay2--show');
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

    pageHeaderBurger.addEventListener('click', () => {
        sideMenu.classList.toggle('side-menu--show');
        mainContent.classList.toggle('main-content--no-menu');
    });

    pageHeaderBurgerMobile.addEventListener('click', () => {
        sideMenu.classList.toggle('side-menu--show-mobile');
        mainContent.classList.toggle('main-content--menu-mobile');
    });

    mobileWidthMediaQuery.addEventListener('change', () => {
        if (mobileWidthMediaQuery.matches) {
            sideMenu.classList.toggle('side-menu--show');
            mainContent.classList.toggle('main-content--no-menu');
        }
    });

    desktopWidthMediaQuery.addEventListener('change', () => {
        if (desktopWidthMediaQuery.matches) {
            sideMenu.classList.toggle('side-menu--show');
            mainContent.classList.toggle('main-content--no-menu');
        }
    });

    if (mobileWidthMediaQuery.matches) {
        sideMenu.classList.toggle('side-menu--show');
        mainContent.classList.toggle('main-content--no-menu');
    }



};

export default activityPick;