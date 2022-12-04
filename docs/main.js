const FORTUNES = [
    "Abandon all hope immediately.",
    "Misfortune favors you a whole lot.",
    "By the time you're reading this, it's already too late.",
];

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
            document.getElementById("misfortune").textContent = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
            document.getElementById("message to user").textContent = "Your misfortune has been granted.";
        } else {
            document.getElementById("broken cookie").classList.add("invisible");
            document.getElementById("cookie").classList.remove("invisible");
            cookie_broken = false;
            document.getElementById("message to user").textContent = "Press the spacebar to break me open.";
        }
    }
};
