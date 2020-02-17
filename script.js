/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var darkmode = false;
loadHome();

function applyDarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (darkmode)
    $('.darkmode-elem').html('&#9788;');
  else
    $('.darkmode-elem').html('&#9790;');
}

function darkFunction() {
  darkmode = !darkmode;
  applyDarkmode();
}

function loadContact() {
  $('.under-nav').load('pages/contact.html');
}

function loadHome() {
  $('.under-nav').load('pages/landing.html');
}

function loadProjects() {
  $('.under-nav').load('pages/projects.html', () => {
    loadWebdev();
  });
}

function loadMisc() {
  $('.under-nav').load('pages/misc.html', () => {
    loadCinema();
  });
}

function loadWebdev() {
  $('.besides-sidenav').load('pages/projects/webdev.html');
}

function loadPython() {
  $('.besides-sidenav').load('pages/projects/webdev.html');
}

function loadCinema() {
  $('.besides-sidenav').load('pages/misc/cinema.html');
}

function loadImprov() {
  $('.besides-sidenav').load('pages/misc/improv.html');
}