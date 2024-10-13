const backgroundColor = localStorage.getItem("background_color");
if (backgroundColor) {
    document.body.classList.remove("light-mode", "dark-mode", "midnight-mode");
    document.body.classList.add(backgroundColor);
}