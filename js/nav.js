const navbar = document.querySelector('.navbar'),
    menuBtn = document.querySelector('.menu-btn'); 


let menuOpen = false;



menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        navbar.classList.add('open')
        menuBtn.classList.add('open'); 
        menuOpen = true;
    } else {
        navbar.classList.remove('open')
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
}); 