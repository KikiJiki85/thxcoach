import setHeaderHandlers from "./header.js";
import setFilterHandlers from "./filter.js";

function init() {
    setHeaderHandlers();
    setFilterHandlers();
}

document.addEventListener('DOMContentLoaded', init);