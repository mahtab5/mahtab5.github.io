const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlist');
    const navlist = document.querySelectorAll('.navlist li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlist.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navfade 1s ease forwards ${index / 5 + 0.5}s`;
            }
        });
    });

}

navslide();
