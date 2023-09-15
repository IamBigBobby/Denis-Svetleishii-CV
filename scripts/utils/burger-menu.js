export function toggleBurgerMenu(){
  let burgerIcon = document.querySelector('.burger-icon');
  let backgroundBurgerMenu = document.getElementById('nav-block');
  let header =document.querySelector('.header');

  burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('burger-icon-rotate');
    backgroundBurgerMenu.classList.toggle('hidden');
    header.classList.toggle('header-hidden');
  })
}