// Utility: simple selectors
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Tabs & forms
const tabRegister = $("#tabRegister");
const tabLogin = $("#tabLogin");
const registerForm = $("#registerForm");
const loginForm = $("#loginForm");
const globalAlert = $("#globalAlert");

// Switch helpers
function showRegister() {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  tabRegister.setAttribute("aria-selected", "true");
  tabLogin.setAttribute("aria-selected", "false");
  hideGlobalAlert();
}

function showLogin() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  tabLogin.setAttribute("aria-selected", "true");
  tabRegister.setAttribute("aria-selected", "false");
  hideGlobalAlert();
}

// Tab click events
tabRegister.addEventListener("click", showRegister);
tabLogin.addEventListener("click", showLogin);
$("#switchToLogin").addEventListener("click", (e) => { e.preventDefault(); showLogin(); });
$("#switchToRegister").addEventListener("click", (e) => { e.preventDefault(); showRegister(); });

// Show/hide password buttons
$$(".eye").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const isPassword = input.getAttribute("type") === "password";
    input.setAttribute("type", isPassword ? "text" : "password");
  });
});

// Password strength meter
const pwd = $("#regPassword");
const pwdBar = $("#pwdBar");
const pwdLabel = $("#pwdLabel");
pwd.addEventListener("input", () => {
  const score = passwordScore(pwd.value);
  const widths = ["10%", "30%", "60%", "85%", "100%"];
  const labels = ["Very weak", "Weak", "Okay", "Strong", "Excellent"];
  pwdBar.style.width = widths[score];
  pwdLabel.textContent = labels[score];
});

// Basic password scoring
function passwordScore(p) {
  let score = 0;
  if (p.length >= 8) score++;
  if (/[A-Z]/.test(p)) score++;
  if (/[0-9]/.test(p)) score++;
  if (/[^A-Za-z0-9]/.test(p)) score++;
  if (p.length >= 12) score++;
  return Math.min(score, 4);
}

// Validation helpers
function setError(id, msg = "") {
  const el = document.getElementById(id);
  el.textContent = msg;
}

function clearErrors() {
  ["errRegName","errRegEmail","errRegPassword","errRegConfirm","errLogEmail","errLogPassword"]
    .forEach(id => setError(id, ""));
}

function showGlobalAlert(type, message) {
  globalAlert.classList.remove("hidden", "success", "error");
  globalAlert.classList.add(type);
  globalAlert.textContent = message;
  // Auto-hide after 5s
  setTimeout(hideGlobalAlert, 5000);
}

function hideGlobalAlert() {
  globalAlert.classList.add("hidden");
  globalAlert.textContent = "";
  globalAlert.classList.remove("success", "error");
}

// EMAIL regex (simple & safe)
const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.trim());

// Local storage keys
const LS_KEY = "demo_users";

// Load users
function loadUsers(){
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {};
  } catch {
    return {};
  }
}

// Save users
function saveUsers(users){
  localStorage.setItem(LS_KEY, JSON.stringify(users));
}

// REGISTER submit
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const name = $("#regName").value.trim();
  const email = $("#regEmail").value.trim().toLowerCase();
  const password = $("#regPassword").value;
  const confirm = $("#regConfirm").value;
  const terms = $("#regTerms").checked;

  let valid = true;

  if (name.length < 2) {
    setError("errRegName", "Please enter your full name.");
    valid = false;
  }
  if (!emailOk(email)) {
    setError("errRegEmail", "Enter a valid email address.");
    valid = false;
  }
  if (password.length < 8) {
    setError("errRegPassword", "Password must be at least 8 characters.");
    valid = false;
  }
  if (confirm !== password) {
    setError("errRegConfirm", "Passwords do not match.");
    valid = false;
  }
  if (!terms) {
    showGlobalAlert("error", "Please accept the Terms & Conditions to continue.");
    valid = false;
  }

  if (!valid) return;

  const users = loadUsers();
  if (users[email]) {
    setError("errRegEmail", "This email is already registered. Try logging in.");
    showLogin();
    return;
  }

  // In real apps, hash passwords & send to server.
  users[email] = { name, email, password };
  saveUsers(users);

  registerForm.reset();
  pwdBar.style.width = "20%";
  pwdLabel.textContent = "Weak";
  showGlobalAlert("success", "Account created! You can log in now.");
  showLogin();
});

// LOGIN submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const email = $("#logEmail").value.trim().toLowerCase();
  const password = $("#logPassword").value;

  let valid = true;
  if (!emailOk(email)) {
    setError("errLogEmail", "Enter a valid email.");
    valid = false;
  }
  if (!password) {
    setError("errLogPassword", "Password is required.");
    valid = false;
  }
  if (!valid) return;

  const users = loadUsers();
  const user = users[email];

  if (!user || user.password !== password) {
    showGlobalAlert("error", "Incorrect email or password.");
    return;
  }

  // Demo success flow
  loginForm.reset();
  showGlobalAlert("success", `Welcome back, ${user.name}! Logged in successfully.`);
});

// Accessibility: submit on Enter key inside inputs
$$("input").forEach(inp => {
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const form = inp.closest("form");
      if (form) form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }
  });
});
