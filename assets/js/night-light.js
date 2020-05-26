let night, light, HTMLNode;



night = document.getElementById('night');
light = document.getElementById('light');

HTMLNode = document.getElementsByTagName('HTML')[0];



function lightDark() {
    light.addEventListener('click', function () {
        
        
        
        night.classList.remove('activate');
        light.classList.add('activate');
        
        HTMLNode.dataset.theme = 'light';
        
    });

    night.addEventListener('click', function () {
        light.classList.remove('activate');
        night.classList.add('activate');
        
        HTMLNode.dataset.theme = 'night';
    });
}


export{lightDark}
