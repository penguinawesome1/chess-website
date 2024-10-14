const backgroundColor = localStorage.getItem("background-color");
if (backgroundColor) {
    document.body.classList.remove("light-mode", "dark-mode", "midnight-mode");
    document.body.classList.add(backgroundColor);
}

const backgroundColors = ["light-mode", "dark-mode", "midnight-mode"];
let currentColorIndex = 1;

const btnBackgroundColor = document.getElementById("color-mode");
const currentBg = localStorage.getItem("background-color");
if (currentBg) btnBackgroundColor.textContent = `Background color: ${currentBg.replace("-", " ")}`;

const btnTimerToggle = document.getElementById("timer-toggle");
const currentToggle = localStorage.getItem("timer-toggle");
if (currentToggle) btnTimerToggle.textContent = `Display puzzle timer: ${currentToggle}`;

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                return;
            }
            entry.target.classList.remove("in-view");
        });
    });
    const allAnimatedElements = document.querySelectorAll('.key-wrapper');
    allAnimatedElements.forEach((element) => observer.observe(element));
}); 

document.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
        case "change-username-player1":
            const username1 = prompt("What is your new username?");
            if (username1) localStorage.setItem("username1", username1);
            break;
        case "change-username-player2":
            const username2 = prompt("What is your new username?");
            if (username2) localStorage.setItem("username2", username2);
            break;
        case "change-profile-picture-player1":
            const imageInput1 = document.getElementById('image-input1');
            const file1 = imageInput1.files[0];
            if (file1) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    localStorage.setItem("profile_picture1", event.target.result);
                };
                reader.readAsDataURL(file1);
            }
            break;
        case "change-profile-picture-player2":
            const imageInput2 = document.getElementById('image-input2');
            const file2 = imageInput2.files[0];
            if (file2) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    localStorage.setItem("profile_picture2", event.target.result);
                };
                reader.readAsDataURL(file2);
            }
            break;
        case "color-mode":            
            ++currentColorIndex;
            if (currentColorIndex >= backgroundColors.length) currentColorIndex = 0;
            
            document.body.classList.remove("light-mode", "dark-mode", "midnight-mode");
            const color = backgroundColors[currentColorIndex];
            document.body.classList.add(color);
            const backgroundColorBtn = document.getElementById("color-mode");
            backgroundColorBtn.textContent = `Background color: ${color.replace("-", " ")}`;
            localStorage.setItem("background-color", color);
            break;
        case "timer-toggle":
            if (localStorage.getItem("timer-toggle") === "off") localStorage.setItem("timer-toggle", "on");
            else localStorage.setItem("timer-toggle", "off");
            
            const btnTimerToggle = document.getElementById("timer-toggle");
            const currentToggle = localStorage.getItem("timer-toggle");
            if (currentToggle) btnTimerToggle.textContent = `Display puzzle timer: ${currentToggle}`;
            break;
        case "reset-preferences":
            const confirmed1 = confirm("Are you sure you want to reset preferences?");
            if (confirmed1) {
                localStorage.clear();
                document.body.classList.remove("light-mode", "midnight-mode");
                document.body.classList.add("dark-mode");
                
                const btnBackgroundColor = document.getElementById("color-mode");
                btnBackgroundColor.textContent = "Background color: dark mode";

                const btnTimerToggle = document.getElementById("timer-toggle");
                btnTimerToggle.textContent = "Display puzzle timer: on";
            }
            break;
        case "reset-password":
            const confirmed2 = confirm("Warning: Are you sure you want to reset your password?");
            if (confirmed2) {
                console.log("Reset password!");
            }
            break;
        case "delete-account":
            const confirmed3 = confirm("Warning: This action cannot be undone. Are you sure you want to delete your account?");
            if (confirmed3) {
                console.log("Delete account!");
            }
            break;
        default: break;
    }
});