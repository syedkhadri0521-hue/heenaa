// ===============================
// SCREEN NAVIGATION
// ===============================

const screens =
document.querySelectorAll(".screen");

const nextButtons =
document.querySelectorAll(".next-btn");

const progressBar =
document.getElementById("progressBar");

let currentScreen = 1;

function showScreen(screenId){

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document
        .getElementById(screenId)
        .classList.add("active");

}

function updateProgress(){

    const percentage =
    (currentScreen / 10) * 100;

    progressBar.style.width =
    percentage + "%";

}

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextScreen =
        button.dataset.next;

        currentScreen++;

        updateProgress();

        showScreen(nextScreen);

        createSparkles();

    });

});

updateProgress();


// ===============================
// CURSOR GLOW
// ===============================

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";

});


// ===============================
// ORB INTERACTION
// ===============================

const orb =
document.getElementById("orb");

const orbMessage =
document.getElementById("orbMessage");

if(orb){

    orb.addEventListener("click", () => {

        orbMessage.classList.add("show");

        createHeartBurst();

    });

}


// ===============================
// MEMORY CARD FLIP
// ===============================

const memoryCards =
document.querySelectorAll(".memory-card");

memoryCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flip");

        createHeartBurst();

    });

});


// ===============================
// SECRET VAULT
// ===============================

const checkCodeBtn =
document.getElementById("checkCode");

const secretInput =
document.getElementById("secretInput");

const vaultResult =
document.getElementById("vaultResult");

if(checkCodeBtn){

    checkCodeBtn.addEventListener("click", () => {

        const value =
        secretInput.value.trim().toUpperCase();

        if(value === "HEENAAA"){

            vaultResult.innerHTML =
            "✨ Access Granted Heenaaa ✨";

            vaultResult.style.color =
            "#4ade80";

            createHeartBurst();

        }

        else{

            vaultResult.innerHTML =
            "❌ Wrong Code";

            vaultResult.style.color =
            "#f87171";

        }

    });

}


// ===============================
// QUIZ SECTION
// ===============================

const quizButtons =
document.querySelectorAll(".quiz-btn");

const quizResult =
document.getElementById("quizResult");

quizButtons.forEach(button => {

    button.addEventListener("click", () => {

        const choice =
        button.textContent;

        quizResult.innerHTML =
        `Nice choice: ${choice} ☕`;

        createHeartBurst();

    });

});


// ===============================
// HEART BURST
// ===============================

function createHeartBurst(){

    for(let i=0;i<12;i++){

        const heart =
        document.createElement("div");

        heart.classList.add(
        "floating-heart");

        heart.innerHTML = "💖";

        heart.style.left =
        Math.random() * window.innerWidth
        + "px";

        heart.style.top =
        Math.random() * window.innerHeight
        + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        },4000);

    }

}


// ===============================
// CLICK ANYWHERE HEART EFFECT
// ===============================

document.addEventListener("click", e => {

    const heart =
    document.createElement("div");

    heart.classList.add(
    "floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    e.clientX + "px";

    heart.style.top =
    e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },3000);

});


// ===============================
// SPARKLE EFFECT
// ===============================

function createSparkles(){

    for(let i=0;i<15;i++){

        const sparkle =
        document.createElement("div");

        sparkle.classList.add(
        "sparkle");

        sparkle.innerHTML = "✨";

        sparkle.style.left =
        Math.random() *
        window.innerWidth + "px";

        sparkle.style.top =
        Math.random() *
        window.innerHeight + "px";

        document.body.appendChild(
        sparkle);

        setTimeout(() => {

            sparkle.remove();

        },1500);

    }

}

// ===================================
// TERMINAL ANIMATION
// ===================================

const terminalLines = [

"> System Started...",

"> Searching For Someone Special...",

"> Match Found ✔",

"> Name: Heenaaa",

"> Analyzing Impact...",

"> Result: More Than Expected",

"> Measuring Importance...",

"> Result: Undefined",

"> Converting Feelings To Code...",

"> Compilation Successful",

"> Thank You For Existing 🌸"

];

let lineIndex = 0;

function typeTerminal(){

    if(!terminal) return;

    if(lineIndex >= terminalLines.length)
    return;

    const line =
    document.createElement("div");

    line.textContent =
    terminalLines[lineIndex];

    terminal.appendChild(line);

    terminal.scrollTop =
    terminal.scrollHeight;

    lineIndex++;

    setTimeout(
        typeTerminal,
        800
    );

}

const screen8 =
document.getElementById("screen8");

if(screen8){

    screen8.addEventListener(
        "click",
        () => {

            if(
                terminal.children.length === 0
            ){

                typeTerminal();

            }

        },
        { once:true }
    );

}


// ===================================
// CONSTELLATION SYSTEM
// ===================================

const stars =
document.querySelectorAll(".star");

