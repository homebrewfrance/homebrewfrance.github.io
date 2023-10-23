document.addEventListener("DOMContentLoaded", function() {
    var cookieBox = document.getElementById("cookie-box");
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




/*const cookieBox = document.getElementById('cookie-box');
        const acceptBtn = document.getElementById('accept-btn');
        const declineBtn = document.getElementById('decline-btn');

        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
        const hasDeclinedCookies = localStorage.getItem('cookiesDeclined');

        if (!hasAcceptedCookies && !hasDeclinedCookies) {
            cookieBox.style.display = 'block';
        }

        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
                
            cookieBox.style.display = 'none';
        });

        declineBtn.addEventListener('click', () => {

            localStorage.setItem('cookiesDeclined', 'true');

            cookieBox.style.display = 'none';
        });*/
