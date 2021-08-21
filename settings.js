const set = document.querySelector('#set');
const con1 = document.querySelector('.mainbox122');
const clog = document.querySelector('#home');
const clogi = document.querySelector('#download');

set.addEventListener('click', ()=> {
    con1.classList.add('show');
}
);
clog.addEventListener('click', ()=> {
    con1.classList.remove('show');
}
);
clogi.addEventListener('click', ()=> {
    con1.classList.remove('show');
}
);