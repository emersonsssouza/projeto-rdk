function mudouTamanho() {
    if (window.innerWidth <= 321 ) {
        item.style.display = 'block'
    }

    else {
        item.style.display = 'none'
    }
}

function clicou() {
    if(item.style.display == 'block') {
        item.style.display = 'none'
    }

    else {
        item.style.display = 'block'
    }

}