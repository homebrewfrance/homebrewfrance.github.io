      const form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          const numberInput = document.querySelector('input[name="numberInput"]').value;
          const xawSelector = document.querySelector('select[name="xawSelector"]').value;

          if (xawSelector === "XAW1") {
            if (numberInput >= 0000000000 && numberInput <= 0074000000) {
              alert("Votre console n'est pas patchée");
            } else if (numberInput >= 0074000000 && numberInput <= 0120000000) {
              alert("Votre console est potentiellement patchée");
			} else if (numberInput >= 0120000000) {
			  alert("Votre console est patchée")
            } else {
              alert("Numéro de série invalide");
            }
          }
		  if (xawSelector === "XAW4") {
            if (numberInput >= 0000000000 && numberInput <= 0011000000) {
              alert("Votre console n'est pas patchée");
            } else if (numberInput >= 0011000000 && numberInput <= 0012000000) {
              alert("Votre console est potentiellement patchée");
			} else if (numberInput >= 0012000000) {
			  alert("Votre console est patchée")
            } else {
              alert("Numéro de série invalide");
            }
		  }
		  if (xawSelector === "XAW7") {
            if (numberInput >= 0000000000 && numberInput <= 0017800000) {
              alert("Votre console n'est pas patchée");
            } else if (numberInput >= 0017800000 && numberInput <= 0030000000) {
              alert("Votre console est potentiellement patchée");
			} else if (numberInput >= 0030000000) {
			  alert("Votre console est patchée")
            } else {
              alert("Numéro de série invalide");
            }
		  }
		  if (xawSelector === "XAJ1") {
            if (numberInput >= 0000000000 && numberInput <= 0020000000) {
              alert("Votre console n'est pas patchée");
            } else if (numberInput >= 0020000000 && numberInput <= 0030000000) {
              alert("Votre console est potentiellement patchée");
			} else if (numberInput >= 0030000000) {
			  alert("Votre console est patchée")
            } else {
              alert("Numéro de série invalide");
            }
		  }
		  if (xawSelector === "XAJ4") {
            if (numberInput >= 0000000000 && numberInput <= 0046000000) {
              alert("Votre console n'est pas patchée");
            } else if (numberInput >= 0046000000 && numberInput <= 0060000000) {
              alert("Votre console est potentiellement patchée");
			} else if (numberInput >= 0060000000) {
			  alert("Votre console est patchée")
            } else {
              alert("Numéro de série invalide");
            }
		  }
		  if (xawSelector === "XAJ7") {
            if (numberInput >= 0000000000 && numberInput <= 0040000000) {
              alert("Votre console n'est pas patchée");
            } else if (numberInput >= 0040000000 && numberInput <= 0050000000) {
              alert("Votre console est potentiellement patchée");
			} else if (numberInput >= 0050000000) {
			  alert("Votre console est patchée")
            } else {
              alert("Numéro de série invalide");
            }
		  }
          else if (xawSelector === "") {
            alert("Not supported");
          }
      });