let
    aboutOffset,
    aboutHeight;

//get about-me scroll position
aboutOffset = document.getElementById('about-me').offsetTop;
//get about-me height
aboutHeight = document.getElementById('about-me').offsetHeight;
var aboutSec = document.getElementById('about-me');




//get contact scroll position
let contactInfo, contactInfoOffset;
contactInfo = document.querySelector('#contact-us .contact-info');
contactInfoOffset = contactInfo.offsetTop;



let contactForm, contactFormOffset;
contactForm = document.querySelector('#contact-us .contact-from');
contactFormOffset = contactInfo.offsetTop;






//get skills scroll position
//import from skills
import {
    addPercentToSkill,
    skillOffset,
    skillHeight,
    skills
} from './skills.js';


//get service scroll position
//import from service
import {
    addAnimateService,
    services,
    servicesOffset,
    servicesHeight
} from './services.js';



//get all section height
let sections = document.getElementsByTagName('SECTION');

function test(section) {
    let ActiveSectionID;
    //remove all active
    document.querySelectorAll(`.main-menu li`).forEach(elm => {
        elm.classList.remove('active');
    });
    if (window.scrollY == 0) {
        ActiveSectionID = "banner";
    } else {
        //get active section
        ActiveSectionID = section.id;
    }


    //console.log('you reached : ' + ActiveSectionID);

    document.querySelectorAll(`.main-menu li[data-section="${ActiveSectionID}"]`)[0].classList.add('active');


}




//call callback after scroll to point
function scrollFunction(customCallback, element, offset) {
    if (window.scrollY + window.innerHeight > (offset + 30)) {
        customCallback(element);
    } else {
        removeAnimate(element);
    }
}



function removeAnimate(RemovedEl) {



    RemovedEl.dataset.animate = 'false';

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
        skills.forEach((skill) => {
            scrollFunction(addPercentToSkill, skill, skill.offsetTop);
        });


        //add animate to services
        services.forEach((service) => {
            scrollFunction(addAnimateService, service, service.offsetTop);
        });



        //add animate to contact-info
        scrollFunction(fadeIn, contactInfo, contactInfoOffset);
        scrollFunction(fadeIn, contactForm, contactFormOffset);



        ////////
        for (let i = 0; i < sections.length; i++) {
            scrollFunction(test, sections[i], sections[i].offsetTop);
        }


    };
}



export {
    scrollInit
}
