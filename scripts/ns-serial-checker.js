const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberInput = document.querySelector('input[name="numberInput"]').value;
    const xawSelector = document.querySelector('select[name="xawSelector"]').value;

    if (numberInput.length !== 11) {
        alert("Numéro de série invalide, il doit comporter exactement 11 caractères.");
        return;
    }

    if (xawSelector === "XAW") {
        if (numberInput >= 10000000000 && numberInput <= 10074000000) {
            alert("Votre console n'est pas patchée");
        } else if (numberInput > 10074000000 && numberInput <= 10120000000) {
            alert("Votre console est potentiellement patchée");
        } else if (numberInput > 10120000000 && numberInput <= 4000000000) {
            alert("Votre console est patchée");
        } else if (numberInput >= 40000000000 && numberInput <= 40011000000) {
            alert("Votre console n'est pas patchée");
        } else if (numberInput > 40011000000 && numberInput <= 40012000000) {
            alert("Votre console est potentiellement patchée");
        } else if (numberInput > 40012000000 && numberInput <= 70000000000) {
            alert("Votre console est patchée");
        } else if (numberInput >= 70000000000 && numberInput <= 70017800000) {
            alert("Votre console n'est pas patchée");
        } else if (numberInput > 70017800000 && numberInput <= 70030000000) {
            alert("Votre console est potentiellement patchée");
        } else if (numberInput > 70030000000 && numberinput <= 99999999999) {
            alert("Votre console est patchée");
        } else {
            alert("Numéro de série invalide");
        }
    } else if (xawSelector === "XAJ") {
        if (numberInput >= 10000000000 && numberInput <= 10020000000) {
            alert("Votre console n'est pas patchée");
        } else if (numberInput > 10020000000 && numberInput <= 10030000000) {
            alert("Votre console est potentiellement patchée");
        } else if (numberInput > 10030000000 && numberInput <= 40000000000) {
            alert("Votre console est patchée");
        } else if (numberInput >= 40000000000 && numberInput <= 40046000000) {
            alert("Votre console n'est pas patchée");
        } else if (numberInput > 40046000000 && numberInput <= 40060000000) {
            alert("Votre console est potentiellement patchée");
        } else if (numberInput > 40060000000 && numberInput <= 70000000000) {
            alert("Votre console est patchée");
        } else if (numberInput >= 70000000000 && numberInput <= 70040000000) {
            alert("Votre console n'est pas patchée");
        } else if (numberInput > 70040000000 && numberInput <= 70050000000) {
            alert("Votre console est potentiellement patchée");
        } else if (numberInput > 70050000000 && numberInput <= 99999999999) {
            alert("Votre console est patchée");
        } else {
            alert("Numéro de série invalide");
        }
    } else if (["XKJ", "XJW", "XKW", "XWW"].includes(xawSelector)) {
        if (numberInput >= 10000000000) {
            alert("Votre console est patchée");
        }
    } else {
        alert("Numéro de série invalide");
    }
});
