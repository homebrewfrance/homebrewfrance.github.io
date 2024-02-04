/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 04/02/2023 by Dhalian */

var navGen = document.getElementById("navGen");
var footerGen = document.getElementById("footerGen");
var pageName = document.getElementById("page_name");
var footerType = document.getElementById("footer_type");
var htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
var footerTag = document.getElementsByTagName('footer');

document.addEventListener('DOMContentLoaded', function () {
	pageGeneration();
	loadGoogleTagManager();
});

var navContent = '<nav class="navbar navbar-expand-lg"><a class="navbar-brand" href="https://homebrewfrance.github.io/"><img src="https://raw.githubusercontent.com/homebrewfrance/homebrewfrance.github.io/main/IMAGES/favicon.png" width="45" height="45"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item mr-1 ml-1"><a id="accueil-nav" class="nav-link" href="https://homebrewfrance.github.io/">Accueil</a></li><li class="nav-item mr-1 ml-1"><a id="packs-nav" class="nav-link" href="https://homebrewfrance.github.io/telechargements">Téléchargements</a></li><li class="nav-item mr-1 ml-1 dropdown"><a id="docs-nav" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/switch">Nintendo Switch</a><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/dsi">Nintendo DSi</a><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/psvita">PlayStation Vita</a><a class="dropdown-item" href="https://homebrewfrance.github.io/docs/ps2">PlayStation 2</a></div></li><li class="nav-item mr-1 ml-1 dropdown"><a id="checker-nav" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Multi-Checker</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="https://homebrewfrance.github.io/multi-checker/switch">Nintendo Switch</a><a class="dropdown-item" href="https://homebrewfrance.github.io/multi-checker/ps3">PlayStation 3</a></div></li><li class="nav-item mr-1 ml-1"><a id="boutiqueNav" class="nav-link" href="https://homebrewfrance.github.io/boutique">Boutique</a></li><li class="nav-item mr-1 ml-1"><a id="about-nav" class="nav-link" href="https://homebrewfrance.github.io/a-propos">A propos</a></li></ul></div></nav>';
var footerContent1 = '<footer><p class="footer-p">&copy; 2021 - <span id="year">2021</span>&nbsp;<a class="footerhbfl" href="https://github.com/homebrewfrance">Le Homebrew France</a></br><a href="https://homebrewfrance.github.io/nav.html">Navigation</a> - <a href="https://homebrewfrance.github.io/legal.html">Mentions légales</a></p></footer>';
var footerContent0 = '<footer class="footer-0"><p class="footer-p">&copy; 2021 - <span id="year">2021</span>&nbsp;<a class="footerhbfl" href="https://github.com/homebrewfrance">Le Homebrew France</a></br><a href="https://homebrewfrance.github.io/nav.html">Navigation</a> - <a href="https://homebrewfrance.github.io/legal.html">Mentions légales</a></p></footer>';
var footerContent2 = '<footer><p class="footer-p">Lumia Multi Checker &copy <span id="year">2021</span> - <a class="white-a" href="https://github.com/homebrewfrance">Le Homebrew France</a></p></footer>';
var footerContent3 = '<footer><p class="footer-p">HBF Docs &copy <span id="year">2021</span> - <a class="white-a" href="https://github.com/homebrewfrance">Le Homebrew France</a></p></footer>';

function pageGeneration() {
	navGen.innerHTML = navContent;

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
	/*activeLinks();*/
}

function loadGoogleTagManager() {
	var gtagScript = document.createElement('script');
	gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-68CMDJM124';
	gtagScript.async = true;
	
	var head = document.head || document.getElementsByTagName('head')[0];
	head.appendChild(gtagScript);
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-68CMDJM124');
}

// UNUSED WITH NEW UI
/*function activeLinks() {
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
}*/
