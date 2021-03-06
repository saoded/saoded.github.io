/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleTopnavCollapse() {
  $("#myTopnav").toggleClass("responsive");
}

var darkmode = false;

function applyDarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (darkmode)
    $('#darkmode-elem').html('&#9788;');
  else
    $('#darkmode-elem').html('&#9790;');
}

function darkFunction() {
  darkmode = !darkmode;
  applyDarkmode();
}

function activate_topnav(clickedBtn) {
  $('.topnav button').removeClass('active');
  clickedBtn.classList.add('active');
  $("#myTopnav").removeClass("responsive");
}

function loadUndernavContent(navBtn) {
  activate_topnav(navBtn);

  var subpagePath = `pages/${navBtn.getAttribute('id')}.html`;
  $("#under-nav").load(subpagePath);
}

function loadWebdev() {
  $('.besides-sidenav').load('pages/projects/webdev.html');
}

function loadPython() {
  $('.besides-sidenav').load('pages/projects/python.html');
}

function loadCinema() {
  $('.besides-sidenav').load('pages/misc/cinema.html');
}

function loadImprov() {
  $('.besides-sidenav').load('pages/misc/improv.html');
}