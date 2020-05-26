let MenuBtn = document.getElementById('menu-btn');

let NavbarOverlay = document.getElementById('nav-overlay');

let Navbar = document.getElementsByTagName('NAV')[0];




MenuBtn.addEventListener("click", function () {
    toggleMenu();
});


NavbarOverlay.addEventListener("click", function(){
    toggleOut();
});


function toggleIn() {
    Navbar.dataset.open = 'true';
    MenuBtn.dataset.open = 'true';
    NavbarOverlay.dataset.open = 'true';
}

function toggleOut(){
        Navbar.dataset.open = 'false';
        MenuBtn.dataset.open = 'false';
        NavbarOverlay.dataset.open = 'false';
}


function toggleMenu() {


    if (Navbar.dataset.open == 'true') {
        //must close
        toggleOut()

    } else {
        //must open
        toggleIn()

    }


}


export {
    toggleMenu
};
