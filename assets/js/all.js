import { toggleMenu } from './toggle-menu.js';

import { addPercentToSkill } from './skills.js';

import { toSkillsPixel, scrollFunction } from './scroll.js';



//if scrolled to skills this function called
window.onscroll = function () {
    scrollFunction( addPercentToSkill )
};
