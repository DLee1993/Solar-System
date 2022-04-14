const hamburger = document.querySelector('.hamburger-icon'),
    closeIcon = document.querySelector('.close-icon'),
    navList = document.querySelector('.nav-list');

let navOpen = false;

hamburger.addEventListener('click', () => {
    if(!navOpen){
        navList.classList.add('open')
        navOpen = true
    } 
}); 

closeIcon.addEventListener('click', () => {
    if(navOpen){
        navList.classList.remove('open')
        navOpen = false;
    }
})