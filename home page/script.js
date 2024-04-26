
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }
});
const navLink=document.querySelectorAll('.nav--link');
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=>n.addEventListener('click',linkAction));

// add blur header
const blurHeader = () =>{
    const header=document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('blur-header'):header.classList.remove('blur-header');   
}
window.addEventListener('scroll', blurHeader);

const scrollup = () =>{
    const scrollUp=document.getElementById('scroll-up');
    this.scrollY>= 50? header.classList.add('blur-header'):header.classList.remove('blur-header');
}
window.addEventListener('scroll',blurHeader);

const sections=document.querySelectorAll('section[id]');
const scrollActive = () =>{
    const scrollDown=window.scrollY;

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight;
        const sectionTop=current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+ ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link');
        }else{
            sectionClass.classList.remove('active-link');
        }

         
    })
}
window.addEventListener('scroll', scrollActive);

