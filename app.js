const secondHand = document.querySelector(".second-hand"),
  minHand = document.querySelector(".min-hand"),
  hourHand = document.querySelector(".hour-hand");

function tick() {
  const now = new Date();
  const seconds = now.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
    minutes = now.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
    hours = now.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 });

  const secondsDegrees = (seconds / 60) * 360 + 90,
    minDegrees = (minutes / 60) * 360 + 90,
    hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(tick, 1000);
