<script>
import anime from "animejs";
import {shuffle} from "txt-shuffle";

export default {
    setup() {
        useHead({
            script: [
                {
                    src: '/js/index.js',
                    body: true
                }
            ]
        })
    },
    mounted() {
        this.addTextShuffleAnimation()
    },
    methods: {
        addTextShuffleAnimation() {

            let anim = null
            let allowText = true

            document.querySelectorAll('.shuffle-text').forEach((el) => {

                el.addEventListener('mouseleave', () => {
                    try {
                        anim.pause()
                    } catch (e) {
                    }
                    document.querySelectorAll('.scrolling-text').forEach((element) => {
                        element.textContent = ''
                        element.style.marginLeft = -element.getBoundingClientRect().width + 'px'
                    })
                    anim = anime({
                        targets: '.scrolling-text',
                        translateX: '0',
                        easing: 'linear',
                        duration: 1
                    })
                    anim = anime({
                        targets: '.noise',
                        opacity: 1,
                        duration: 399,
                    })
                })

                el.addEventListener('mouseover', () => {

                    let width = null

                    // let text = el.textContent
                    shuffle({
                        text: el.dataset.initialText,
                        fps: 60,
                        animation: 'stay',
                        duration: .4,
                        glyphs: 'qwertyuiopaasdfghjklzxcvbnm123456789!@#$%^&*()_+[],./-=',
                        onUpdate: (out) => {
                            el.textContent = out
                        }
                    })

                    anim = anime({
                        targets: '.noise',
                        opacity: 0,
                        duration: 200,
                        delay: 200,
                        complete: () => {
                            anime({
                                targets: '.noise',
                                opacity: 1,
                                duration: 500,
                            })
                            document.querySelectorAll('.scrolling-text').forEach((element) => {
                                let text = ' ' + el.dataset.initialText + ' '
                                element.textContent = text.repeat(10)
                                element.style.marginLeft = -(element.getBoundingClientRect().width / 100 * 95) + 'px'
                            })
                            anim = anime({
                                targets: '.scrolling-text',
                                translateX: '1000px',
                                loop: true,
                                easing: 'linear',
                                duration: 8000
                            })

                        }
                    })

                })
            })
        }
    }
}
// useHead({
//     script: [
//         {
//             src: '/js/index.js',
//             body: true
//         }
//     ]
// })
</script>

