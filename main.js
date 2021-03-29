

const headerlad = document.querySelector('.headerlad');

window.onscroll = function(){

    var top = window.scrollY;
    console.log(top);
    if (top >= 100){
        headerlad.classList.add('active');
        
    }else{
        headerlad.classList.remove('active');
        
    }
}



