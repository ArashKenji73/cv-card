let nightHeader, 
    lightHeader, 
    nightNav, 
    lightNav,
    HTMLNode;



nightHeader = document.querySelectorAll('.header-color-mode .night')[0];
lightHeader = document.querySelectorAll('.header-color-mode .light')[0];


nightNav = document.querySelectorAll('.nav-color-mode .night')[0];
lightNav = document.querySelectorAll('.nav-color-mode .light')[0];




HTMLNode = document.getElementsByTagName('HTML')[0];




function Light() {
    nightHeader.classList.remove('activate');
    lightHeader.classList.add('activate');
    
    
    nightNav.classList.remove('activate');
    lightNav.classList.add('activate');
    
    HTMLNode.dataset.theme = 'light';
}

function Dark() {
    lightHeader.classList.remove('activate');
    nightHeader.classList.add('activate');
    
    
    lightNav.classList.remove('activate');
    nightNav.classList.add('activate');

    HTMLNode.dataset.theme = 'night';
}

function lightDark() {
    lightHeader.addEventListener('click', function () {
        Light();
    });

    nightHeader.addEventListener('click', function () {
        Dark();
    });
    
    
    lightNav.addEventListener('click', function () {
        Light();
    });

    nightNav.addEventListener('click', function () {
        Dark();
    });
}


export {
    lightDark
}
