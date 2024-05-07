<template>
    <section class="data-section">
        <div class="data-container">
            <h2 :class="[animateClassVal, 'h2tag']" ref="elementRef">Go beyond basic data with <span>deep company
                    attributes</span></h2>
            <h4 class="h4tag">Example data attributes </h4>
            <div class="first-row">
                <div class="box-parent">
                    <div class="box"><span class="">Foundational</span></div>
                </div>
                <div class="info">
                    <img src="../assets/images/locationIcon.svg" alt="">
                    <span>Location</span>
                </div>
                <div class="info">
                    <img src="../assets/images/industryIocn.svg" alt="">
                    <span>Industry</span>
                </div>
                <div class="info">
                    <img src="../assets/images/employessIcon.svg" alt="">
                    <span>Employees</span>
                </div>
                <div class="info">
                    <img src="../assets/images/emailIcon.svg" alt="">
                    <span>Email</span>
                </div>
            </div>
            <div class="first-row">
                <div class="box-parent">
                    <div class="box boxNextGen"><span class="">Next Gen</span></div>
                </div>
                <div class="info">
                    <img src="../assets/images/techstackIcon.svg" alt="">
                    <span>tech stack</span>
                </div>
                <div class="info">
                    <img src="../assets/images/webtrafficIcon.svg" alt="">
                    <span>Web traffic</span>
                </div>
                <div class="info">
                    <img src="../assets/images/reviewIcon.svg" alt="">
                    <span>Reviews</span>
                </div>
                <div class="info">
                    <img src="../assets/images/socialflowIcon.svg" alt="">
                    <span>Social followers</span>
                </div>
            </div>
            <div class="first-row">
                <div class="box-parent">
                    <div class="box boxlocal"><span class="">Local</span></div>
                </div>
                <div class="info">
                    <img src="../assets/images/mapIcon.svg" alt="">
                    <span>ABN mapping</span>
                </div>
                <div class="info">
                    <img src="../assets/images/contractIcon.svg" alt="">
                    <span>Gov contracts</span>
                </div>
                <div class="info">
                    <img src="../assets/images/relatedEntitisIcon.svg" alt="">
                    <span>Related entities</span>
                </div>
                <div class="info">
                    <img src="../assets/images/complainsIcon.svg" alt="">
                    <span>Compliance</span>
                </div>
            </div>
            <img class="blueline" src="../assets/images/blueline.svg" alt="">
        </div>
    </section>
</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const animateClassVal = ref('');


const elementRef = ref(null);
const getPosition = () => {
    if (elementRef.value) {
        const rect = elementRef.value.getBoundingClientRect();
        console.log("rect", rect);
        console.log("window.innerHeight", window.innerHeight)
        if (window.innerHeight > rect.y + 100) {
            animateClassVal.value = 'h2tagLocal'
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', getPosition);
})

onUnmounted(() => {
    window.removeEventListener('scroll');
})

</script>
<style lang="scss" scoped>
@import "../assets/scss/mediaqueries.scss";
@import "../assets/scss/style.scss";


.h2tagLocal {

    animation: slidein 1.5s !important;

    @keyframes slidein {
        from {
            transform: translateY(-100%);
        }

        to {
            transform: translateY(0%);
        }
    }
}





.data-section {
    display: flex;
    justify-content: center;
    padding-inline: 20px;

    .data-container {
        max-width: 1280px;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding-block: 60px;

        .blueline {
            position: absolute;
            top: 226px;
            left: 72px;

            @include tab700 {
                display: none;
            }
        }


        .h2tag {
            @include h2tag;
            line-height: 60px;
            text-align: center;
            max-width: 588px;
            margin-block: 0px;

            @include tab700 {
                font-size: 25px;
                line-height: 40px;
            }
        }

        .h2tag span {
            background-image: url("../assets/images/comattributUnderline.svg");
            background-repeat: no-repeat;
            background-position: bottom center;
            background-size: contain;
        }

        .h4tag {
            color: #73BFB8;
            font-size: 20px;
            font-weight: 500;
            font-family: "Poppins-Regular", sans-serif;
            text-align: center;

        }

        .box {
            border: 1px solid black;
            height: 64px;
            width: 156px;
            box-shadow: 3px 4px 3px -1px;
            margin-block: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;

        }

        .boxNextGen {
            box-shadow: 3px 4px 3px -1px #FFC000;
        }

        .boxlocal {
            box-shadow: 3px 4px 3px -1px #08A5E2;
        }

        .first-row {
            display: grid;
            grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
            width: 100%;
            align-items: center;
            margin-bottom: 40px;
            z-index: 1;

            @include tab700 {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            @include tab700 {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;

        }


        .info img {
            height: 52px;
            width: 50px;
        }
    }
}
</style>