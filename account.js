const elements = document.querySelectorAll('.sliding-text');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
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
            document.cookie = `username1=${username1}; expires=Wed, 11 Jan 2025 23:59:59 GMT; path=/; Secure; SameSite=None`;
            const hi = document.cookie.split("; ").find((row) => row.startsWith("username1="))?.split("=")[1];
            console.log(hi);
            break;
        case "change_username_player2":
            const username2 = prompt("What is your new username?");
            document.cookie = `username2=${username2}; SameSite=None`;
            break;
        case "change_profile_picture":
            break;
        case "change_profile_picture_player2":
            break;
        case "color_mode":
            break;
        case "timer_toggle":
            break;
        case "reset_preferences":
            break;
        case "color_mode":
            break;
        case "timer_toggle":
            break;
        case "reset_preferences":
            break;
        case "reset_preferences":
            break;
        case "reset_preferences":
            break;
        case "reset_password":
            const confirmed = confirm("Warning: This action cannot be undone. Are you sure you want to proceed?");
            if (confirmed) {
                console.log("Reset password!");
            }
            break;
        case "delete_account":
            const confirmed1 = confirm("Warning: This action cannot be undone. Are you sure you want to proceed?");
            if (confirmed1) {
                console.log("Delete account!");
            }
            break;
        default: break;
    }
});