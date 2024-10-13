const backgroundColor = localStorage.getItem("background_color");
if (backgroundColor) document.body.classList.add(backgroundColor);