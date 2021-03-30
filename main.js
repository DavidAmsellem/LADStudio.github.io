



const menudes = document.querySelector('.icon-menu');

window.onscroll = function(){

    var top2 = window.scrollY;
    console.log(top2);
    if (top1 >= 30){
        icon-menu.classList.add('active');
        
    }else{
        icon-menu.classList.remove('active');
        
    }
}


const LADlogon = document.querySelector('.LADlogon');

window.onscroll = function(){

    var top1 = window.scrollY;
    console.log(top1);
    if (top1 >= 30){
        LADlogon.classList.add('active');
        
    }else{
        LADlogon.classList.remove('active');
        
    }
}

const headerlad = document.querySelector('.headerlad');

window.onscroll = function(){

    var top = window.scrollY;
    console.log(top);
    if (top >= 20){
        headerlad.classList.add('active');
        LADlogon.classList.add('active');
        
    }else{
        headerlad.classList.remove('active');
        LADlogon.classList.remove('active');
        
    }
}



