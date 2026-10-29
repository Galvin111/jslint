// Returns a Filipino greeting based on the hour (0-23).
function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "Magandang umaga";
  }
  if (hour >= 12 && hour < 18) {
    return "Magandang hapon";
  }
  return "Magandang gabi";
}

// A social media manager's take: is now a good time to post?
// Peak windows: 11:00-13:59 (lunch) and 19:00-21:59 (evening scroll).
function getPostingTip(hour) {
  const isPeak = (hour >= 11 && hour < 14) || (hour >= 19 && hour < 22);
  if (isPeak) {
    return { live: true, text: "Peak hours — post now." };
  }
  return { live: false, text: "Off-peak — schedule it for later." };
}

// Runs when the page loads.
function initPage() {
  const hour = new Date().getHours();
  const tip = getPostingTip(hour);

  document.getElementById("greeting").textContent = getGreeting(hour) + " 👋";
  document.getElementById("post-tip").textContent = tip.text;

  if (tip.live) {
    document.getElementById("status-dot").classList.add("live");
  }

  document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("message").textContent = "Got a brand that needs a feed, a face, and a site? Let's talk.";
  });
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", initPage);
}

// Lets Jest import the functions for testing.
if (typeof module !== "undefined") {
  module.exports = { getGreeting, getPostingTip };
}
