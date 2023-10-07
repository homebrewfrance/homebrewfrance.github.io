const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberInputPS3 = document.querySelector('input[name="numberInputPS3"]').value;
    const CECHSelector = document.querySelector('select[name="CECHSelector"]').value;
    const LETTERSelector = document.querySelector('select[name="LETTERSelector"]').value;

    if (numberInputPS3.length < 7) {
        alert("Numéro de modèle invalide.");
        return;
    }

    if ((CECHSelector === "CECH-20" || CECHSelector === "CECH-21" || CECHSelector === "CECH-25") && (LETTERSelector === "A" || LETTERSelector === "B" || LETTERSelector === "C" || LETTERSelector === "D")) {
        alert("[Toutes versions]\nVotre console est compatible avec le CFW.");

    } else if ((CECHSelector === "CECH-30" || CECHSelector === "CECH-40" || CECHSelector === "CECH-42" || CECHSelector === "CECH-43") && (LETTERSelector === "A" || LETTERSelector === "B" || LETTERSelector === "C" || LETTERSelector === "D")) {
        alert("[Toutes versions]\nVotre console est incompatible avec le CFW. Préférez plutôt une installation du HEN (Hybrid Firmware)");

    } else if (["CECHA", "CECHB", "CECHC", "CECHE", "CECHF", "CECHG", "CECHH", "CECHJ", "CECHK", "CECHL", "CECHM", "CECHP", "CECHQ"].includes(CECHSelector)) {
        alert("[Toutes versions]\nVotre console est compatible avec le CFW.");

    } else {
        alert("Numéro de modèle invalide ou non pris en charge.");
    }
});
