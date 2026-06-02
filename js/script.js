// ======================================
// SCREEN NAVIGATION
// ======================================

const screens =
document.querySelectorAll(".screen");

const nextButtons =
document.querySelectorAll(".next-btn");

const progressBar =
document.getElementById("progressBar");

let currentScreen = 1;

function showScreen(id){

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document
    .getElementById(id)
    .classList.add("active");

}

function updateProgress(){

    const percentage =
    (currentScreen / 9) * 100;

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


// ======================================
// CURSOR GLOW
// ======================================

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener(
"mousemove",
e => {

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";

});


// ======================================
// STAR REVEAL
// ======================================

const mainStar =
document.getElementById("mainStar");

const starMessage =
document.getElementById("starMessage");

if(mainStar){

    mainStar.addEventListener(
    "click", () => {

        starMessage.classList.add(
        "show"
        );

        createHeartBurst();

    });

}


// ======================================
// HEART REVEAL EFFECT
// ======================================

const heartReveal =
document.querySelector(
".heart-reveal"
);

if(heartReveal){

    heartReveal.addEventListener(
    "click", () => {

        createHeartBurst();

        heartReveal.innerHTML =
        "💖";

    });

}


// ======================================
// MOMENTS CARDS
// ======================================

const momentCards =
document.querySelectorAll(
".moment-card"
);

momentCards.forEach(card => {

    card.addEventListener(
    "click", () => {

        createHeartBurst();

        card.style.transform =
        "translateY(-10px) scale(1.05)";

    });

});


// ======================================
// THOUGHT REVEALS
// ======================================

const thoughtBtn =
document.getElementById(
"thoughtBtn"
);

const thoughtBox =
document.getElementById(
"thoughtBox"
);

const thoughts = [

"I looked forward to your messages.",

"Some days genuinely felt lighter because of you.",

"You inspired more creativity than you know.",

"Some people quietly become important.",

"And somehow, you became one of them."

];

let thoughtIndex = 0;

if(thoughtBtn){

    thoughtBtn.addEventListener(
    "click", () => {

        thoughtBox.innerHTML =
        thoughts[thoughtIndex];

        thoughtIndex++;

        createHeartBurst();

        if(
        thoughtIndex >=
        thoughts.length
        ){

            thoughtIndex = 0;

        }

    });

}


// ======================================
// WAITING SECTION
// ======================================

const waitBtn =
document.getElementById(
"waitBtn"
);

const waitingFill =
document.getElementById(
"waitingFill"
);

const waitingText =
document.getElementById(
"waitingText"
);

let waitingValue = 0;

if(waitBtn){

    waitBtn.addEventListener(
    "click", () => {

        if(waitingValue < 100){

            waitingValue += 20;

            waitingFill.style.width =
            waitingValue + "%";

            waitingText.innerHTML =
            waitingValue + "%";

            createHeartBurst();

        }

        if(waitingValue >= 100){

            waitingText.innerHTML =

            "🌙 Caring about someone isn't a race.";

        }

    });

}


// ======================================
// HEART BURST EFFECT
// ======================================

function createHeartBurst(){

    for(let i=0;i<12;i++){

        const heart =
        document.createElement(
        "div"
        );

        heart.classList.add(
        "floating-heart"
        );

        const icons = [

        "💖",
        "✨",
        "🌸",
        "💫"

        ];

        heart.innerHTML =

        icons[
        Math.floor(
        Math.random() *
        icons.length
        )
        ];

        heart.style.left =

        Math.random() *
        window.innerWidth
        + "px";

        heart.style.top =

        Math.random() *
        window.innerHeight
        + "px";

        heart.style.fontSize =

        Math.random() * 15 + 18
        + "px";

        document.body
        .appendChild(
        heart
        );

        setTimeout(() => {

            heart.remove();

        },4000);

    }

}


// ======================================
// CLICK ANYWHERE EFFECT
// ======================================

document.addEventListener(
"click",
e => {

    const sparkle =
    document.createElement(
    "div"
    );

    sparkle.classList.add(
    "sparkle"
    );

    sparkle.innerHTML = "✨";

    sparkle.style.left =
    e.clientX + "px";

    sparkle.style.top =
    e.clientY + "px";

    document.body
    .appendChild(
    sparkle
    );

    setTimeout(() => {

        sparkle.remove();

    },1500);

});


// ======================================
// RANDOM SPARKLES
// ======================================

function createSparkles(){

    for(let i=0;i<10;i++){

        const sparkle =
        document.createElement(
        "div"
        );

        sparkle.classList.add(
        "sparkle"
        );

        sparkle.innerHTML = "✨";

        sparkle.style.left =
        Math.random() *
        window.innerWidth
        + "px";

        sparkle.style.top =
        Math.random() *
        window.innerHeight
        + "px";

        document.body
        .appendChild(
        sparkle
        );

        setTimeout(() => {

            sparkle.remove();

        },1500);

    }

}

// ======================================
// TERMINAL TYPING EFFECT
// ======================================

const terminal =
document.getElementById("terminal");

const terminalLines = [

"> System Started...",

"> Searching For Something Special...",

"> Analyzing Conversations...",

"> Finding Meaning In Small Moments...",

"> Looking For Inspiration...",

"> Match Found ✔",

"> Name: Heenaaa",

"> Calculating Impact...",

"> Result: More Than Expected",

"> Converting Feelings Into Code...",

"> Building Experience...",

"> Success ✔",

"> Thank You For Existing 🌙"

];

let terminalIndex = 0;

function typeTerminal(){

    if(!terminal) return;

    if(terminalIndex >= terminalLines.length)
    return;

    const line =
    document.createElement("div");

    line.textContent =
    terminalLines[terminalIndex];

    terminal.appendChild(line);

    terminal.scrollTop =
    terminal.scrollHeight;

    terminalIndex++;

    setTimeout(
        typeTerminal,
        900
    );

}

const screen6 =
document.getElementById("screen6");

if(screen6){

    screen6.addEventListener(
    "click",
    () => {

        if(
        terminal.children.length === 0
        ){

            typeTerminal();

        }

    },
    { once:true });

}


// ======================================
// SHOOTING STARS
// ======================================

function createShootingStar(){

    const star =
    document.createElement("div");

    star.classList.add(
    "shooting-star"
    );

    star.style.top =
    Math.random() * 300 + "px";

    star.style.left =
    "-150px";

    document.body
    .appendChild(star);

    let position = -150;

    const animation =
    setInterval(() => {

        position += 15;

        star.style.left =
        position + "px";

        if(
        position >
        window.innerWidth + 200
        ){

            clearInterval(animation);

            star.remove();

        }

    },15);

}

setInterval(
createShootingStar,
5000
);


// ======================================
// WELCOME POPUP
// ======================================

setTimeout(() => {

    const popup =
    document.createElement("div");

    popup.style.position =
    "fixed";

    popup.style.top =
    "20px";

    popup.style.right =
    "20px";

    popup.style.padding =
    "15px 25px";

    popup.style.borderRadius =
    "15px";

    popup.style.background =
    "rgba(255,255,255,.1)";

    popup.style.backdropFilter =
    "blur(15px)";

    popup.style.border =
    "1px solid rgba(255,255,255,.15)";

    popup.style.zIndex =
    "99999";

    popup.innerHTML =
    "🌙 Welcome Heenaaa";

    document.body
    .appendChild(popup);

    setTimeout(() => {

        popup.remove();

    },4000);

},1500);


// ======================================
// AMBIENT PARTICLES
// ======================================

function createParticle(){

    const particle =
    document.createElement("div");

    particle.classList.add(
    "sparkle"
    );

    particle.innerHTML =
    "✨";

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
    .appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },3000);

}

