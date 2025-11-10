
document.addEventListener('DOMContentLoaded', () => {
    const headlines = document.querySelectorAll('.animated-headline');
    const leftToRight = document.querySelectorAll('.animated-left-to-right');
    const rightToLeft = document.querySelectorAll('.animated-right-to-left');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Arrête d'observer une fois l'animation déclenchée
            }
        });
    }, {
        root: null, // Observe par rapport à la fenêtre
        threshold: 0.5 // Déclenche l'animation lorsque 50% de l'élément est visible
    });

    headlines.forEach((headline) => observer.observe(headline));
    leftToRight.forEach((object) => observer.observe(object));
    rightToLeft.forEach((object) => observer.observe(object));
});