let MenuBtn = document.getElementById('menu-btn');

let siteWrapper = document.getElementsByClassName('site-wrapper')[0];


MenuBtn.addEventListener("click",function(){
   
    toggleMenu();
    
});



function toggleMenu(){
    
    
    if(siteWrapper.dataset.open == 'true'){
        //must close
        siteWrapper.dataset.open = 'false';
        MenuBtn.dataset.open = 'false';
    }else{
        //must open
        siteWrapper.dataset.open = 'true';
        MenuBtn.dataset.open = 'true';
        
    }
    
    
}


export { toggleMenu };