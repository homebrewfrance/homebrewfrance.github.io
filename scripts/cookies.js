/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 17/12/2023 by Dhalian */

const userDecision = localStorage.getItem('cookieConsent');
var cookieBox = document.getElementById('cookieBoxGen');

document.addEventListener('DOMContentLoaded', function() {
	buttonsListener();
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
		localStorage.setItem('cookieConsent', 'accepted');
		loadGoogleAnalytics();
		hideCookieBox();
		console.log(userDecision);
	});

	document.getElementById('decline-btn').addEventListener('click', function() {
		localStorage.setItem('cookieConsent', 'declined');
		hideCookieBox();
		console.log(userDecision);
	});
}

function hideCookieBox() {
	cookieBox.style.display = "none";
}
