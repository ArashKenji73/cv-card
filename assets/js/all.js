import {
    toggleMenu
} from './toggle-menu.js';

import {
    addPercentToSkill
} from './skills.js';

import {
    skillOffset,
    skillHeight,
    aboutOffset,
    aboutHeight,
    scrollFunction
} from './scroll.js';


function fadeIn(el) {
    el.dataset.animate='true';
}

var elm = document.getElementById('about-me');

//if scrolled to skills this function called
window.onscroll = function () {
    scrollFunction(fadeIn, elm, aboutOffset, aboutHeight);

    
    
    scrollFunction(addPercentToSkill, elm ,skillOffset, skillHeight);
};
