var pageTag = document.getElementsByTagName('page_tag');

function isFrancophoneCountry() {
    const francophoneCountries = ['FR', 'BE', 'CA', 'CH', 'LU', 'MC', 'MG', 'ML', 'SN', 'NE', 'BJ', 'TD', 'GA', 'RW', 'BI', 'CF', 'CD', 'CG', 'DJ', 'GA', 'MG', 'ML', 'NE', 'RW', 'SN', 'TD', 'TG', 'KM', 'MU', 'SC', 'HT', 'CM'];
    const userLanguage = navigator.language || navigator.userLanguage;
    const userCountryCode = userLanguage.split('-')[1];
    return francophoneCountries.includes(userCountryCode.toUpperCase());
  }

  function redirectBasedOnCountry() {
    if (isFrancophoneCountry()) {
      if (pageTag.innerHTML == "MCPS3") {
        window.location.href = 'https://homebrewfrance.github.io/serial-checker/ps3/fr-FR';
      }
      if (pageTag.innerHTML == "MCNX") {
        window.location.href = 'https://homebrewfrance.github.io/serial-checker/switch/fr-FR';
      }
    } else {
      if (pageTag.innerHTML == "MCPS3") {
        window.location.href = 'https://homebrewfrance.github.io/serial-checker/ps3/en-US';
      }
      if (pageTag.innerHTML == "MCNX") {
        window.location.href = 'https://homebrewfrance.github.io/serial-checker/switch/en-US';
      }
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    redirectBasedOnCountry();
});
