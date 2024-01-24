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
            document.querySelectorAll('.shuffle-text').forEach((el) => {

                el.addEventListener('mouseleave', () => {
                    document.querySelector('marquee').remove()
                    anime({
                        targets: '.noise',
                        opacity: 1,
                        duration: 499,
                    })
                })

                el.addEventListener('mouseover', () => {
                    // let text = el.textContent
                    shuffle({
                        text: el.dataset.initialText,
                        fps: 60,
                        animation: 'stay',
                        duration: .35,
                        onUpdate: (out) => {
                            el.textContent = out
                        }
                    })
                    let marquee = document.createElement('marquee');
                    marquee.textContent = el.dataset.initialText;
                    marquee.behavior = 'scroll';
                    marquee.direction = 'right';
                    marquee.setAttribute('scrollamount', 25);
                    marquee.className = 'scrolling-text';
                    document.querySelector('header').append(marquee)
                    anime({
                        targets: '.noise',
                        opacity: 0,
                        duration: 500,
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
                            <span class="glow">F</span>
                            <span class="bounce-anim">U</span>
                            <span class="gradient gradient-2">T</span>
                            <span class="bounce-anim">U</span>
                            <span class="gradient gradient-1">R</span>
                            <span class="glow">E</span>
                        </div>
                        <div class="header-left-side-subtitle ">
                            We are digital agency that is crazy about web3, web design, marketing and chatbots projects
                        </div>
                    </div>

                </div>
                <div class="header-right-side d-flex flex-column align-items-end position-relative">
                    <div class="d-flex justify-content-between mt-4 col-8 ">
                        <a href="#" class="nav-link d-flex align-items-center header-localization">
                            <span class="header-localization-rectangle mx-2"></span><span class="shuffle-text" data-initial-text="EN">EN</span>
                        </a>
                        <a href="#" class="nav-link nav-link-colored">[<span class="shuffle-text" data-initial-text="Discuss the future">Discuss the future</span><span
                                class="header-nav-link-arrow"><img
                                src="~/assets/img/Arrow.svg" alt="arrow"></span>]</a>
                    </div>
                    <div class="header-title">
                        <div class="header-side-title right-side">
                            <span class="glow">M</span><span class="bounce-anim">A</span><span class="gradient-2">R</span><span class="bounce-anim">K</span><span class="glow">T</span>
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
        <canvas class="noise left-noise"></canvas>
        <canvas class="noise right-noise"></canvas>
        <img src="~/assets/img/man.webp" alt="man" class="man">
    </header>

</template>

<style scoped>

</style>