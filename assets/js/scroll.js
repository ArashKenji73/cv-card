//get all sections height 
let
    aboutOffset,
    aboutHeight;



//get skills scroll position
//import from skills
import {
    addPercentToSkill,
    skillOffset,
    skillHeight
} from './skills.js';



//get service scroll position
//import from service
import {
    addAnimateService,
    services,
    servicesOffset,
    servicesHeight
} from './services.js';






//get about-me scroll position
aboutOffset = document.getElementById('about-me').offsetTop;
//get about-me height
aboutHeight = document.getElementById('about-me').offsetHeight;

var aboutSec = document.getElementById('about-me');



//call callback after scroll to point
function scrollFunction(customCallback, element = '', offset) {
    if (window.scrollY + window.innerHeight > (offset + 100)) {
        customCallback(element);
    }
}


function fadeIn(el) {
    el.dataset.animate = 'true';
}

//if scrolled to skills this function called
function scrollInit() {
    window.onscroll = function () {
        //fadeIn About us
        scrollFunction(fadeIn, aboutSec, aboutOffset);
        
        
        //add animate to skills
        scrollFunction(addPercentToSkill, '', skillOffset);
        
        
        //add animate to services
        services.forEach((service) => {
            scrollFunction(addAnimateService, service, servicesOffset, servicesHeight - 820);
        });
    };
}



export {
    scrollInit
}
