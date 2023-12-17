/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 17/12/2023 by Dhalian */

document.addEventListener("DOMContentLoaded", function() {
    var cookieBox = document.getElementById("cookieBoxGen");
    var acceptButton = document.getElementById("accept-btn");
    var declineButton = document.getElementById("decline-btn");

    var userDecision = document.cookie.replace(/(?:(?:^|.*;\s*)userCookieDecision\s*=\s*([^;]*).*$)|^.*$/, "$1");

    if (userDecision === "accepted") {
      cookieBox.style.display = "none";
    } else if (userDecision === "declined") {
      var gtmScript = document.querySelector('script[src="https://www.googletagmanager.com/gtag/js?id=G-68CMDJM124"]');
      if (gtmScript) {
        gtmScript.parentNode.removeChild(gtmScript);
      }
      cookieBox.style.display = "none";
    } else {
      cookieBox.style.display = "block";
    }

    acceptButton.addEventListener("click", function() {
      document.cookie = "userCookieDecision=accepted; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
      cookieBox.style.display = "none";
    });

    declineButton.addEventListener("click", function() {
      document.cookie = "userCookieDecision=declined; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";
      cookieBox.style.display = "none";
      var gtmScript = document.querySelector('script[src="https://www.googletagmanager.com/gtag/js?id=G-68CMDJM124"]');
      if (gtmScript) {
        gtmScript.parentNode.removeChild(gtmScript);
      }
    });
  });
