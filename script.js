// script.js
document.addEventListener('DOMContentLoaded', () => {

    // 1️⃣ FADE-IN AO SCROLL
    const elementos = document.querySelectorAll('.corpo1, .corpo2, header, footer');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    elementos.forEach(el => observer.observe(el));

    // 2️⃣ HEADER DINÂMICO AO SCROLL
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            header.style.backgroundColor = '#4CAF50';
            header.style.color = 'white';
            header.style.padding = '20px';
            header.style.transition = 'all 0.3s ease';
        } else {
            header.style.backgroundColor = '#2d5a27';
            header.style.color = 'white';
            header.style.padding = '2rem';
        }
    });

    // 3️⃣ CLIQUE NOS ITENS DE ALTERNATIVAS
    const alternativas = document.querySelectorAll('.corpo2 ol li');
    alternativas.forEach(li => {
        li.addEventListener('click', () => {
            alternativas.forEach(el => el.style.backgroundColor = '');
            li.style.backgroundColor = '#e6f2e6';
            li.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // 4️⃣ SCROLL SUAVE PARA LINKS INTERNOS
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});