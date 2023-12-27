/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 27/12/2023 by Dhalian */

function checkAccepted() {
  return localStorage.getItem('cookiesAccepted') === 'true';
}

function hideBanner() {
  const cookieBanner = document.getElementById('cookieBanner');
  if (checkAccepted()) {
    cookieBanner.style.display = 'none';
  }
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  hideBanner();
}

window.onload = hideBanner;