setInterval(
createParticle,
1200
);


// ======================================
// MOON EASTER EGG
// ======================================

const moon =
document.querySelector(".moon");

let moonClicks = 0;

if(moon){

    moon.addEventListener(
    "click",
    () => {

        moonClicks++;

        createHeartBurst();

        if(moonClicks === 5){

            const easterEgg =
            document.createElement(
            "div"
            );

            easterEgg.style.position =
            "fixed";

            easterEgg.style.top =
            "50%";

            easterEgg.style.left =
            "50%";

            easterEgg.style.transform =
            "translate(-50%,-50%)";

            easterEgg.style.padding =
            "30px";

            easterEgg.style.borderRadius =
            "20px";

            easterEgg.style.background =
            "rgba(255,255,255,.12)";

            easterEgg.style.backdropFilter =
            "blur(20px)";

            easterEgg.style.zIndex =
            "99999";

            easterEgg.style.maxWidth =
            "500px";

            easterEgg.style.textAlign =
            "center";

            easterEgg.innerHTML =

            `
            <h3 style="margin-bottom:15px;">
            Secret Found 🌙
            </h3>

            <p>
            Some people become chapters.

            Some become entire books.
            </p>
            `;

            document.body
            .appendChild(
            easterEgg
            );

            setTimeout(() => {

                easterEgg.remove();

            },6000);

        }

    });

}


// ======================================
// BUTTON HOVER MAGIC
// ======================================

document
.querySelectorAll("button")
.forEach(button => {

    button.addEventListener(
    "mouseenter",
    () => {

        for(let i=0;i<5;i++){

            const sparkle =
            document.createElement(
            "div"
            );

            sparkle.classList.add(
            "sparkle"
            );

            sparkle.innerHTML =
            "✨";

            const rect =
            button.getBoundingClientRect();

            sparkle.style.left =

            rect.left +
            Math.random() *
            rect.width + "px";

            sparkle.style.top =

            rect.top +
            Math.random() *
            rect.height + "px";

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


// ======================================
// FINAL CELEBRATION
// ======================================

const finalScreen =
document.getElementById(
"screen9"
);

if(finalScreen){

    finalScreen.addEventListener(
    "click",
    () => {

        for(
        let i=0;
        i<40;
        i++
        ){

            const item =
            document.createElement(
            "div"
            );

            item.classList.add(
            "floating-heart"
            );

            const icons = [

            "🌸",
            "✨",
            "💖",
            "🌙",
            "💫"

            ];

            item.innerHTML =

            icons[
            Math.floor(
            Math.random() *
            icons.length
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
            Math.random() * 15 + 20
            + "px";

            document.body
            .appendChild(item);

            setTimeout(() => {

                item.remove();

            },5000);

        }

    });

}


// ======================================
// RESTART JOURNEY
// ======================================

const restartBtn =
document.getElementById(
"restartBtn"
);

if(restartBtn){

    restartBtn.addEventListener(
    "click",
    () => {

        location.reload();

    });

}