//get all sections height 
let
    skillOffset,
    skillHeight,
    aboutOffset,
    aboutHeight;



//get skills scroll position
skillOffset = document.getElementById('skills').offsetTop;

//import from skills



import {
    addPercentToSkill
} from './skills.js';











//get skills height
skillHeight = document.getElementById('skills').offsetHeight;



//get about-me scroll position
aboutOffset = document.getElementById('about-me').offsetTop;


//get about-me height
aboutHeight = document.getElementById('about-me').offsetHeight;




//call callback after scroll to point
function scrollFunction(customCallback, element = '', offset, height) {
    if (document.documentElement.scrollTop > (offset - height) - 60) {
        customCallback(element);
    }
}



var aboutSec = document.getElementById('about-me');


function fadeIn(el) {
    el.dataset.animate='true';
}

//if scrolled to skills this function called
function scrollInit() {
    window.onscroll = function () {
        //fadeIn element
        scrollFunction(fadeIn, aboutSec, aboutOffset, aboutHeight);

        scrollFunction(addPercentToSkill, '', skillOffset, skillHeight);
    };
}



export {
    scrollInit
}
