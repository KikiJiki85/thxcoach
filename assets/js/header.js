import { miniModalHandler } from "./utils.js";

const setHeaderHandlers = () => {
    const body = document.querySelector('.page__body');
    const allModals = document.querySelectorAll('.modal');
    const calendarModal = document.querySelector('.calendar-modal');

    const overlay = document.querySelector('.overlay');
    const overlay2 = document.querySelector('.overlay2');
    const notifyButton = document.querySelector('.user-menu__notify');

    const notifications = document.querySelector('.notifications');
    const notificationsClose = document.querySelector('.notifications__close');
    const notificationsEdit = document.querySelector('.notifications__edit');
    const notificationsModal = document.querySelector('.notifications-modal');
    const notificationsModalClose = document.querySelector('.notifications-modal__close');

    const pageHeader = document.querySelector('.page-header');
    const pageHeaderBurger = document.querySelector('.page-header__burger');
    const pageHeaderBurgerMobile = document.querySelector('.page-header__burger-mobile');
    const sideMenu = document.querySelector('.side-menu');
    const mainContent = document.querySelector('.main-content');

    const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
    const desktopWidthMediaQuery = window.matchMedia('(min-width: 768px)');

    notificationsEdit.addEventListener('click', miniModalHandler(notificationsModal, overlay2));
    notificationsModalClose.addEventListener('click', miniModalHandler(notificationsModal, overlay2));

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

    pageHeaderBurger.addEventListener('click', () => {
        sideMenu.classList.toggle('side-menu--show');
        mainContent.classList.toggle('main-content--no-menu');
        pageHeader.classList.toggle('menu-toggle');
    });

    pageHeaderBurgerMobile.addEventListener('click', () => {
        sideMenu.classList.toggle('side-menu--show-mobile');
        mainContent.classList.toggle('main-content--menu-mobile');
        pageHeader.classList.toggle('menu-toggle');

        calendarModal.classList.toggle('modal__calendar--resize');
        allModals.forEach(el => {
            el.classList.toggle('modal--resize');
        });

    });

    mobileWidthMediaQuery.addEventListener('change', () => {
        if (mobileWidthMediaQuery.matches) {
            sideMenu.classList.toggle('side-menu--show');
            mainContent.classList.toggle('main-content--no-menu');
            pageHeader.classList.remove('menu-toggle');
        }
    });

    desktopWidthMediaQuery.addEventListener('change', () => {
        if (desktopWidthMediaQuery.matches) {
            sideMenu.classList.add('side-menu--show');
            mainContent.classList.remove('main-content--no-menu');
            sideMenu.classList.remove('side-menu--show-mobile');
            mainContent.classList.remove('main-content--menu-mobile');
            pageHeader.classList.add('menu-toggle');
            calendarModal.classList.remove('modal__calendar--resize');
            allModals.forEach(el => {
                el.classList.remove('modal--resize');
            });
        }
    });

    if (mobileWidthMediaQuery.matches) {
        sideMenu.classList.toggle('side-menu--show');
        mainContent.classList.toggle('main-content--no-menu');
        pageHeader.classList.remove('menu-toggle');
    }

    if (desktopWidthMediaQuery.matches) {
        sideMenu.classList.add('side-menu--show');
        mainContent.classList.remove('main-content--no-menu');
        sideMenu.classList.toggle('side-menu--show-mobile');
        mainContent.classList.toggle('main-content--menu-mobile');
        pageHeader.classList.add('menu-toggle');
    }

};

export default setHeaderHandlers;