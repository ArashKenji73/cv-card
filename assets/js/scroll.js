//get all sections height 
let headerHeight,bannerHeight,aboutMeHeight,toSkillsPixel;


headerHeight = document.getElementsByTagName("HEADER")[0].offsetHeight;

bannerHeight = document.getElementById("banner").offsetHeight;

aboutMeHeight = document.getElementById("about-me").offsetHeight;

toSkillsPixel = (headerHeight + bannerHeight + aboutMeHeight) - 520;




function scrollFunction( customCallback ) {
    if (document.documentElement.scrollTop > toSkillsPixel ) {
        {
            customCallback();
        }
    }
}


export {toSkillsPixel, scrollFunction}