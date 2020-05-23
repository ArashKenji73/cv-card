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


//console.log(skillOffset, skillOffset);


//if scrolled to skills this function called
window.onscroll = function () {
    scrollFunction(addPercentToSkill(skillOffset - skillHeight));
};






