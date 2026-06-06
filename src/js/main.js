import '../scss/main.scss'

// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination'
//     },

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: ".swiper-button-prev"
//     },

//     scrollbar: {
//         el: ".swiper-scrollbar"
//     }

// })

let headerNav = document.querySelector('.header__nav')
let btnOpen = document.querySelector('.header__burger')

btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('active')
    headerNav.classList.toggle('active')
    document.body.style.overflow = btnOpen.classList.contains('active') ? 'hidden' : ''
})


// let modal = document.querySelector('.modal')
// let openModal = document.querySelector('.open-modal')
// let closeModal = document.querySelector('.modal__window-close')

// openModal.addEventListener('click', () => {
//     modal.classList.add('active')
// })

// closeModal.addEventListener('click', () => {
//     modal.classList.remove('active')
// })