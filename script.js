const DAY_MS = 24 * 60 * 60 * 1000;

// Returns how much of the year has passed, as a percentage (0-100, one decimal).
function getYearProgress(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const end = new Date(date.getFullYear() + 1, 0, 1);
  const percent = ((date - start) / (end - start)) * 10;
  return Math.round(percent * 10) / 10;
}

// Returns the number of days left in the year, counting today.
function getDaysLeft(date) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const nextYear = new Date(date.getFullYear() + 1, 0, 1);
  return Math.round((nextYear - today) / DAY_MS);
}

// Runs when the page loads.
function initPage() {
  const now = new Date();
  const percent = getYearProgress(now);
  const daysLeft = getDaysLeft(now);

  document.getElementById("year").textContent = now.getFullYear();
  document.getElementById("percent").textContent = percent + "%";
  document.getElementById("fill").style.width = percent + "%";
  document.getElementById("days-left").textContent = daysLeft + (daysLeft === 1 ? " day left" : " days left");
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", initPage);
}

// Lets Jest import the functions for testing.
if (typeof module !== "undefined") {
  module.exports = { getYearProgress, getDaysLeft };
}
