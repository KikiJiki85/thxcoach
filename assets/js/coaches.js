import setHeaderHandlers from "./header.js";
import setCoachesPickHandler from "./coaches-pick.js";

function init() {
    setHeaderHandlers();
    setCoachesPickHandler();
}

document.addEventListener('DOMContentLoaded', init);