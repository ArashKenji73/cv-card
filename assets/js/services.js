let services,
    servicesOffset,
    servicesHeight



services = document.querySelectorAll('.services-wrapper .service');

servicesOffset = document.getElementById('services').offsetTop;
servicesHeight = document.getElementById('services').offsetHeight;


function addAnimateService(service){
    service.dataset.animate= 'true';
}




export {
    addAnimateService,
    services,
    servicesOffset,
    servicesHeight
}