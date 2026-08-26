// Accept the legacy key while keeping one canonical key for the rest of the app.
var storedHunterId = sessionStorage.getItem("hunterId") || sessionStorage.getItem("hunterID");
var loggedIn = Boolean(storedHunterId && /^\d+$/.test(storedHunterId) && storedHunterId !== "0");
var hID = loggedIn ? storedHunterId : null;

if (!loggedIn) {
    window.location.replace("../HunterLogin/HunterLogin.html");
} else {
    sessionStorage.setItem("hunterId", hID);
}
