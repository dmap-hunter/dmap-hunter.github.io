if(!sessionStorage.getItem("hunterId")){
    sessionStorage.setItem("hunterId", 0);
    window.location.href = '../HunterLogin/HunterLogin.html';
}

var loggedIn = false;
var hID = sessionStorage.getItem("hunterId");

