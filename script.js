/* ==========================================
   AYAN'S 11TH BIRTHDAY WEBSITE
   ========================================== */


/*
    GOOGLE FORM

    TODO:
    Replace the value below after we create
    the final Google Form.
*/

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScAfVrWEdB99ASJSckwbCfBRP4MSSABwG0yQTJ4ttUNmEk9og/viewform?usp=dialog";



/*
    FRIENDS WHO HAVE SAID YES

    For Version 1 we will manually maintain
    this list.

    Later we can automatically load this
    from the RSVP responses.

    Example:

    const guests = [
        "Aarav",
        "Kabir",
        "Vihaan"
    ];
*/

const guests = [

    // Add confirmed friends here later

];



/*
    PARTY GAMES

    TODO:
    Replace these once Ayan chooses the
    final games.

    These are temporary suggestions only.
*/

const games = [

    {
        name: "Game 1",
        icon: "🎮",
        description: "Game details coming soon!"
    },

    {
        name: "Game 2",
        icon: "🏆",
        description: "Game details coming soon!"
    },

    {
        name: "Game 3",
        icon: "🎯",
        description: "Game details coming soon!"
    },

    {
        name: "Game 4",
        icon: "🎉",
        description: "Game details coming soon!"
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


    guestList.innerHTML = "";


    /*
        No confirmed guests yet
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
        Display each confirmed guest
    */

    guests.forEach(function (guestName) {

        const guestElement =
            document.createElement("div");

        guestElement.className = "guest";

        guestElement.textContent =
            "🎉 " + guestName;

        guestList.appendChild(guestElement);

    });


    /*
        Display count
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

    gamesList.innerHTML = "";


    games.forEach(function (game) {

        const gameElement =
            document.createElement("div");

        gameElement.className = "game-card";

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

        gamesList.appendChild(gameElement);

    });

}



/* ==========================================
   RSVP BUTTON
   ========================================== */

function setupRSVPButton() {

    const rsvpButton =
        document.getElementById("rsvpButton");

    const rsvpMessage =
        document.getElementById("rsvpMessage");


    /*
        Check if RSVP was previously started
        from this browser.
    */

    const rsvpStatus =
        localStorage.getItem(
            "ayanBirthdayRSVP"
        );


    if (rsvpStatus === "started") {

        rsvpButton.textContent =
            "✅ RSVP Form";

        rsvpMessage.textContent =
            "Already responded? Great! See who's joining below 🎉";

    }


    /*
        RSVP button click
    */

    rsvpButton.addEventListener(
        "click",
        function () {

            /*
                Google Form not configured yet
            */

            if (GOOGLE_FORM_URL === "") {

                alert(
                    "The RSVP form will be available soon! 🎉"
                );

                return;
            }


            /*
                Remember this browser
            */

            localStorage.setItem(
                "ayanBirthdayRSVP",
                "started"
            );


            /*
                Open Google Form
            */

            window.location.href =
                GOOGLE_FORM_URL;

        }
    );

}



/* ==========================================
   START WEBSITE
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayGuests();

        displayGames();

        setupRSVPButton();

    }
);
