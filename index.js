const morii = document.querySelector('#more');
const cont = document.querySelector('.mainbox12');
const closeoutoo = document.querySelector('#home');
const clogi1 = document.querySelector('#download');

morii.addEventListener('click', ()=> {
    cont.classList.add('show');
}
);
closeoutoo.addEventListener('click', ()=> {
    cont.classList.remove('show');
}
);
clogi1.addEventListener('click', ()=> {
    cont.classList.remove('show');
}
);