// Show Login or Sign Out depending on login state
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (isLoggedIn === "true") {
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "block";
  } else {
    if (loginBtn) loginBtn.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});

// Save current page before login
function setRedirect() {
  localStorage.setItem("redirectAfterLogin", window.location.href);
}

// Sign out confirmation
function confirmLogout() {
  if (confirm("Are you sure you want to sign out?")) {
    localStorage.removeItem("isLoggedIn");

    // Stay on the SAME page
    window.location.reload();
  }
}


