/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 08/03/2024 by Dhalian */

DiscordLink = 'https://discord.gg/le-homebrew-france-883623179979984896';
NHLink = 'https://discord.gg/C29hYvh';
DisboardLink = 'https://disboard.org/fr/server/883623179979984896';
FormulaireHelperLink = 'https://homebrewfrance.github.io/devenir-helper/';
WebsiteLink = 'https://homebrewfrance.github.io/';

document.addEventListener('DOMContentLoaded', function() {
    redirection();
});

function redirection() {
    var redirectLink = document.getElementById('redirect-link');
    var pageSource = document.referrer;
    var regexDiscord = /homebrewfrance\.github\.io\/discord/i;
    var regexNH = /homebrewfrance\.github\.io\/nh/i;
    var regexDisboard = /homebrewfrance\.github\.io\/disboard/i;
    var regexFormulaire = /homebrewfrance\.github\.io\/devenir-expert/i;

    if (regexDiscord.test(pageSource)) {
        window.location.href = DiscordLink;
        redirectLink.href = DiscordLink;
    } else if (regexNH.test(pageSource)) {
        window.location.href = NHLink;
        redirectLink.href = NHLink;
    } else if (regexDisboard.test(pageSource)) {
        window.location.href = DisboardLink;
        redirectLink.href = DisboardLink;
    } else if (regexFormulaire.test(pageSource)) {
        window.location.href = FormulaireHelperLink;
        redirectLink.href = FormulaireHelperLink;
    } else if (regexFRDomain.test(pageSource)) {
        window.location.href = WebsiteLink;
        redirectLink.href = WebsiteLink;
    }
}