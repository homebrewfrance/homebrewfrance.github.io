/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 29/12/2023 by Dhalian */

function checkAccepted() {
  return localStorage.getItem('cookiesAccepted') === 'true';
}

function hideBanner() {
  var cookieBoxGen = document.getElementById("cookieBoxGen");
  var cookieContent = '<div id="cookie-banner-container"><button class="cookie-banner" id="cookieBanner"><div class="cookie-container"><p>En poursuivant, vous acceptez l’utilisation de cookies pour améliorer l’expérience utilisateur.<div class="cookie-banner-button" onclick="acceptCookies()">J’accepte</div></p></div></button></div>'

  if (checkAccepted()) {
    console.log("Cookies already accepted.")
    cookieBoxGen.style.display = "none";
  }
  else {
    cookieBoxGen.innerHTML = cookieContent;
  }
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  hideBanner();
}

window.onload = hideBanner;