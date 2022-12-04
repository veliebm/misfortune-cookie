document.onkeydown = function (e) {
    e = e || window.event;
    console.log("Keypress detected");
    if (e.key == " ") {
        document.getElementById("cookie").classList.add("shake");
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.key == " ") {
        document.getElementById("cookie").classList.remove("shake");
    }
};
