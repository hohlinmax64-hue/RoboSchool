import '../scss/main.scss'

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,

    navigation: {
        nextEl: '.my-next',
        prevEl: '.my-prev'
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        width: 100,
        hide: false,
    },

    breakpoints: {
        800:{
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        590: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                width: 100,
                hide: false,
            },
        },
        400: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.5,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
                hide: false,
            },
        } 
    }
})

let headerNav = document.querySelector('.header__nav')
let btnOpen = document.querySelector('.header__burger')

btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('active')
    headerNav.classList.toggle('active')
})

let tooltip = document.querySelector('.results__info-tooltip')
let iconTooltip = document.querySelector('.results__info-icon')

iconTooltip.addEventListener("mouseover", () => {
    tooltip.classList.add('active')
})
iconTooltip.addEventListener("mouseout", () => {
    tooltip.classList.remove('active')
})


let modal = document.querySelector('.modal')
let openModal = document.querySelector('.mentor__info-desc__btn')
let closeModal = document.querySelector('.mentor__window-close')
let closeModalMobile = document.querySelector('.mentor__window-close-mobile')

openModal.addEventListener('click', () => {
    modal.classList.add('active')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
})
closeModalMobile.addEventListener('click', () => {
    modal.classList.remove('active')
})

let modalBtn = document.querySelectorAll('.mentor__modal-btn')
let mentorModalEducation = document.querySelector('.mentor__modal-education')
let mentorBtnOpenWindiw = document.querySelectorAll('.mentor__info-desc__btn')

    mentorBtnOpenWindiw.forEach(btnOpenModal => {
        btnOpenModal.addEventListener('click', () => { 
            modal.classList.add('active')
        })
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active')
        })
})

const tabs = {
    school:
    `
        <p class="mentor__modal-education__school">
            Сентябрь 1995 — Июнь 2000<br>
            Санкт-Петербургский политехнический университет Петра Великого<br>
            Факультет: Компьютерных наук и технологий<br>
            Специальность: Математика и компьютерные науки<br>
            Форма обучения: Очная
        </p>
        <div class="mentor__modal-education__desc">
            <h2 class="modal__education-title">Курсы и тренинги</h2>
            <p class="modal__education-text">
                Ноябрь 2020 — Февраль 2021<br>
                Программа дополнительного образования «3D Моделирование»<br>
                Место проведения: Институт дополнительного образования «Политех»<br>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo abpariatur, voluptatum culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illumfacilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernaturvoluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihilfacilis consequuntur quod amet dignissimos. 
            </p>
        </div>
    `,
    experience:
    `<h2 class="modal__education-title">Lorem ipsum dolor sit amet consectetur</h2>`,
    awards:
    `<h2 class="modal__education-title">Lorem ipsum dolor sit amet consectetur</h2>`
}

mentorModalEducation.innerHTML = tabs.school
modalBtn.forEach(btnItem => {
    btnItem.addEventListener('click', () => {
        const tab = btnItem.dataset.tab
        mentorModalEducation.innerHTML = tabs[tab]
    })
})

const sliderBtns = document.querySelectorAll('.mentor__info-desc__btn')

const modalName = document.querySelector('.mentor__info-mentor-name');
const imgModal = document.querySelector(".mentor__modal-img")

sliderBtns.forEach(btnSlides => {
    btnSlides.addEventListener('click', () => {
        const slide = btnSlides.closest('.swiper-slide');

        const img = slide.querySelector('.mentor__info-img')
        const name = slide.querySelector('.mentor__info-desc__title')

        modalName.textContent = name.textContent
        imgModal.src = img.src
    })
})