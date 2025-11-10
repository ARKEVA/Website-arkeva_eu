const Components = {
    "Top Header": function () {
        html = `
        <header>
            <a class="logo" href="./">
                <img src="./media/logo/arkeva logo text - white.png" alt="Arkeva Logo">
            </a>
            <nav>
                <div class="menu-section" data-menu-id="1"><a href="./#technologies_overview">Products</a></div>
                <div class="menu-section" data-menu-id="2"><a>Services</a></div>
            </nav>
            <a href="./contact" id="contact_btn">CONTACT SALES</a>
        </header>
        ${is_mobile ? `` : `
            <div class="submenu-container">
            <!-- Les détails de chaque options du menu seront insérés ici -->
        </div>
            `}
            `
        return html;
    },
    "Fixed Header": function () {

        let html;

        if (is_mobile) {
            // Version mobile avec menu burger
            html = `
        <header class="mobile">
            <a class="logo" href="./">
                <img src="./media/logo/arkeva logo.svg" alt="Arkeva Logo">
                <img src="./media/logo/arkeva text - white.png" alt="Arkeva white text">
            </a>
        
            <div class="burger-menu" id="burger-menu">
                <img src="./media/icon/menu.png" alt="burger menu">
            </div>
        </header>
        <div class="submenu-container">
            <a class="menu-headline" href="./#technologies_overview">Products</a>
            <ul>
                <li><a href="./spider">Spider</a></li>
                <li><a href="./eagle">Eagle</a></li>
            </ul>
            <a class="menu-headline">Services</a>
            <ul>
                <li><a href="./#implementation">Implementation</a></li>
                <li><a href="./#ai_factory">AI consultancy</a></li>
            </ul>
            <a class="menu-headline" href="./contact" id="contact_btn">Contact</a>
        </div>
        `;
            $(document).ready(function () {
                // Ouvrir/fermer le menu avec le bouton burger
                $('#burger-menu').on('click', function (e) {
                    e.stopPropagation(); // Empêcher la propagation pour éviter la fermeture immédiate
                    $('.submenu-container').slideToggle();
                    $(this).toggleClass('active');
                });

                // Fermer le menu si on clique en dehors
                $(document).on('click', function (e) {
                    if (!$(e.target).closest('.submenu-container, #burger-menu').length) {
                        // Si le clic n'est pas dans le menu ou le bouton
                        $('.submenu-container').slideUp(); // Fermer le menu
                        $('#burger-menu').removeClass('active'); // Réinitialiser l'état du bouton
                    }
                });
            });


        } else {
            // Version desktop classique
            html = `
        <header>
            <a class="logo" href="./">
                <img src="./media/logo/arkeva text - colors.png" alt="arkeva text - colors">
            </a>
            <nav>
                <div class="menu-section" data-menu-id="1"><a href="./#technologies_overview">Products</a></div>
                <div class="menu-section" data-menu-id="2"><a href="#">Services</a></div>
            </nav>
            <a href="./contact" id="contact_btn">CONTACT SALES</a>
        </header>
        <div class="submenu-container">
            <!-- Les détails de chaque options du menu seront insérés ici -->
        </div>
        `;
        }

        // Ajout des interactions pour le menu burger
        setTimeout(() => {
            const burgerMenu = document.getElementById('burger-menu');
            const mobileNav = document.getElementById('mobile-nav');

            if (burgerMenu && mobileNav) {
                burgerMenu.addEventListener('click', () => {
                    mobileNav.classList.toggle('hidden');
                    burgerMenu.classList.toggle('active');
                });
            }
        }, 0);

        return html;
    },

    "Footer": function () {
        html = `
        <div class="social_medias">
            <p>Follow us</p>
            <a href="https://www.linkedin.com/company/ark%C3%A9va" target="_blank"><img class="social_icon" src="./media/icon/linkedin.png" alt="Linkedin"></a>
        </div>
        <hr>
         <div id="site_structure">
            <div class="site_section">
                <h4>Products</h4>
                <a href="./spider">Spider</a>
                <a href="./eagle">Eagle</a>
            </div>
            
            <div class="site_section">
                <h4>Services</h4>
                <a href="./#implementation">Implementation</a>
                <a href="./#ai_factory">AI consultancy​</a>
            </div>

            <div class="site_section">
                <h4>Contact</h4>
                <a href="./contact">Contact us</a>
                <a href="./contact#meeting-form">Schedule Meeting</a>
            </div>
        </div>
        <hr>

        <p>© 2024 Arkeva. All rights reserved.</p>
        <div id="site_policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security Notice</a>
        </div>
        `
        return html;
    },
    "Products": function () {
        var html = ""
        technologies_infos.forEach(technology => {
            html += `
        <div class="technology_container" onclick="window.location.href='${technology.link}'">
            <div class="cover">
                <img src="./media/img/${technology.cover}" alt="product_cover">
            </div>
            <div class="content">
                <h5>${technology.name}</h5>
                <div>${technology.description}</div>
            </div>
            <div class="arrow">
                <img src="./media/icon/arrow.svg" alt="see product arrow">
            </div>
        </div>
            `
        });
        return html;
    },
    "Services": function () {
        var html_main = ''
        var html_others = ''
        services_infos.forEach(service => {
            var temp_html = `
            <div class="square_info">
                <div class="cover" id="" style="background-image: url('./media/img/services/${service.cover}');"></div>
                <div class="title">
                    <h5>${service.name}</h5>
                    <!--<button>Read more</button>-->
                </div>
            </div>
            `
            if (service.order === 1) {
                html_main = `
                <div class="main_service">
                    <p style="background-color:red">[A remplacer] <br>
                    Texte de description des différents projets développés au sein de Arkeva. Un paragraphe plutôt long
                        comme sur le template trouvé sur le site serait pas mal pour les dimensions du rectangle.</p>
                        ${temp_html}
                </div>`
            } else {
                html_others += temp_html
            }
        });
        html_others = `
        <div class="carroussel">
            <h3>Explore more</h3>
            <div class="carroussel_content">
                ${html_others}
            </div>
        </div>
        `
        return html_main + html_others
    }
};