const constellationText =
document.getElementById(
"constellationText"
);

let activeStars = 0;

stars.forEach(star => {

    star.addEventListener(
    "click", () => {

        if(
            !star.classList.contains(
            "active")
        ){

            star.classList.add(
            "active"
            );

            activeStars++;

            createHeartBurst();

        }

        if(
            activeStars ===
            stars.length
        ){

            constellationText.innerHTML =
            "✨ HEENAAA ✨";

            createBigCelebration();

        }

    });

});


// ===================================
// BIG CELEBRATION
// ===================================

function createBigCelebration(){

    for(
        let i=0;
        i<60;
        i++
    ){

        const item =
        document.createElement(
        "div"
        );

        item.classList.add(
        "floating-heart"
        );

        const emojis = [

            "💖",
            "✨",
            "🌸",
            "💫",
            "⭐"

        ];

        item.innerHTML =
        emojis[
        Math.floor(
        Math.random() *
        emojis.length
        )
        ];

        item.style.left =
        Math.random() *
        window.innerWidth
        + "px";

        item.style.top =
        window.innerHeight
        + "px";

        item.style.fontSize =
        Math.random() * 20 + 20
        + "px";

        document.body
        .appendChild(item);

        setTimeout(() => {

            item.remove();

        },5000);

    }

}


// ===================================
// RESTART JOURNEY
// ===================================

const restartBtn =
document.getElementById(
"restartBtn"
);

if(restartBtn){

    restartBtn.addEventListener(
    "click", () => {

        location.reload();

    });

}


// ===================================
// SHOOTING STARS
// ===================================

function createShootingStar(){

    const star =
    document.createElement(
    "div"
    );

    star.style.position =
    "fixed";

    star.style.width =
    "120px";

    star.style.height =
    "2px";

    star.style.background =
    "linear-gradient(to right,#fff,transparent)";

    star.style.top =
    Math.random() * 300
    + "px";

    star.style.left =
    "-150px";

    star.style.zIndex =
    "1";

    star.style.opacity =
    ".8";

    star.style.transform =
    "rotate(-20deg)";

    document.body
    .appendChild(star);

    let pos = -150;

    const move =
    setInterval(() => {

        pos += 15;

        star.style.left =
        pos + "px";

        if(
            pos >
            window.innerWidth + 200
        ){

            clearInterval(move);

            star.remove();

        }

    },15);

}

setInterval(
createShootingStar,
5000
);


// ===================================
// AUTO FLOATING PARTICLES
// ===================================

function createParticle(){

    const particle =
    document.createElement(
    "div"
    );

    particle.innerHTML =
    "✨";

    particle.classList.add(
    "sparkle"
    );

    particle.style.left =
    Math.random() *
    window.innerWidth
    + "px";

    particle.style.top =
    window.innerHeight
    + "px";

    particle.style.fontSize =
    Math.random() * 10 + 10
    + "px";

    document.body
    .appendChild(
    particle
    );

    setTimeout(() => {

        particle.remove();

    },3000);

}

setInterval(
createParticle,
1200
);


// ===================================
// WELCOME SURPRISE
// ===================================

setTimeout(() => {

    const popup =
    document.createElement(
    "div"
    );

    popup.style.position =
    "fixed";

    popup.style.top =
    "30px";

    popup.style.right =
    "30px";

    popup.style.padding =
    "15px 25px";

    popup.style.borderRadius =
    "15px";

    popup.style.background =
    "rgba(255,255,255,.12)";

    popup.style.backdropFilter =
    "blur(15px)";

    popup.style.border =
    "1px solid rgba(255,255,255,.15)";

    popup.style.zIndex =
    "99999";

    popup.innerHTML =
    "🌸 Welcome Heenaaa";

    document.body
    .appendChild(
    popup
    );

    setTimeout(() => {

        popup.remove();

    },4000);

},2000);


// ===================================
// BUTTON HOVER SPARKLES
// ===================================

document.querySelectorAll(
"button"
).forEach(button => {

    button.addEventListener(
    "mouseenter", () => {

        for(
            let i=0;
            i<5;
            i++
        ){

            const sparkle =
            document.createElement(
            "div"
            );

            sparkle.innerHTML =
            "✨";

            sparkle.classList.add(
            "sparkle"
            );

            const rect =
            button
            .getBoundingClientRect();

            sparkle.style.left =
            rect.left +
            Math.random() *
            rect.width +
            "px";

            sparkle.style.top =
            rect.top +
            Math.random() *
            rect.height +
            "px";

            document.body
            .appendChild(
            sparkle
            );

            setTimeout(() => {

                sparkle.remove();

            },1500);

        }

    });

});


// ===================================
// FINAL SCREEN EFFECT
// ===================================

const screen10 =
document.getElementById(
"screen10"
);

if(screen10){

    screen10.addEventListener(
    "click", () => {

        createBigCelebration();

    });

}