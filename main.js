let search =document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('achive');
    navbar.classList.remove('active');
}

// Navbar
let navbar =document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=()=>{
    navbar.classList.toggle('active');
    search.classList.remove('achive');
}


//Remove menw and search icon on scroll
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('achive');
}



// header Animation
let header= document.querySelector('header');

window.addEventListener('scroll', () => {
        header.classList.toggle('active', window.scrollY > 0);
});