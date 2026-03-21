function predict() {
  let weather = document.getElementById("weather").value;
  let delay = 0;

  if (weather === "rain") delay = 25;
  else if (weather === "fog") delay = 40;

  document.getElementById("result").innerText =
    "Expected Delay: " + delay + " minutes";
}
