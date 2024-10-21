const backgroundColor = localStorage.getItem("background_color");
if (backgroundColor) {
    document.body.classList.remove("light-mode", "dark-mode", "midnight-mode");
    document.body.classList.add(backgroundColor);
}

const rainbowToggle = localStorage.getItem("rainbow_toggle");
if (rainbowToggle === "on") {
    const myRainbowOutlines = document.querySelectorAll(".rainbow-outline");
    myRainbowOutlines.forEach(element => {
        element.classList.toggle("rainbow-outline");
    });
}