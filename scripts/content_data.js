const technologies_infos = [
    {
        "name": "Spider",
        "description": "Reduce machine downtime through efficient corrective and predictive maintenance",
        "cover": "cover-spider.webp",
        "link": "./spider"
    },
    {
        "name": "Eagle",
        "description": "Save time and money on your warehouse management assets by getting simulations in real time",
        "cover": "cover-eagle.webp",
        "link": "./eagle"
    }
]


const services_infos = [
    {
        "order": 1,
        "name": "Predictive maintenance",
        "cover": "Predictive maintenance.png",
        "link": "#"
    },
    {
        "order": 2,
        "name": "Research on biology, manta",
        "cover": "research on biology.png",
        "link": "#"
    },
    {
        "order": 3,
        "name": "Software on lidar",
        "cover": "software on lidar.png",
        "link": "#"
    },
    {
        "order": 4,
        "name": "AI in robotics",
        "cover": "ai in robotics.png",
        "link": "#"
    },
    {
        "order": 5,
        "name": "Detection of gold fields",
        "cover": "detection of gold fields.png",
        "link": "#"
    },

]





const submenu_html = [
    {
        "id": 1,
        "html": `
        <div class="flex_row">
            <div class="flex_col">
                <a class="product" data-id="1" href="./spider">
                    <h5>SPIDER</h5>
                    <p>Leveraging AI to reduce machine downtime​</p>
                </a>
                <a class="product" data-id="2" href="./eagle">
                    <h5>EAGLE</h5>
                    <p>Foreseeing the best management for your warehouse​</p>
                </a>
            </div>
            <div class="product_cover">
                <p></p>
            </div>

            <a class="product_contact" href="./contact">
                <p class="more_infos">More infos ?</p>
                <p>Get in touch with us to explore how our technology can be seamlessly integrated into your business.</p>
                <img class="arrow" src="./media/icon/long-arrow-right.png" alt="open contact us page arrow">
            </a>
        </div>
        `
    },
    {
        "id": 2,
        "html": `
        <div class="flex_row">
            <div class="flex_col">
                <a class="product" data-id="11" href="./#implementation">
                    <h5>Implementation</h5>
                    <p>Our wining approach to successfully implement our products</p>
                </a>
                <a class="product" data-id="12" href="./#ai_factory">
                    <h5>Tailored use cases and AI consultancy</h5>
                    <p>Leveraging cutting-edge AI technology to best fit your use cases​</p>
                </a>
            </div>
            <div class="product_cover">
                <p></p>
            </div>

            <a class="product_contact" href="./contact">
                <p class="more_infos">More infos ?</p>
                <p>Get in touch with us to explore how our technology can be seamlessly integrated into your business.</p>
                <img class="arrow" src="./media/icon/long-arrow-right.png" alt="open contact us page arrow">
            </a>
        </div>
        `
    },
]

const productData = [
    // Données onglet menu produits
    {
        id: 1,
        description: "Reduce machine downtime through efficient corrective and predictive maintenance",
        image: "./media/img/cover-spider.webp"
    },
    {
        id: 2,
        description: "Save time and money on your warehouse management assets by getting simulations in real time",
        image: "./media/img/cover-eagle.webp"
    },

    // Données onglet menu services
    {
        id: 11,
        description: "",
        image: "./media/img/cover-implementation.jpg"
    },
    {
        id: 12,
        description: "",
        image: "./media/img/cover-services.webp"
    }
];
