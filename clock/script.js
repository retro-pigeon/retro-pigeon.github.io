const jsConfetti = new JSConfetti();

setInterval((f) => {
  let d = new Date();
  document.getElementById("hours").innerHTML = d
    .getHours()
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = d
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = d
    .getSeconds()
    .toString()
    .padStart(2, "0");
  document.getElementById("miliseconds").innerHTML = d
    .getMilliseconds()
    .toString()
    .padStart(3, "0");

  document.getElementById("uk-date").innerHTML = convertDateToString();
  document.getElementById("fr-date").innerHTML = convertDateToFrenchString();
  document.getElementById("ro-date").innerHTML = convertDateToRomanianString();
  document.getElementById("us-date").innerHTML = convertDateToSpecialString();

  document.getElementById("till-break-minutes").innerText = Math.abs(50 - d.getMinutes());
  document.getElementById("till-break-seconds").innerText = 60 - d.getSeconds();
}, 1);

setInterval((f) => {
  let d = new Date();
  if(d.getMinutes() > 50)
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
  });
}, 1000);

function convertDateToString(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = new Date().getDate()
) {
  const date = new Date(year, month - 1, day);
  const options = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const daySuffix = getDaySuffix(day);

  return `The ${day}${daySuffix} of ${formattedDate}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function convertDateToFrenchString(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = new Date().getDate()
) {
  const date = new Date(year, month - 1, day);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Paris",
  };

  const formattedDate = date.toLocaleDateString("fr-FR", options);
  const daySuffix = getFrenchDaySuffix(day);

  return formattedDate;
}

function convertDateToRomanianString(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = new Date().getDate()
) {
  const date = new Date(year, month - 1, day);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Bucharest",
  };

  const formattedDate = date.toLocaleDateString("ro-RO", options);

  return formattedDate;
}

function convertDateToSpecialString(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  day = new Date().getDate()
) {
  const date = new Date(year, month - 1, day);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Europe/Bucharest",
  };

  const formattedDate = date
    .toLocaleDateString("ro-RO", options)
    .replace(/\./g, ".");
  return formattedDate;
}

function getFrenchDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "ème";
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "er";
    default:
      return "ème";
  }
}

// Example usage with default values (current date):
const result = convertDateToString();
console.log(result);
