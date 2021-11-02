import home from './home.js';
import about from './about.js';
import clear from './clear.js';
import menu from './menu.js';
import contact from './contact.js';
import './reset.css';
import './style.css';

home();

// Home tab
let homeBtn = document.getElementById('home');
homeBtn.addEventListener("click", function() {
  clear();
  home();
});

// About tab
let aboutBtn = document.getElementById('about');
aboutBtn.addEventListener("click", function () {
  clear();
  about();
});

// Menu tab
let menuBtn = document.getElementById('menu');
menuBtn.addEventListener("click", function() {
  clear();
  menu();
});

// Contact tab
let contactBtn = document.getElementById('contact');
contactBtn.addEventListener("click", function() {
  clear();
  contact();
});