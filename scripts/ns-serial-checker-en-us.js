const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberInput = document.querySelector('input[name="numberInput"]').value;
    const xawSelector = document.querySelector('select[name="xawSelector"]').value;
    var resultat = document.getElementById("resultat");

    const compatible = '<div class="compatible-container"><div class="compatible">&nbsp;<strong>Unpatched Console</strong></div><div class="infos"><p>Your console is compatible with the RCM exploit.</br>You can proceed to <a href="https://homebrewfrance.github.io/docs/switch/#simuler-jig">the next step</a>.</p></div></div>';
    const maybecompatible = '<div class="maybe-compatible-container"><div class="maybe-compatible">&nbsp;<strong>Potentially Patched Console</strong></div><div class="infos"><p>Your console is possibly compatible with the RCM exploit.</br>Your console requires the installation of a modchip.</br><a href="https://homebrewfrance.github.io/boutique">More info</a></p></div></div>';
    const incompatible = '<div class="incompatible-container"><div class="incompatible">&nbsp;<strong>Patched Console</strong></div><div class="infos"><p>Your console is incompatible with the RCM exploit.</br>Your console requires the installation of a modchip.</br><a href="https://homebrewfrance.github.io/boutique">More info</a></p></div></div>';

    if (numberInput.length !== 11) {
        alert("Invalid serial number, it must be exactly 11 characters.");
        return;
    }

    if (xawSelector === "XAW") {
        if (numberInput >= 10000000000 && numberInput <= 10074000000) {
            resultat.innerHTML = compatible;
            console.log("Serial No: " + xawSelector + numberInput + "\nCompatibility: Accepted");
        } else if (numberInput > 10074000000 && numberInput <= 10120000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 10120000000 && numberInput <= 40000000000) {
            resultat.innerHTML = incompatible;
        } else if (numberInput >= 40000000000 && numberInput <= 40011000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 40011000000 && numberInput <= 40012000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 40012000000 && numberInput <= 70000000000) {
            resultat.innerHTML = incompatible;
        } else if (numberInput >= 70000000000 && numberInput <= 70017800000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 70017800000 && numberInput <= 70030000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 70030000000 && numberInput <= 99999999999) {
            resultat.innerHTML = incompatible;
        } else {
            alert("Invalid serial number");
        }
    } else if (xawSelector === "XAJ") {
        if (numberInput >= 10000000000 && numberInput <= 10020000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 10020000000 && numberInput <= 10030000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 10030000000 && numberInput <= 40000000000) {
            resultat.innerHTML = incompatible;
        } else if (numberInput >= 40000000000 && numberInput <= 40046000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 40046000000 && numberInput <= 40060000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 40060000000 && numberInput <= 70000000000) {
             resultat.innerHTML = incompatible;
        } else if (numberInput >= 70000000000 && numberInput <= 70040000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 70040000000 && numberInput <= 70050000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 70050000000 && numberInput <= 99999999999) {
             resultat.innerHTML = incompatible;
        } else {
            alert("Invalid serial number");
        }
    } else if (["XKJ", "XJW", "XKW", "XWW"].includes(xawSelector)) {
        if (numberInput >= 10000000000) {
             resultat.innerHTML = incompatible;
        }
    } else {
        alert("Invalid serial number");
    }
});
