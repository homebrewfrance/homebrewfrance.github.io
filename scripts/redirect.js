/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 31/12/2023 by Dhalian */

DiscordLink = 'https://discord.gg/le-homebrew-france-883623179979984896';
NHLink = 'https://discord.gg/C29hYvh';
DisboardLink = 'https://disboard.org/fr/server/883623179979984896';
FormulaireHelperLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdJU768w8SPF459GyieS6plnWkbxLyJ1BBEMcclDSz6xI8Ykw/viewform?usp=pp_url';
WebsiteLink = 'https://homebrewfrance.github.io/'
FRDomainSRC = ['https://homebrewfrance.fr/', 'http://homebrewfrance.fr/'];

document.addEventListener('DOMContentLoaded', function() {
	redirection();
});

function redirection() {
	var redirectLink = document.getElementById('redirect-link');
	var pageSource = document.referrer;
	if (pageSource.includes('https://homebrewfrance.github.io/discord')) {
		window.location.href = DiscordLink;
		redirectLink.href = DiscordLink;
	}
	else if (pageSource.includes('https://homebrewfrance.github.io/nh')) {
		window.location.href = NHLink;
		redirectLink.href = NHLink;
	}
	else if (pageSource.includes('https://homebrewfrance.github.io/disboard')) {
		window.location.href = DisboardLink;
		redirectLink.href = DisboardLink;
	}
	else if (pageSource.includes('https://homebrewfrance.github.io/devenir-expert')) {
		window.location.href = FormulaireHelperLink;
		redirectLink.href = FormulaireHelperLink;
	}
	if (pageSource.includes(FRDomainSRC[0] || FRDomainSRC[1])) {
		window.location.href = WebsiteLink;
		redirectLink.href = WebsiteLink;
	}
}
	