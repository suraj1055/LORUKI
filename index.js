const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const body = document.querySelector('.body');

function init() {
    setTimeout(() => {
        
        loader.style.opacity = '0';

        loader.style.display = 'none';

        main.style.display = 'block';

        body.style.height = '0';

        setTimeout(() => {
            main.style.opacity = '1';
        }, 50)

    }, 4000);
}

init();