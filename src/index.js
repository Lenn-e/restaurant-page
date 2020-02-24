import createHomeDisplay from './createHomeDisplay';
import createMenuDisplay from './createMenuDisplay';

// nodes
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

// event handlers
homeBtn.addEventListener('click', createHomeDisplay.bind(this, 'Nice Restaurant','“You are what what you eat eats.” ― Michael Pollan'));
menuBtn.addEventListener('click', createMenuDisplay.bind(this, 'This is our menu'));
