/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 17/12/2023 by Dhalian */

const userDecision = localStorage.getItem('cookieConsent');
var cookieBox = document.getElementById('cookieBoxGen');

document.addEventListener('DOMContentLoaded', function() {
    if (userDecision === 'accepted' && isNotExpired()) {
        hideCookieBox();
        loadGoogleAnalytics();
    } else {
        buttonsListener();
    }
});
function loadGoogleAnalytics() {
	const script = document.createElement('script');
	script.async = true;
	script.src = 'https://www.googletagmanager.com/gtag/js?id=G-68CMDJM124';
	document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-68CMDJM124');
}

function buttonsListener() {
    document.getElementById('accept-btn').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', JSON.stringify({ decision: 'accepted', expiration: getExpirationDate() }));
        loadGoogleAnalytics();
        hideCookieBox();
    });

    document.getElementById('decline-btn').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', JSON.stringify({ decision: 'declined', expiration: getExpirationDate() }));
        hideCookieBox();
    });
}

function hideCookieBox() {
    cookieBox.style.display = "none";
}

function getExpirationDate() {
    const expirationDate = new Date();
    expirationDate.setFullYear(2099);
    return expirationDate.getTime();
}

function isNotExpired() {
    const storedData = localStorage.getItem('cookieConsent');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData.expiration) {
            const currentDate = new Date().getTime();
            return currentDate < parsedData.expiration;
        }
    }
    return false;
}
