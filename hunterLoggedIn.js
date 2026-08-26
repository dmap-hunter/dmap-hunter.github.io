// Accept the legacy key while keeping one canonical key for the rest of the app.
var storedHunterId = sessionStorage.getItem("hunterID");
var loggedIn = Boolean(storedHunterId && /^\d+$/.test(storedHunterId) && storedHunterId !== "0");
var hID = sessionStorage.getItem("hunterID");

if (!loggedIn) {
    hID = 0;
    window.location.replace("../HunterLogin/HunterLogin.html");
} else {
    sessionStorage.setItem("hunterId", hID);
}
