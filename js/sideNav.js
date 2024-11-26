function navSlide(){
    burger = document.querySelector('.burger');
    nav = document.querySelector('.sideNav');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('bread');
    });

}
navSlide();

