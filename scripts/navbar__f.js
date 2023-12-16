var navGen = document.getElementById("navGen");
var footerGen = document.getElementById("footerGen");
var cookieBoxGen = document.getElementById("cookieBoxGen");
var pageName = document.getElementById("page_name");
var footerType = document.getElementById("footer_type");
var htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
var footerTag = document.getElementsByTagName('footer');

document.addEventListener('DOMContentLoaded', function () {
    pageGeneration();
});

var navContent = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="https://homebrewfrance.github.io/"><img src="https://raw.githubusercontent.com/homebrewfrance/homebrewfrance.github.io/main/IMAGES/favicon.png" width="45" height="45"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item mr-1 ml-1"><a id="accueil-nav" class="nav-link" href="https://homebrewfrance.github.io/">Accueil</a></li><li class="nav-item mr-1 ml-1"><a id="packs-nav" class="nav-link" href="https://homebrewfrance.github.io/packs">Packs</a></li><li class="nav-item mr-1 ml-1 dropdown"><a id="docs-nav" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/switch">Nintendo Switch</a><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/dsi">Nintendo DSi</a><a class="dropdown-item disabled" href="https://homebrewfrance.github.io/docs/3ds">Nintendo 3DS</a><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/ps2">PlayStation 2</a></div></li><li class="nav-item mr-1 ml-1 dropdown"><a id="checker-nav" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Multi-Checker</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="https://homebrewfrance.github.io/serial-checker/switch">Nintendo Switch</a><a class="dropdown-item" href="https://homebrewfrance.github.io/serial-checker/ps3">PlayStation 3</a></div></li><li class="nav-item mr-1 ml-1"><a id="boutiqueNav" class="nav-link" href="https://homebrewfrance.github.io/boutique">Boutique</a></li><li class="nav-item mr-1 ml-1"><a id="about-nav" class="nav-link" href="https://homebrewfrance.github.io/a-propos">A propos</a></li></ul></div></nav>';
var footerContent1 = '<footer><p class="footer-p">&copy; 2021 - <span id="year">2021</span>&nbsp;<a class="footerhbfl" href="https://github.com/homebrewfrance">Le Homebrew France</a></br><a href="https://homebrewfrance.github.io/nav.html">Navigation</a> - <a href="https://homebrewfrance.github.io/legal.html">Mentions légales</a></p></footer>';
var footerContent0 = '<footer class="footer-0"><p class="footer-p">&copy; 2021 - <span id="year">2021</span>&nbsp;<a class="footerhbfl" href="https://github.com/homebrewfrance">Le Homebrew France</a></br><a href="https://homebrewfrance.github.io/nav.html">Navigation</a> - <a href="https://homebrewfrance.github.io/legal.html">Mentions légales</a></p></footer>';
var footerContent2 = '<footer><p class="footer-p">Lumia Multi Checker &copy <span id="year">2021</span> - <a class="white-a" href="https://github.com/homebrewfrance">Le Homebrew France</a></p></footer>';
var footerContent3 = '<footer><p class="footer-p">HBF Docs &copy <span id="year">2021</span> - <a class="white-a" href="https://github.com/homebrewfrance">Le Homebrew France</a></p></footer>';
var cookieContentFR = '<div id="cookie-box"><p>Ce site utilise des cookies de Google afin de vous proposer une meilleure expérience et nous permettre une analyse du trafic.</p><div id="cookie-btn-container"><button id="accept-btn">Accepter</button><button id="decline-btn">Décliner</button><a href="https://policies.google.com/technologies/cookies?hl=fr"><button id="plus-btn">Infos</button></a></div></div>'
var cookieContentEN = '<div id="cookie-box"><p>This website use Google❜s cookies to improve the user❜s experience and allow us to analyze the traffic.</p><div id="cookie-btn-container"><button id="accept-btn">Accept</button><button id="decline-btn">Decline</button><a href="https://policies.google.com/technologies/cookies?hl=en"><button id="plus-btn">Infos</button></a></div></div>';

function pageGeneration() {
	navGen.innerHTML = navContent;
	if (htmlLang == "fr") {
		cookieBoxGen.innerHTML = cookieContentFR;
	}
	else {
		cookieBoxGen.innerHTML = cookieContentEN;
	}

	if (footerType.innerHTML == "0") { // Small pages (footer with bottom:0 attribute)
		footerGen.innerHTML = footerContent0;
	}
	else if (footerType.innerHTML == "1") { // All pages
		footerGen.innerHTML = footerContent1;
	}
	else if (footerType.innerHTML == "2") { // Lumia Multi-Checker
		footerGen.innerHTML = footerContent2; 
	}
	else if (footerType.innerHTML == "2.0") { // Lumia Multi-Checker (footer with bottom:0 attribute)
		footerGen.innerHTML = footerContent2;
		footerTag.className = 'footer-0';
	}
	else if (footerType.innerHTML == "3") { // HBF Docs
		footerGen.innerHTML = footerContent3;
	}
	else if (footerType.innerHTML == "3.0") { // HBF Docs (footer with bottom:0 attribute)
		footerGen.innerHTML = footerContent3;
		footerTag.className = 'footer-0';
	}
	document.getElementById("year").innerHTML = new Date().getFullYear();
	activeLinks();
}

function activeLinks() {
	var accueilNav = document.getElementById('accueil-nav');
	var packsNav = document.getElementById('packs-nav');
	var docsNav = document.getElementById('docs-nav');
	var checkerNav = document.getElementById('checker-nav');
	var aboutNav = document.getElementById('about-nav');

	if (pageName.innerHTML == 'accueil') {
		accueilNav.className = 'nav-link active';
	}
	
	if (pageName.innerHTML == 'packs') {
		packsNav.className = 'nav-link active';
	} 
	
	if (pageName.innerHTML == 'docs') {
		docsNav.className = 'nav-link dropdown-toggle active';
	} 
	
	if (pageName.innerHTML == 'checker') {
		checkerNav.className = 'nav-link dropdown-toggle active';
	} 
	
	if (pageName.innerHTML == 'shop') {
		boutiqueNav.className = 'nav-link active';
	}
	
	if (pageName.innerHTML == 'about') {
		aboutNav.className = 'nav-link active';
	} 
}
