// 🚆 Railway AI Delay Predictor (Final Version)

// 🔄 Show Loading + Call Prediction
function showLoading() {
  let result = document.getElementById("result");

  result.innerHTML = "⏳ AI is analyzing data...";

  setTimeout(() => {
    predictDelay();
  }, 1500);
}

// 🤖 Main Prediction Function
function predictDelay() {
  let train = document.getElementById("trainNumber").value;
  let weather = document.getElementById("weather").value;

  // Default delay
  let delay = 10;
  let message = "";

  // 🚦 Weather-based logic
  if (weather === "rain") {
    delay = 30;
    message = "🌧 Rain detected → Moderate delay expected";
  } 
  else if (weather === "fog") {
    delay = 45;
    message = "🌫 Fog conditions → High delay expected";
  } 
  else {
    delay = 10;
    message = "☀ Clear weather → Minimal delay";
  }

  // 🚄 Train number based variation (AI feel)
  if (train !== "") {
    let lastDigit = train.slice(-1);

    if (lastDigit % 2 === 0) {
      delay += 5;
    } else {
      delay += 10;
    }
  }

  // 📊 Final Output
  document.getElementById("result").innerHTML =
    "🚆 Train: " + (train || "N/A") + "<br>" +
    message + "<br>" +
    "⏱ Estimated Delay: " + delay + " minutes";
}

// ⭐ Save Train (Optional Feature)
function saveTrain() {
  let train = document.getElementById("trainNumber").value;

  if (train === "") {
    alert("Please enter a train number first!");
    return;
  }

  localStorage.setItem("savedTrain", train);
  alert("⭐ Train saved successfully!");
}

// 🔁 Load Saved Train on Page Load
window.onload = function () {
  let saved = localStorage.getItem("savedTrain");

  if (saved) {
    document.getElementById("trainNumber").value = saved;
  }
};
