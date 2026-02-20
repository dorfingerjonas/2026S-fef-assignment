const menuWrapperOne = document.getElementById('menuWrapperOne');
const header = document.getElementsByTagName('header')[0];
const nav = document.getElementsByTagName('nav')[0];

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // widescreen
        header.style.height = '10vh';
        nav.classList.remove('transition');
        nav.classList.remove('opacity');
    } else {
        // mobile
        nav.classList.add('opacity');
        setTimeout(() => nav.classList.add('transition'), 500);
    }
});

window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        // mobile
        nav.classList.add('opacity');
        setTimeout(() => nav.classList.add('transition'), 500);
    }
});

menuWrapperOne.addEventListener('click', () => {
    const bars = [
        document.getElementById('barTransOne'),
        document.getElementById('barTransTwo'),
        document.getElementById('barTransThree')
    ];

    if (
        bars[0].className.includes('turn') &&
        bars[2].className.includes('turn')
    ) {
        bars[0].classList.toggle('turnLeft');
        bars[2].classList.toggle('turnRight');

        header.style.height = '10vh';
        nav.classList.add('opacity');

        setTimeout(() => {
            for (const bar of bars) {
                bar.classList.toggle('goToMiddle');
            }

            bars[1].classList.toggle('hide');
        }, 310);
    } else {
        for (const bar of bars) {
            bar.classList.toggle('goToMiddle');
        }

        header.style.height = '100vh';
        nav.classList.remove('opacity');

        setTimeout(() => {
            bars[0].classList.toggle('turnLeft');
            bars[1].classList.toggle('hide');
            bars[2].classList.toggle('turnRight');
        }, 310);
    }
});
