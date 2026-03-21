function predict() {
  let weather = document.getElementById("weather").value;
  let train = document.getElementById("trainNumber").value;

  let delay = 0;

  if (weather === "rain") delay += 20;
  if (weather === "fog") delay += 30;

  // random factor
  delay += Math.floor(Math.random() * 10);

  let status = delay > 0 ? "Delayed" : "On Time";

  document.getElementById("result").innerText =
    "Train " + train + " is " + status + 
    ". Expected Delay: " + delay + " minutes";
}
