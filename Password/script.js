/*
checkPasswordPass(sessionStorage.getItem("passwordSaved"));

const form = document.getElementById("auth-form");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const password = form.password.value.trim();
  
    message.textContent = "";
  
    if (!username || !password) {
      message.textContent = "All fields are required!";
      return;
    }
    sessionStorage.setItem("passwordSaved", password);
    
    checkPasswordPass(sessionStorage.getItem("passwordSaved"));

    return;
});
*/
// ===== DOM Elements =====
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error);
  }
});

// ===== Auth State Listener (optional but useful) =====
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User logged in:", user.email);
    window.location.href = '../HunterLogin/HunterLogin.html';
  } else {
    console.log("No user logged in");
  }
});
