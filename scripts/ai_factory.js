$(document).ready(function () {
    const image = $('.stretching-image'); // Sélectionne l'image
    const image2 = $('.scroll-effect.reverse .stretching-image'); // Sélectionne l'image
    const section = $('.scroll-effect'); // Sélectionne la section
    const section2 = $('.scroll-effect.reverse'); // Sélectionne la section
    const sectionHeight = section.height(); // Hauteur de la section

    // Variables pour le réglage manuel
    const scaleMin = 0.001; // Échelle minimale
    const scaleMax = 50.0; // Échelle maximale

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop(); // Position actuelle du scroll
        const sectionOffset = section.offset().top; // Position de la section
        const sectionOffset2 = section2.offset().top; // Position de la section
        const scrollProgress = Math.min((scrollTop - sectionOffset + 500) / sectionHeight, 1); // Progression du scroll (entre 0 et 1)
        const scrollProgress2 = Math.min((scrollTop - sectionOffset2 + 50) / sectionHeight, 1); // Progression du scroll (entre 0 et 1)

        // Calcule une échelle proportionnelle entre scaleMin et scaleMax
        const currentScale = scaleMin + scrollProgress * (scaleMax - scaleMin) * .1;
        const currentScale2 = scaleMin + scrollProgress2 * (scaleMin - scaleMax) * .1;

        // Ajuste la transformation de l'image
        image.css('transform', `scaleY(${currentScale})`);
        image2.css('transform', `scaleY(${currentScale2})`);
    });



    /* ======================================================================== */
    /* HIGHLIGHT SPAN TRANSITION */
    /* ======================================================================== */


    const spans = document.querySelectorAll('#ai_factory span');

    // Créer une instance d'IntersectionObserver avec des options adaptées
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Ajouter un délai basé sur l'index
                    setTimeout(() => {
                        entry.target.classList.add('highlight');
                    }, index * 500); // Délai de 0.5s par élément
                } else {
                    // Retirer immédiatement la classe lorsqu'il n'est plus visible
                    entry.target.classList.remove('highlight');
                }
            });
        },
        {
            root: null, // null signifie que l'observation se fait dans la fenêtre viewport
            rootMargin: '0px 0px -10% 0px', // Étendre légèrement la zone d'observation en bas
            threshold: 0.1, // Seuil minimal d'intersection (10% visible suffit)
        }
    );

    // Observer chaque <span>
    spans.forEach((span) => observer.observe(span));
    





    



    /* ======================================================================== */
    /* PERSPECTIVE WALL */
    /* ======================================================================== */

    const perspectiveContainer = document.querySelector('#ai_factory');
    const images = document.querySelectorAll('#ai_factory .image-perspective-container-2');

    let targetRotateX = 0; // Rotation cible pour X
    let targetRotateY = 0; // Rotation cible pour Y
    let currentRotateX = 0; // Rotation actuelle pour X
    let currentRotateY = 0; // Rotation actuelle pour Y
    const smoothFactor = .03; // Plus c'est petit, plus c'est lent

    // Stocker les positions initiales des images
    const initialTransforms = Array.from(images).map(image => {
        const style = window.getComputedStyle(image);
        const matrix = new DOMMatrixReadOnly(style.transform);

        return {
            rotateX: Math.atan2(matrix.m32, matrix.m33) * (180 / Math.PI),
            rotateY: Math.asin(-matrix.m31) * (180 / Math.PI),
            translateZ: matrix.m43,
        };
    });

    // Événement de mouvement de la souris
    perspectiveContainer.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Définir les cibles de rotation (limitées entre -15 et 15 degrés)
        targetRotateX = Math.min(Math.max(((clientY - centerY) / centerY) * -10, -15), 15);
        targetRotateY = Math.min(Math.max(((clientX - centerX) / centerX) * 10, -15), 15);
    });
    // Événement de disparition de la souris
    perspectiveContainer.addEventListener('mouseleave', (e) => {
        // Définir les positions de retour lorsque la souris quitte la fenêtre
        targetRotateX = 0;
        targetRotateY = 0;
    });

    // Fonction d'animation avec effet de latence
    function animate() {
        // Interpolation progressive vers les cibles
        currentRotateX += (targetRotateX - currentRotateX) * smoothFactor;
        currentRotateY += (targetRotateY - currentRotateY) * smoothFactor;

        // Appliquer les transformations pour chaque image
        images.forEach((image, index) => {
            const { rotateX, rotateY, translateZ } = initialTransforms[index];

            // Calculer les nouvelles rotations en ajoutant les variations
            const newRotateX = rotateX + currentRotateX;
            const newRotateY = rotateY + currentRotateY;

            // Appliquer les transformations
            image.style.transform = `rotateX(${newRotateX}deg) rotateY(${newRotateY}deg) translateZ(${translateZ}px)`;
        });

        // Appel de la prochaine frame pour continuer l'animation
        requestAnimationFrame(animate);
    }

    // Lancer l'animation
    animate();
    //  carroussel code pen : https://codepen.io/desandro/pen/jxwELK 






}); // Fermeture fonction "$(document).ready"



