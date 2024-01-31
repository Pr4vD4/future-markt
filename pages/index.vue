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
                    } catch (e) {}
                    document.querySelectorAll('.scrolling-text').forEach((element) => {
                        element.textContent = ''
                        element.style.marginLeft = - element.getBoundingClientRect().width + 'px'
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
                                element.style.marginLeft = - (element.getBoundingClientRect().width / 100 * 95) + 'px'
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
    <header class="d-flex justify-content-center">
        <div class="content d-flex flex-column align-items-center">
            <div class="header-top-part d-flex justify-content-between">
                <div class="header-left-side d-flex flex-column position-relative">
                    <nav class="d-flex justify-content-between mt-4">
                        <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Portfolio">Portfolio</span>]</a>
                        <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Services">Services</span>]</a>
                        <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="About us">About us</span>]</a>
                        <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Contacts">Contacts</span>]</a>
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
                    <div class="d-flex justify-content-between mt-4 col-8 ">
                        <a href="#" class="nav-link d-flex align-items-center header-localization">
                            <span class="header-localization-rectangle mx-2"></span><span class="" data-initial-text="EN">EN</span>
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
                <a href="#" class="nav-link">[<span class="shuffle-text" data-initial-text="Chatbots">Chatbots</span>]</a>
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
    </header>

</template>

<style scoped>

</style>