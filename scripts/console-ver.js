var switchFWVer = "17.0.1";
var switchFWName = "1701";

var switchVer = document.getElementsByClassName("switchVer");
var switchFirmName = document.getElementsByClassName("switchFirmName");

document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < switchVer.length; i++) {
    switchVer[i].innerHTML = switchFWVer;
    console.log("switchVer chargé");
  }

  for (var j = 0; j < switchFirmName.length; j++) {
    switchFirmName[j].innerHTML = switchFWName;
    console.log("switchFirmName chargé");
  }
});
