/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 08/03/2024 by Dhalian */

var switchVer = document.getElementsByClassName("switchVer");
var switchFirmName = document.getElementsByClassName("switchFirmName");

$(document).ready(function() {
  var repoOwner = "THZoria";
  var repoName = "NX_Firmware";
  var apiUrl = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/releases/latest";

  $.get(apiUrl, function(data) {
      var latestRelease = data.tag_name;
      for (var i = 0; i < switchVer.length; i++) {
        switchVer[i].innerHTML = latestRelease.slice(0, -1);
      }
      let switchFWName = latestRelease.substring(0, 2) + latestRelease.substring(3, 4) + latestRelease.substring(5);
      for (var i = 0; i < switchFirmName.length; i++) {
        switchVer[i].innerHTML = switchFWName.slice(0, -1);
      }
      console.log(switchFWName.slice(0, -1));
  }).fail(function() {
    for (var i = 0; i < switchVer.length; i++) {
      switchVer[i].innerHTML = "Echec de la récupération du firmware actuel";
    }
    for (var i = 0; i < switchFirmName.length; i++) {
      switchVer[i].innerHTML = "Echec de la récupération du firmware actuel";
    }
  });
});