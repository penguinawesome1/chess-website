const backgroundColor = localStorage.getItem("background_color");
if (backgroundColor) {
    document.body.classList.remove("light-mode", "dark-mode", "midnight-mode");
    document.body.classList.add(backgroundColor);
}

function updateHistory(pieceType, move, halfTurns) {
    console.log(pieceType);

    if (halfTurns % 2 === 1) {
        pieceType = pieceType.toUpperCase();
        if (pieceType === 'P') pieceType = '';
        const lastBox = historyContainer.children[historyContainer.children.length - 1];
        lastBox.textContent += ` ${pieceType}${move}`;
        return;
    }

    const fills = ["#FFD700", "#259625"],
        colors = ["4px solid #DAA520", "4px solid darkgreen"],
        box = document.createElement("div");

    box.classList.add("container3");
    box.style.backgroundColor = fills[(halfTurns / 2) % colors.length];
    box.style.borderBottom = colors[(halfTurns / 2) % colors.length];
    pieceType = pieceType.toUpperCase();
    if (pieceType === 'P') pieceType = '';
    box.textContent = `${halfTurns/2}. ${pieceType}${move}`;
    historyContainer.appendChild(box);
    historyContainer.scrollTop = historyContainer.scrollHeight;
}

const username1 = document.getElementById("username1");
const username2 = document.getElementById("username2");
const username1New = localStorage.getItem("username1");
const username2New = localStorage.getItem("username2");
if (username1New) username1.textContent = username1New;
if (username2New) username2.textContent = username2New;

const profilePicture1 = document.getElementById("profile_picture1");
const profilePicture2 = document.getElementById("profile_picture2");
const profilePicture1New = localStorage.getItem("profile_picture1");
const profilePicture2New = localStorage.getItem("profile_picture2");
if (profilePicture1New) {
    const image1 = document.createElement("img");
    image1.src = profilePicture1New;
    image1.style.width = "100%";
    image1.style.height = "100%";
    image1.style.objectFit = "cover";
    image1.style.objectPosition = "top center";
    profilePicture1.appendChild(image1);
}
if (profilePicture2New) {
    const image2 = document.createElement("img");
    image2.src = profilePicture2New;
    image2.style.width = "100%";
    image2.style.height = "100%";
    image2.style.objectFit = "cover";
    image2.style.objectPosition = "top center";
    profilePicture2.appendChild(image2);
}

let depth = 6;
document.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
        case "game_mode":
            target.textContent = target.textContent === "Chess" ? "Chess960" : "Chess";
            break;
        case "opponent":
            const btnColor = document.getElementById("color");
            const btnDepth = document.getElementById("depth");
            if (target.textContent === "Player") {
                target.textContent = "Engine";
                btnColor.classList.remove("off");
                btnDepth.classList.remove("off");
            } else {
                target.textContent = "Player";
                btnColor.classList.add("off");
                btnDepth.classList.add("off");
            }
            break;
        case "color":
            target.textContent = target.textContent === "White" ? "Black" : "White";
            break;
        case "depth":
            ++depth;
            if (depth > 6) {
                depth = 1;
            }
            target.textContent = "Depth: " + depth;
            break;
        case "reset":
            setBoard();
            break;
        default: break;
    }
});