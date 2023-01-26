'use strict'

const btnOpenModal = document.querySelector('.btn_read_more');
const btnCloseModal = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
const aboutbox = document.querySelector('.about_box');

const closeModal = function () {
    modal.classList.add('hidden');
    aboutbox.classList.remove('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    aboutbox.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);
btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', function () {
    aboutbox.classList.toggle('hidden');
});
btnCloseModal.addEventListener('click', function () {
    aboutbox.classList.toggle('hidden');
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})


