// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. FADE-IN AO SCROLL
    const elementos = document.querySelectorAll('.corpo1, .corpo2, header, footer');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => observer.observe(el));

    // 2. EFEITO HOVER MAIS SOFISTICADO NAS IMAGENS
    const imagens = document.querySelectorAll('img');
    imagens.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.07)';
            img.style.filter = 'brightness(1.1)';
            img.style.transition = 'all 0.4s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.filter = 'brightness(1)';
        });
    });

    // 3. HEADER DINÂMICO AO SCROLL
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

    // 4. BOTÕES PARA DESTAQUE DAS ALTERNATIVAS
    const alternativas = document.querySelectorAll('.corpo2 ol li');
    alternativas.forEach((li, index) => {
        li.addEventListener('click', () => {
            alternativas.forEach(el => el.style.backgroundColor = '');
            li.style.backgroundColor = '#e6f2e6';
            li.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    // 5. SCROLL SUAVE PARA LINKS INTERNOS
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
// animações flutuantes para imagens
document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('img');

    imagens.forEach(img => {
        let direction = 1; // 1 = para baixo, -1 = para cima
        let offset = 0;

        function floatAnimation() {
            offset += 0.2 * direction; // velocidade do movimento
            if(offset > 5 || offset < -5) direction *= -1; // inverter direção

            img.style.transform = `translateY(${offset}px) scale(1.03)`;
            img.style.transition = 'transform 0.1s linear';

            requestAnimationFrame(floatAnimation);
        }

        floatAnimation();
    });
});