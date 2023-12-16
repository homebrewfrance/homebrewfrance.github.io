const userDecision = localStorage.getItem('cookieConsent');

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

if (userDecision === 'accepted') {
	loadGoogleAnalytics();
}

document.getElementById('accept-btn').addEventListener('click', function() {
	localStorage.setItem('cookieConsent', 'accepted');
	loadGoogleAnalytics();
});

document.getElementById('decline-btn').addEventListener('click', function() {
	localStorage.setItem('cookieConsent', 'declined');
});
