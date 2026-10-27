/* ==========================================
   AYAN'S 11TH BIRTHDAY WEBSITE
   ========================================== */


/* ==========================================
   FRIENDS WHO HAVE SAID YES
   ==========================================

   For now, manually add confirmed friends here.

   Later, we can automate this from the
   Google Form responses.
   ========================================== */

const guests = [
    "Vishrut",
    "Akshar",
    "Prithvi",
    "Viyan",
    "Rachit",
    "Sharwin",
   "Siyaa",
   "Yukhti",
   "Yugen",
   "Anant",
   "Shrishti",
   "Avyan",
   "Shlok",
   "Aradhya",
   "Mayank"
];


/* ==========================================
   PARTY GAMES
   ========================================== */

const games = [
    {
        name: "Game 1",
        icon: "🎮",
        description: "Cricket + Football"
    },
    {
        name: "Game 2",
        icon: "🏆",
        description: "Long range shooting"
    },
    {
        name: "Game 3",
        icon: "🎯",
        description: "One-pitch scoring"
    },
    {
        name: "Game 4",
        icon: "🎉",
        description: "Penalties"
    }
];


/* ==========================================
   DISPLAY GUEST LIST
   ========================================== */

function displayGuests() {

    const guestList =
        document.getElementById("guestList");

    const guestCount =
        document.getElementById("guestCount");


    /*
        Safety check
        If the elements don't exist in
        index.html, stop this function.
    */

    if (!guestList || !guestCount) {
        console.warn(
            "Guest list elements were not found."
        );
        return;
    }


    /*
        Clear existing content
    */

    guestList.innerHTML = "";


    /*
        NO CONFIRMED GUESTS YET
    */

    if (guests.length === 0) {

        guestList.innerHTML = `
            <p>
                🎉 The party squad is forming!
            </p>
        `;

        guestCount.textContent =
            "Be one of the first to join Ayan's party! 🥳";

        return;
    }


    /*
        DISPLAY EACH CONFIRMED FRIEND
    */

    guests.forEach(function (guestName) {

        const guestElement =
            document.createElement("div");

        guestElement.className = "guest";

        guestElement.textContent =
            "🎉 " + guestName;

        guestList.appendChild(
            guestElement
        );
    });


    /*
        DISPLAY NUMBER OF FRIENDS
    */

    if (guests.length === 1) {

        guestCount.textContent =
            "🎊 1 friend is joining Ayan!";

    } else {

        guestCount.textContent =
            "🎊 " +
            guests.length +
            " friends are joining Ayan!";
    }
}



/* ==========================================
   DISPLAY PARTY GAMES
   ========================================== */

function displayGames() {

    const gamesList =
        document.getElementById("gamesList");


    /*
        Safety check
    */

    if (!gamesList) {

        console.warn(
            "Games list element was not found."
        );

        return;
    }


    /*
        Clear existing games
    */

    gamesList.innerHTML = "";



    /*
        CREATE EACH GAME CARD
    */

    games.forEach(function (game) {

        const gameElement =
            document.createElement("div");

        gameElement.className =
            "game-card";


        gameElement.innerHTML = `
            <div class="game-icon">
                ${game.icon}
            </div>

            <h3>
                ${game.name}
            </h3>

            <p>
                ${game.description}
            </p>
        `;


        gamesList.appendChild(
            gameElement
        );

    });

}



/* ==========================================
   START WEBSITE
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
            Load confirmed guests
        */

        displayGuests();


        /*
            Load party games
        */

        displayGames();


        /*
            Helpful message for testing
        */

        console.log(
            "🎂 Ayan's Birthday Website Loaded Successfully!"
        );

    }
);
