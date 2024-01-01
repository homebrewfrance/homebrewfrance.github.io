/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 01/01/2024 by Dhalian */

/* ------------------------------------------------------------------------------------ */

/* MODIFICATION DE CONSOLES */

/* PRIX MODIFICATION NINTENDO SWITCH CLASSIQUE : */
prixSwitchClModif = '99'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO
// https://www.fixurphone.fr/nos-tarifs/installation-de-picofly-sur-switch-v1-v2

/* PRIX MODIFICATION NINTENDO SWITCH LITE : */
prixSwitchLiteModif = '99'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO
// https://www.fixurphone.fr/nos-tarifs/installation-de-picofly-sur-switch-lite

/* PRIX MODIFICATION NINTENDO SWITCH OLED : */
prixSwitchOLEDModif = '139'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO
// https://www.fixurphone.fr/nos-tarifs/installation-de-picofly-sur-switch-oled

/* ------------------------------------------------------------------------------------ */

/* CONSOLES MODIFIEES NEUVES */

/* PRIX DE LA NINTENDO SWITCH CLASSIQUE NEUVE MODIFIEE A L'ACHAT : */
prixSwitchClConsole = '379'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO
// https://www.fixurphone.fr/nos-tarifs/nintendo-switch-classique-modifi%C3%A9e

/* PRIX DE LA NINTENDO SWITCH LITE NEUVE MODIFIEE A L'ACHAT : */
prixSwitchLiteConsole = '319'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO
// https://www.fixurphone.fr/nos-tarifs/nintendo-switch-lite-modifi%C3%A9e

/* PRIX DE LA NINTENDO SWITCH OLED NEUVE MODIFIEE A L'ACHAT : */
prixSwitchOLEDConsole = '479'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO
// https://www.fixurphone.fr/nos-tarifs/nintendo-switch-oled-modifi%C3%A9e


/* NE PAS TOUCHER AU RESTE DU CODE */

prixOriginalClConsole = '399';
prixOriginalLiteConsole = '369';
prixOriginalOLEDConsole = '549';

prixOriginalClModif = '199';
prixOriginalLiteModif = '199';
prixOriginalOLEDModif = '249';

document.addEventListener('DOMContentLoaded', function () {
    appliquerPrix();
});

function appliquerPrix() {
    document.getElementById('classic-price-console').innerHTML = prixSwitchClConsole;
    reducClConsole = (((prixSwitchClConsole * 100)/prixOriginalClConsole)-100).toFixed(0);
    document.getElementById('classic-console-diff').innerHTML = reducClConsole;

    document.getElementById('lite-price-console').innerHTML = prixSwitchLiteConsole;
    reducLiteConsole = (((prixSwitchLiteConsole * 100)/prixOriginalLiteConsole)-100).toFixed(0);
    document.getElementById('lite-console-diff').innerHTML = reducLiteConsole;

    document.getElementById('oled-price-console').innerHTML = prixSwitchOLEDConsole;
    reducOLEDConsole = (((prixSwitchOLEDConsole * 100)/prixOriginalOLEDConsole)-100).toFixed(0);
    document.getElementById('oled-console-diff').innerHTML = reducOLEDConsole;

    document.getElementById('classic-oldprice-console').innerHTML = prixOriginalClConsole;
    document.getElementById('lite-oldprice-console').innerHTML = prixOriginalLiteConsole;
    document.getElementById('oled-oldprice-console').innerHTML = prixOriginalOLEDConsole;


    document.getElementById('classic-price-modif').innerHTML = prixSwitchClModif;
    reducClModif = (((prixSwitchClModif * 100)/prixOriginalClModif)-100).toFixed(0);
    document.getElementById('classic-modif-diff').innerHTML = reducClModif;

    document.getElementById('lite-price-modif').innerHTML = prixSwitchLiteModif;
    reducLiteModif = (((prixSwitchLiteModif * 100)/prixOriginalLiteModif)-100).toFixed(0);
    document.getElementById('lite-modif-diff').innerHTML = reducLiteModif;

    document.getElementById('oled-price-modif').innerHTML = prixSwitchOLEDModif;
    reducOLEDModif = (((prixSwitchOLEDModif * 100)/prixOriginalOLEDModif)-100).toFixed(0);
    document.getElementById('oled-modif-diff').innerHTML = reducOLEDModif;

    document.getElementById('classic-oldprice-modif').innerHTML = prixOriginalClModif;
    document.getElementById('lite-oldprice-modif').innerHTML = prixOriginalLiteModif;
    document.getElementById('oled-oldprice-modif').innerHTML = prixOriginalOLEDModif;
    
    document.getElementById('max-reduc').innerHTML = Math.min(reducClConsole, reducLiteConsole, reducOLEDConsole, reducClModif, reducLiteModif, reducOLEDModif);
    console.log('prix modif');
}
