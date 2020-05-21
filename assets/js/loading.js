function loading() {
    //remove active from loading 
    
    let loading = document.getElementById('loading');
    let svgName = document.getElementById('svg-name');
    
    
    let bannerSubtitle = document.querySelector('#banner .subtitle');
    
    let bannerCta = document.querySelector('#banner .cta-wrapper');
    
    
    loading.classList.remove('active');
    svgName.dataset.animate = 'true';
    bannerSubtitle.dataset.animate = 'true';
    bannerCta.dataset.animate = 'true';
}


