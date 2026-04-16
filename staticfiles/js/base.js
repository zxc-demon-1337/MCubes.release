

document.addEventListener('click', (e) => {
  const cardButton = e.target.closest('.card-button');
  if (cardButton) {
    const url = cardButton.getAttribute('data-href');
    if (url) {
      e.preventDefault();
      window.location.href = url;
    }
  }
});

document.addEventListener('click', (e) => {
  const cardButton = e.target.closest('.link-button');
  if (cardButton) {
    const url = cardButton.getAttribute('data-href');
    if (url) {
      e.preventDefault();
      window.location.href = url;
    }
  }
});

const b_1 = document.querySelector('.b-1')
const b_2 = document.querySelector('.b-2')
const b_3 = document.querySelector('.b-3')
const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.body;

function toggleBurgerMenu() {
    burgerMenu.style.display = 'flex';
    burgerBtn.classList.toggle('active');
    body.classList.toggle('no-scroll');
    burgerBtn.style.transform = 'rotate(90deg)'
}

burgerBtn.addEventListener('click', toggleBurgerMenu);

document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && 
        !burgerBtn.contains(e.target) && 
        burgerMenu.style.display == "flex") {
        console.log("close menu")
        burgerMenu.style.display = "none";
        burgerBtn.style.transform = 'rotate(0deg)'
        burgerBtn.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu?.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});