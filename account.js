const backgroundColor = localStorage.getItem("background_color");
if (backgroundColor) document.body.style.backgroundColor = backgroundColor;

function setBtnColorTxt() {
    const backgroundColor = localStorage.getItem("background_color");
    const backgroundColorBtn = document.getElementById("color_mode");
    switch (backgroundColor) {
        case "white": backgroundColorBtn.textContent = "White"; break;
        case "#282828": backgroundColorBtn.textContent = "Gray"; break;
        case "black": backgroundColorBtn.textContent = "Black"; break;
        default: break;
    }
}

setBtnColorTxt();

const elements = document.querySelectorAll(".sliding-text");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
        }
    });
});

elements.forEach((element) => {
    observer.observe(element);
});

document.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
        case "change_username_player1":
            const username1 = prompt("What is your new username?");
            localStorage.setItem("username1", username1);
            break;
        case "change_username_player2":
            const username2 = prompt("What is your new username?");
            localStorage.setItem("username2", username2);
            break;
        case "change_profile_picture_player1":
            const link1 = prompt("What is the new link of image for your profile picture?");
            localStorage.setItem("profile_picture1", link1);
            break;
        case "change_profile_picture_player2":
            const link2 = prompt("What is the new link of image for your profile picture?");
            localStorage.setItem("profile_picture2", link2);
            break;
        case "color_mode":
            switch (target.textContent) {
                case "White": localStorage.setItem("background_color", "#282828"); break;
                case "Gray": localStorage.setItem("background_color", "black"); break;
                case "Black": localStorage.setItem("background_color", "white"); break;
            }
            setBtnColorTxt();
            document.body.style.backgroundColor = localStorage.getItem("background_color");
            break;
        case "timer_toggle":
            break;
        case "color_mode":
            break;
        case "timer_toggle":
            break
        case "reset_preferences":
            const confirmed1 = confirm("Are you sure you want to reset preferences?");
            if (confirmed1) {
                localStorage.clear();
                document.body.style.backgroundColor = "#282828";
                const backgroundColorBtn = document.getElementById("color_mode");
                backgroundColorBtn.textContent = "Gray";
            }
            break;
        case "reset_password":
            const confirmed2 = confirm("Warning: Are you sure you want to reset your password?");
            if (confirmed2) {
                console.log("Reset password!");
            }
            break;
        case "delete_account":
            const confirmed3 = confirm("Warning: This action cannot be undone. Are you sure you want to delete your account?");
            if (confirmed3) {
                console.log("Delete account!");
            }
            break;
        default: break;
    }
});