function GetComponent(componentName, targetElement) {
    if (Components[componentName]) {
        targetElement.html(Components[componentName]());
    } else {
        console.warn(`Component "${componentName}" not found.`);
    }
}




// ____________________________________________________________________
$(document).ready(function () {
    $('[data-component]').each(function () {
        const componentName = $(this).data('component');
        GetComponent(componentName, $(this));
    });
});



// HEADER SCROLL ____________________________________________________________________
$(document).ready(function () {
    function checkScroll() {
        if ($(window).scrollTop() > 500) {
            // L'utilisateur a scrollé vers le bas
            $('#top_header').fadeOut();
            $('#fixed_header').fadeIn();
        } else {
            // L'utilisateur est en haut de la page
            $('#top_header').fadeIn();
            $('#fixed_header').fadeOut();
        }
    }

    // Vérifier le scroll au chargement de la page
    checkScroll();

    // Vérifier le scroll à chaque mouvement de scroll
    $(window).on('scroll', checkScroll);
});








// HEADER SUBMENU JS ____________________________________________________________________
$(document).ready(function () {
    const $sectionTitles = $('.menu-section');
    const $detailContainer = $('.submenu-container');

    // Variable pour garder la trace de la section actuelle survolée
    let currentHoveredTitle = null;
    let hideTimeout = null; // Variable pour le timeout

    // Fonction pour afficher les détails
    function showDetails(detailHTML) {
        $detailContainer.html(detailHTML);
        $detailContainer.show();
        InitiateSubMenuContent()
    }

    // Fonction pour cacher les détails
    function hideDetails() {
        $detailContainer.hide();
        $sectionTitles.removeClass('active')
    }

    // Ajouter des écouteurs d'événements pour chaque titre de section
    $sectionTitles.hover(
        function () {
            // Mouse enter
            $sectionTitles.removeClass('active')
            $(this).addClass('active')
            const menu_id = parseInt($(this).data('menu-id'));
            const matchedItem = submenu_html.find(item => item.id === menu_id);
            if (matchedItem) {
                // Récupère le contenu HTML de l'objet trouvé
                const detailHTML = matchedItem.html;

                // Affiche les détails en utilisant la fonction `showDetails`
                showDetails(detailHTML);
            } else {
                console.error("Aucun contenu trouvé pour le menu ID: " + menu_id);
            }
            currentHoveredTitle = $(this);

            // Annule le hideTimeout si l'utilisateur survole à nouveau le menu
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
        },
        function (event) {
            // Mouse leave
            hideTimeout = setTimeout(function () {
                // Si la souris n'est pas sur le conteneur de détails, cacher les détails
                if (!$detailContainer.is(event.relatedTarget) && !$detailContainer.has(event.relatedTarget).length) {
                    hideDetails();
                    currentHoveredTitle = null;
                }
            }, 10000);
        }
    );

    // Ajouter des écouteurs d'événements pour le conteneur de détails
    $detailContainer.hover(
        function () {
            // Mouse enter
            if (hideTimeout) {
                clearTimeout(hideTimeout); // Annule le timeout si la souris entre dans le sous-menu
                hideTimeout = null;
            }
        },
        function (event) {
            // Mouse leave
            hideTimeout = setTimeout(function () {
                // Si la souris n'est plus sur le conteneur de détails, cacher les détails
                if (!currentHoveredTitle || !currentHoveredTitle.is(event.relatedTarget)) {
                    hideDetails();
                    currentHoveredTitle = null;
                }
            }, 100); // 1 seconde de délai avant de cacher
        }
    );
});


// HEADER SUB-MENU CONTENT HOVER
function InitiateSubMenuContent() {



    $('.submenu-container .flex_col .product').hover(function () {
        // Récupérer l'ID de la div survolée
        const divId = $(this).data('id');
        $('.submenu-container .flex_col .product').removeClass('active')
        $(this).addClass('active')

        // Chercher les données correspondantes dans le tableau productData
        const matchedProduct = productData.find(item => item.id === divId);
        console.log(matchedProduct)

        // Si des données sont trouvées, mettre à jour le contenu
        if (matchedProduct) {
            // Mettre à jour le titre et la description dans .product_cover
            $('.product_cover p').text(matchedProduct.description);
            $('.product_cover').css("background", `linear-gradient(20deg, rgba(163, 77, 113, 0.6) 1.74%, rgb(45, 78, 129, .6) 98.26%), url("${matchedProduct.image}")`);
        }
    });

    // INITIALISER L'AFFICHAGE DU PREMIER PRODUIT
    $(".submenu-container .flex_col .product:first").trigger("mouseenter");

}