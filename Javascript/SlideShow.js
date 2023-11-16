'use strict';

const images = [
    { 'id': '1', 'url' : './imagens/mola-01.jpg' },
    { 'id': '2', 'url' : './imagens/mola-02.jpg' },
    { 'id': '3', 'url' : './imagens/mola-03.jpg' },
    { 'id': '4', 'url' : './imagens/mola-04.jpg' },
    { 'id': '5', 'url' : './imagens/mola-05.jpg' },
    { 'id': '6', 'url' : './imagens/mola-06.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container) => {
    images.forEach( Image => {
        container.innerHTML += `
            <div class='item'>
                <img src=${Image['url']} alt="">
            </div>
        `
    });
}

loadImages( images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
} 

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

function btnMenu() {
    var menu = document.getElementById('menu-mobile');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}