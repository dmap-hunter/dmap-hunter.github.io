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

// Password rule elements
const lenRule = document.getElementById("lenRule");
const upperRule = document.getElementById("upperRule");
const lowerRule = document.getElementById("lowerRule");
const numberRule = document.getElementById("numberRule");
const specialRule = document.getElementById("specialRule");

// ===== Helper Functions =====
function setRule(el, isValid) {
  el.classList.remove("valid", "invalid");
  el.classList.add(isValid ? "valid" : "invalid");
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.style.color = isError ? "red" : "green";
}

// ===== Password Checker =====
function checkPassword(password) {
  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password)
  };

  setRule(lenRule, checks.length);
  setRule(upperRule, checks.upper);
  setRule(lowerRule, checks.lower);
  setRule(numberRule, checks.number);
  setRule(specialRule, checks.special);

  return Object.values(checks).every(Boolean);
}

// Live validation
passwordInput.addEventListener("input", () => {
  checkPassword(passwordInput.value);
});


// ===== Login =====
loginBtn.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    showMessage("Login successful.");
  } catch (error) {
    showMessage(error.message, true);
    console.error(error);
  }
});

// ===== Auth State Listener (optional but useful) =====
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});
