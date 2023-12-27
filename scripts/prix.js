/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 27/12/2023 by Dhalian */

/* PRIX DE LA NINTENDO SWITCH CLASSIQUE NEUVE MODIFIEE A L'ACHAT : */
prixSwitchClConsole = '379'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO

/* PRIX MODIFICATION NINTENDO SWITCH CLASSIQUE : */
prixSwitchClModif = '99'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO



/* PRIX DE LA NINTENDO SWITCH LITE NEUVE MODIFIEE A L'ACHAT : */
prixSwitchLiteConsole = '319'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO

/* PRIX MODIFICATION NINTENDO SWITCH LITE : */
prixSwitchLiteModif = '99'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO



/* PRIX DE LA NINTENDO SWITCH OLED NEUVE MODIFIEE A L'ACHAT : */
prixSwitchOLEDConsole = '479'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO

/* PRIX MODIFICATION NINTENDO SWITCH OLED : */
prixSwitchOLEDModif = '139'; // LAISSER LES GUILLEMETS, NE PAS METTRE LE SYMBOLE EURO

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
