var cookie_broken = false;

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.key == " ") {
        if (!cookie_broken) {
            document.getElementById("cookie").classList.add("shake");
        }
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.key == " ") {
        if (!cookie_broken) {
            document.getElementById("cookie").classList.remove("shake");
            document.getElementById("cookie").classList.add("invisible");
            cookie_broken = true;
            document.getElementById("broken cookie").classList.remove("invisible");
        } else {
            document.getElementById("broken cookie").classList.add("invisible");
            document.getElementById("cookie").classList.remove("invisible");
            cookie_broken = false;
        }
    }
};
