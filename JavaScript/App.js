'use strict';

const images = [
    { 'id': '1', 'url' : './imagens-molas/mola-01.jpg' },
    { 'id': '2', 'url' : './imagens-molas/mola-02.jpg' },
    { 'id': '3', 'url' : './imagens-molas/mola-03.jpg' },
    { 'id': '4', 'url' : './imagens-molas/mola-04.jpg' },
    { 'id': '5', 'url' : './imagens-molas/mola-05.jpg' },
    { 'id': '6', 'url' : './imagens-molas/mola-06.jpg' },
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

