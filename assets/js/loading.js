function loading() {
    //remove active from loading 
    
    let loading = document.getElementById('loading');
    let svgName = document.getElementById('svg-name');
    
    
    loading.classList.remove('active');
    svgName.dataset.animate = 'true';
}


