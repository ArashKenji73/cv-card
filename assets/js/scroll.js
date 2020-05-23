//get all sections height 
let
    skillOffset,
    skillHeight,
    aboutOffset,
    aboutHeight;



//get skills scroll position
skillOffset = document.getElementById('skills').offsetTop;

//get skills height
skillHeight = document.getElementById('skills').offsetHeight;





//get about-me scroll position
aboutOffset = document.getElementById('about-me').offsetTop;


//get about-me height
aboutHeight = document.getElementById('about-me').offsetHeight;




//call callback after scroll to point
function scrollFunction(customCallback, offset, height) {
    if (document.documentElement.scrollTop > (offset - height)-60) {
        customCallback();
    }
}


export {
    skillOffset,
    skillHeight,
    aboutOffset,
    aboutHeight,
    scrollFunction
}

