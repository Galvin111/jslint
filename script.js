// Returns a greeting based on the hour (0-23).
function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "Morning";
  }
  if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  }
  return "Good evening";
}

// Returns how much of the year has passed, as a whole percent (0-100).
function getYearProgress(date) {
  const year = date.getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year + 1, 0, 1);
  return Math.floor(((date - start) / (end - start)) * 100);
}

// Runs when the page loads.
function initPage() {
  const now = new Date();
  const percent = getYearProgress(now);

  document.getElementById("greeting").textContent = getGreeting(now.getHours());
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  document.getElementById("percent").textContent = percent + "%";
  document.getElementById("fill").style.width = percent + "%";
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", initPage);
}

// Lets Jest import the functions for testing.
if (typeof module !== "undefined") {
  module.exports = { getGreeting, getYearProgress };
}