<template>
    <header id="header" class="d-flex justify-content-center">
        <div class="content d-flex flex-column align-items-center">
            <div class="header-top-part d-flex justify-content-between">
                <div class="header-left-side d-flex flex-column position-relative">
                    <nav class="mt-4 desktop">
                        <a href="#our-works" class="nav-link">[<span class="shuffle-text" data-initial-text="Portfolio">Portfolio</span>]</a>
                        <a href="#services" class="nav-link">[<span class="shuffle-text" data-initial-text="Services">Services</span>]</a>
                        <a href="#connect" class="nav-link">[<span class="shuffle-text" data-initial-text="Contacts">Contacts</span>]</a>
                    </nav>
                    <nav class="mobile">
                        <img src="~/assets/img/icon_menu.svg" alt="" class="menu menu-toggle">
                    </nav>
                    <div class="header-title">
                        <div class="header-side-title d-flex left-side">
                            <span class="">F</span>
                            <span class="">U</span>
                            <span class="">T</span>
                            <span class="">U</span>
                            <span class="">R</span>
                            <span class="">E</span>
                        </div>
                        <div class="header-left-side-subtitle ">
                            We are digital agency that is crazy about web3, web design, marketing and chatbots projects
                        </div>
                    </div>

                </div>
                <div class="header-right-side d-flex flex-column align-items-end position-relative">
                    <div class="d-flex justify-content-between mt-4 col-10 ">
                        <a href="#" class="nav-link d-flex align-items-center header-localization">
                            <span class="" data-initial-text="EN">EN</span><img src="~/assets/img/dropdown.svg" alt="" class="dropdown-icon">
                        </a>
                        <a href="#" class="nav-link nav-link-colored">[<span class="shuffle-text" data-initial-text="Discuss the future">Discuss the future</span><span
                                class="header-nav-link-arrow"><img
                                src="~/assets/img/Arrow.svg" alt="arrow"></span>]</a>
                    </div>
                    <div class="header-title">
                        <div class="header-side-title right-side">
                            <span class="">M</span><span class="">A</span><span class="">R</span><span class="">K</span><span class="">T</span>
                        </div>
                        <div class="header-right-side-subtitle ">
                            Digital agency
                        </div>
                    </div>

                </div>
            </div>
            <div class="header-bottom-part d-flex justify-content-between align-items-center">
                <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Web design">Web Design</span>]</a>
                <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Web 3">Web 3</span>]</a>
                <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Marketing">Marketing</span>]</a>
                <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="WEB DEV">WEB DEV</span>]</a>
            </div>
        </div>
        <div class="scrolling-text-container left-noise">
            <span class="scrolling-text left-scrolling"></span>

        </div>
        <div class="scrolling-text-container right-noise">
            <span class="scrolling-text right-scrolling"></span>

        </div>
        <canvas class="noise"></canvas>
        <img src="~/assets/img/man.webp" alt="man" class="man">


        <div class="mobile__content hidden">
            <div class="mobile__content-top mt-4">
                <img src="~/assets/img/icon_menu-close.svg" alt="" class="menu-toggle">

                <a href="#" class="nav-link nav-link-colored">[<span class="shuffle-text" data-initial-text="Discuss the future">Discuss the future</span><span
                        class="header-nav-link-arrow"><img
                        src="~/assets/img/Arrow.svg" alt="arrow"></span>]</a>
            </div>
            <a href="#our-works" class="nav-link">[<span class="shuffle-text" data-initial-text="Portfolio">Portfolio</span>]</a>
            <a href="#services" class="nav-link">[<span class="shuffle-text" data-initial-text="Services">Services</span>]</a>
            <a href="#connect" class="nav-link">[<span class="shuffle-text" data-initial-text="Contacts">Contacts</span>]</a>

            <a href="#" class="nav-link d-flex align-items-center header-localization">
                <span class="" data-initial-text="EN">EN</span><img src="~/assets/img/dropdown.svg" alt="" class="dropdown-icon">
            </a>

        </div>

    </header>

    <main>
        <!--   Our works    -->
        <section id="our-works">
            <div class="container our-works">

                <div class="title d-flex flex-column">
                    <h1>Our works</h1>
                    <h2>We are equally involved in both design and development of our projects</h2>
                </div>

                <div class="filters d-flex justify-content-center">
                    <div class="filter filter__active">All [0]</div>
                    <div class="filter ">Web3 [0]</div>
                    <div class="filter ">Websites [0]</div>
                    <div class="filter ">Marketing [0]</div>
                    <div class="filter ">Chatbots [0]</div>
                    <div class="filter ">Telegram Apps [0]</div>
                </div>

                <div class="filters-select">
                    <div class="filters-select-item filters-select-item__active">All [0]</div>
                    <div class="filters-select-item">Smart contracts [0]</div>
                    <div class="filters-select-item">De-fi [0]</div>
                    <div class="filters-select-item">dApp [0]</div>
                    <div class="filters-select-item">White/Litepaper [0]</div>
                </div>

                <!--       Cardboard         -->
                <div class="cardboard container-fluid">
                    <div class="big-card">
                        <div class="big-card__img-container"></div>
                        <div class="card-text">
                            <div class="card-title">
                                AP estates & capitol hill
                            </div>
                            <div class="card-subtitle">
                                Residential community in Detroit
                            </div>
                        </div>
                    </div>

                    <div class="card-small">
                        <div class="card__img-container"></div>
                        <div class="card-text">
                            <div class="card-title">
                                AP estates & capitol hill
                            </div>
                            <div class="card-subtitle">
                                Residential community in Detroit
                            </div>
                        </div>
                    </div>

                    <div class="card-small">
                        <div class="card__img-container"></div>
                        <div class="card-text">
                            <div class="card-title">
                                GU Loans
                            </div>
                            <div class="card-subtitle">
                                Web interface
                            </div>
                        </div>
                    </div>

                    <div class="card-small">
                        <div class="card__img-container"></div>
                        <div class="card-text">
                            <div class="card-title">
                                Weather chat-bot
                            </div>
                            <div class="card-subtitle">
                                Telegram bot
                            </div>
                        </div>
                    </div>

                    <div class="card-small">
                        <div class="card__img-container"></div>
                        <div class="card-text">
                            <div class="card-title">
                                First choice
                            </div>
                            <div class="card-subtitle">
                                Urgent care clinic
                            </div>
                        </div>
                    </div>

                </div>
                <!--       /Cardboard         -->

                <!--       Pagination         -->
                <div class="pagination__container container-fluid d-flex justify-content-center">
                    <div class="pagination">
                        <div class="pagination__prev">
                            <div class="pagination__arrow reverse">
                                <img src="~/assets/img/horizontal-arrow.svg" alt="">
                            </div>
                            <span>prev</span>
                        </div>

                        <div class="pagination__list">
                            <div class="pagination__list-item active">
                                1
                            </div>
                            <div class="pagination__list-item">
                                2
                            </div>
                            <div class="pagination__list-item">
                                3
                            </div>
                            <div class="pagination__list-item">
                                4
                            </div>
                            <div class="pagination__list-item">
                                5
                            </div>
                            <div class="pagination__list-item">
                                6
                            </div>
                            <div class="pagination__list-gap">
                                ...
                            </div>
                            <div class="pagination__list-item">
                                500
                            </div>
                        </div>

                        <div class="pagination__next">
                            <div class="pagination__arrow">
                                <img src="~/assets/img/horizontal-arrow.svg" alt="">
                            </div>
                            <span>next</span>
                        </div>
                    </div>
                    
                    <div class="pagination-mobile">
                        <div class="pagination-mobile-btn">
                            [Show more]
                        </div>
                        <div class="pagination-mobile-btn">
                            <img src="~/assets/img/arrow-top-black.svg" alt="">[Minimize]
                        </div>
                    </div>
                    
                </div>
                <!--       /Pagination         -->

            </div>
        </section>
        <!--   /Our works    -->

        <!--   About     -->
        <section id="about">
            <div class="about container">
                <div class="title d-flex flex-column">
                    <h1>ABoUT US</h1>
                    <h2>Future Markt is a MULTIDISCIPLINARY digital agency founded in 2012. <span class="gray">We strive for a constant innovative approach and offer our clients cutting-edge technological solutions,
                        helping them succeed in the digital environment</span></h2>
                </div>
                <div class="tv container-fluid">
                    <img src="~/assets/img/Space.png">
                </div>
            </div>
        </section>
        <!--   /About     -->

        <!--   Services     -->
        <section id="services">
            <div class="services container">
                <div class="title d-flex flex-column">
                    <h1>services</h1>
                </div>

                <div class="services__list container-fluid">
                    <div class="services__list-item">
                        <div class="services__list-item-title">
                            Web3 development
                        </div>
                        <div class="services__list-item-body">
                            <div class="services__list-products">
                                <div class="services__list-products-item">
                                    Smart contracts
                                </div>
                                <div class="services__list-products-item">
                                    dApp
                                </div>
                                <div class="services__list-products-item">
                                    De-Fi
                                </div>
                                <div class="services__list-products-item">
                                    White/Litepaper
                                </div>
                            </div>
                            <div class="services__list-item-description">
                                <span>
                                    We strive to implement the web3 products as soon as possible so that it starts generating profit. Then we conduct tests and make corrections until the project becomes
                                perfect
                                </span>
                                <div class="services__list-item-price">
                                    from $3000
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="services__list-item">
                        <div class="services__list-item-title">
                            Web products
                        </div>
                        <div class="services__list-item-body">
                            <div class="services__list-products">
                                <div class="services__list-products-item">
                                    Corporate websites
                                </div>
                                <div class="services__list-products-item">
                                    Online stores
                                </div>
                                <div class="services__list-products-item">
                                    Web services
                                </div>
                                <div class="services__list-products-item">
                                    Landing pages
                                </div>
                            </div>
                            <div class="services__list-item-description">
                                <span>We turn your technical specifications into real business tool. We love large websites and web applications, but we also work on single-page sites</span>
                                <div class="services__list-item-price">
                                    from $1000
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="services__list-item">
                        <div class="services__list-item-title">
                            Marketing
                        </div>
                        <div class="services__list-item-body">
                            <div class="services__list-products">
                                <div class="services__list-products-item">
                                    Contextual ad
                                </div>
                                <div class="services__list-products-item">
                                    Targeted ad
                                </div>
                                <div class="services__list-products-item">
                                    SEO
                                </div>
                                <div class="services__list-products-item">
                                    SMM
                                </div>
                            </div>
                            <div class="services__list-item-description">
                                <span>We take a data-driven approach to create tailored campaigns that resonate with your target audience. From social media to email marketing, we'll help you reach your
                                    goals and increase ROI</span>
                                <div class="services__list-item-price">
                                    from $1200
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="services__list-item">
                        <div class="services__list-item-title">
                            Telegram dev
                        </div>
                        <div class="services__list-item-body">
                            <div class="services__list-products">
                                <div class="services__list-products-item">
                                    Chat bots
                                </div>
                                <div class="services__list-products-item">
                                    Telegram apps
                                </div>
                            </div>
                            <div class="services__list-item-description">
                                <span>Our team develops Telegram-based chatbots and applications. With these tools, you can automate routine user interactions and ensure sales through messaging</span>
                                <div class="services__list-item-price">
                                    from $2000
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <img src="~/assets/img/connect-hand.png" alt="" class="hand">
        </section>
        <!--   /Services     -->

        <!--   Connect     -->
        <section id="connect">

            <div class="connect container">
                <div class="connect__left">
                    <img src="~/assets/img/connect-img.png" alt="">
                    <div class="title">
                        let’s connect
                    </div>
                </div>
                <div class="connect__right">
                    <div class="connect__right-item">
                        <div class="connect__right-item-title">
                            WEB3 and chatbots projects
                        </div>
                        <div class="connect__right-item-body">
                            <div class="img-container">

                            </div>
                            <div class="connect__right-item-body-text">
                                <div class="name">
                                    Dmitriy
                                </div>
                                <div class="connect-tg">
                                    [CONNECT IN TELEGRAM]
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="connect__right-item">
                        <div class="connect__right-item-title">
                            Marketing and web-design projects
                        </div>
                        <div class="connect__right-item-body">
                            <div class="img-container">

                            </div>
                            <div class="connect__right-item-body-text">
                                <div class="name">
                                    Yaroslav
                                </div>
                                <div class="connect-tg">
                                    [CONNECT IN TELEGRAM]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dots">
                <div class="">
                    •••• • •−•• •−•• −−− •−•−•− ••−• ••− − ••− •−• • −− •− •−• −•− − −−••−− •−•• • − ••• −••• ••− •• •−•• −•• ••• −−− −− • − •••• •• −• −−• •− •−− • ••• −−− −− •
                </div>
                <div class="">
                    •••• • •−•• •−•• −−− •−•−•− ••−• ••− − ••− •−• • −− •− •−• −•− − −−••−− •−•• • − ••• −••• ••− •• •−•• −•• ••• −−− −− • − •••• •• −• −−• •− •−− • ••• −−− −− •
                </div>
            </div>

        </section>
        <!--   /Connect     -->

    </main>

    <footer class="w-100 d-flex justify-content-center">
        <div class="container footer__container">
            <div class="footer__title-block">
                <div class="footer__titles">
                    <div class="footer__title">
                        FUTURE MARKT
                    </div>
                    <div class="footer__subtitle">
                        Digital agency
                    </div>
                </div>
                <div class="footer__copyright-mobile">
                    <div class="footer__copyright-mobile-text">
                        © Future Markt 2012–2023 All rights reserved
                    </div>
                    <div class="footer__copyright-mobile-text">
                        Privacy
                    </div>
                </div>
            </div>
            <div class="footer__navigation">

                <div class="footer__navigation-block">
                    <div class="footer__navigation-title">
                        Services
                    </div>
                    <div class="footer__navigation-list">
                        <div class="footer__navigation-list-item">
                            Web3
                        </div>
                        <div class="footer__navigation-list-item">
                            Web-design
                        </div>
                        <div class="footer__navigation-list-item">
                            Marketing
                        </div>
                        <div class="footer__navigation-list-item">
                            Chatbots
                        </div>
                    </div>
                </div>

                <div class="footer__navigation-block">
                    <div class="footer__navigation-title">
                        Sections
                    </div>
                    <div class="footer__navigation-list">
                        <div class="footer__navigation-list-item">
                            Cases
                        </div>
                        <div class="footer__navigation-list-item">
                            Services
                        </div>
                        <div class="footer__navigation-list-item">
                            About us
                        </div>
                        <div class="footer__navigation-list-item">
                            Contacts
                        </div>
                    </div>
                </div>

                <div class="footer__navigation-block">
                    <div class="footer__navigation-title">
                        Contacts
                    </div>
                    <div class="footer__navigation-list">
                        <div class="footer__navigation-list-item">
                            To order a project:
                        </div>
                        <div class="footer__navigation-list-item yellow">
                            Telegram
                        </div>
                        <div class="footer__navigation-list-item">
                            For all other questions:
                        </div>
                        <div class="footer__navigation-list-item yellow">
                            cmo@futuremarkt.com
                        </div>
                    </div>
                </div>

                <div class="footer__navigation-block">
                    <div class="footer__navigation-title">
                        Follow us
                    </div>
                    <div class="footer__navigation-list">
                        <div class="footer__navigation-list-item">
                            Behance
                        </div>
                        <div class="footer__navigation-list-item">
                            Instagram
                        </div>
                        <div class="footer__navigation-list-item">
                            VK
                        </div>
                        <div class="footer__navigation-list-item">
                            Youtube
                        </div>
                        <div class="footer__navigation-list-item">
                            Telegram channel
                        </div>
                    </div>
                </div>

            </div>

            <div class="footer__copyright">
                <div class="footer__copyright-text">
                    © Future Markt 2012–2023 All rights reserved
                </div>
                <div class="footer__copyright-links">
                    <div class="footer__copyright-links-privacy">
                        Privacy
                    </div>
                    <a class="footer__copyright-links-up" href="#header">
                        <img src="~/assets/img/arrow-top.svg"> UP
                    </a>
                </div>
            </div>

        </div>
    </footer>

</template>

<style scoped>

</style>