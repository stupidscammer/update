document.querySelector("#dar").onclick = () => {
  document.documentElement.classList.toggle("dark");
};

/*
document.querySelector("#dark-mode-toggle-mb").onclick = () => {
  document.documentElement.classList.toggle("dark");
}; */

document.getElementById("dartw").addEventListener("click", function() {
  document.documentElement.classList.remove("dark");
});



window.onload = () => {
  fadeOut();
};

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 8900);
}

function showTopRightPopupForm(){
  document.getElementById("msform").classList.toggle("active");
}

function showGeneralSetting(){
  document.getElementById('general_setting_popup').style.display="block";
  document.getElementById('general_setting_popup').style.opacity="1";
  document.getElementById('accountx_settings').style.display="none";
  document.getElementById('accountx_settings').style.opacity="0";
  document.getElementById('accessibility').style.display="none";
  document.getElementById('accessibility').style.opacity="0";
}

function showAccountSetting(){
  document.getElementById('general_setting_popup').style.display="none";
  document.getElementById('general_setting_popup').style.opacity="0";
  document.getElementById('accountx_settings').style.display="block";
  document.getElementById('accountx_settings').style.opacity="1";
  document.getElementById('accessibility').style.display="none";
  document.getElementById('accessibility').style.opacity="0";
}

function showAccessibility(){

  document.getElementById('general_setting_popup').style.display="none";
  document.getElementById('general_setting_popup').style.opacity="0";
  document.getElementById('accountx_settings').style.display="none";
  document.getElementById('accountx_settings').style.opacity="0";
  document.getElementById('accessibility').style.display="block";
  document.getElementById('accessibility').style.opacity="1";
}