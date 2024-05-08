<template>
    <section class="section">
        <div class="container">
            <div class="left">
                <h2 :class="[animateClassVal]" ref="elementRef">Hear how our customers <span>drive impact</span>
                    with better data </h2>
                <p>Read more success stories <i class="pi pi-arrow-right"></i> </p>
            </div>
            <div class="right">
                <div class="text-container">
                    <p>“Firmable has helped us map our ideal customer profile and identify the companies we need to
                        target, and in what order. The reach, depth, and quality of the data is like no other database
                        I’ve seen in Australia</p>
                    <h4>Stevanie Risa</h4>
                    <p>Marketing Manager at Firmable</p>
                </div>
                <!-- <img class="smilegirl" src="../assets/images/smilegirlimg.svg" alt=""> -->
                <!-- <template>
                    <div class="card">
                        <div class="mb-3">
                            <Button icon="pi pi-minus" @click="prev" />
                            <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
                        </div>

                        <Galleria v-model:activeIndex="activeIndex" :value="images"
                            :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                            <template #item="slotProps">
                                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                            </template>
<template #thumbnail="slotProps">
                                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
                            </template>
</Galleria>
</div>
</template> -->
            </div>
        </div>
    </section>
</template>

<script setup>
import 'primeicons/primeicons.css'
// import Galleria from 'primevue/galleria';
import { ref, onMounted, onUnmounted } from 'vue';

// import { PhotoService } from '@/service/PhotoService';

// onMounted(() => {
//     PhotoService.getImages().then((data) => (images.value = data));
// });

// const images = ref();
// const activeIndex = ref(2);
// const responsiveOptions = ref([
//     {
//         breakpoint: '1300px',
//         numVisible: 4
//     },
//     {
//         breakpoint: '575px',
//         numVisible: 1
//     }
// ]);

// const next = () => {
//     activeIndex.value = activeIndex.value === images.value.length - 1 ? images.value.length - 1 : activeIndex.value + 1;
// };
// const prev = () => {
//     activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
// };



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



.section {
    background-image: url("../assets/images/testimonial-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-block: 20px;
    padding-inline: 20px;

    .container {
        max-width: 1280px;
        margin: auto;
        padding-block: 50px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-top: 200px;
        padding-bottom: 110px;
        padding-inline: 20px;
        gap: 50px;

        @include tablet {
            gap: 30px !important;
            padding-top: 50px;
        }

        @include tab1100 {
            flex-direction: column;
        }

        @include desktop-larg {
            gap: 70px;
        }


        .text-container {
            background: #73BFB8;
            border-radius: 10px;
            padding-inline: 40px;
            padding-top: 40px;
            padding-bottom: 20px;
            max-width: 628px;
            position: relative;

            @include tablet {
                padding-inline: 10px
            }


            &::before {
                content: url('../assets/images/quote.svg');
                position: absolute;
                top: -38px;
                left: 45px;
            }

            &::after {
                content: url("../assets/images/smilegirlimg.svg");
                position: absolute;
                right: -35px;
                bottom: -82px;
            }

            .smilegirl {
                position: absolute;
                right: -50px;
                bottom: -67px;
            }
        }

        .text-container p {
            color: white;
            font-size: 18px;
            line-height: 34px;
            font-family: "Popping-regular", sans-serif;

            @include tablet {
                font-size: 16px;
            }
        }

        .text-container h4 {
            color: white;
            font-family: "Rubik", sans-serif;
            font-weight: 500;
            font-size: 20px;

            @include tablet {
                font-size: 18px;
            }
        }

        .left {
            max-width: 505px;

            @include tab1100 {
                max-width: 100%;
            }
        }

        .left h2 {
            @include h2tag;
            line-height: 60px;


            @include tab1100 {
                font-size: 25px;
                line-height: 35px
            }
        }

        .left h2 span {
            background-image: url("../assets/images/businesunderlineImg.svg");
            background-repeat: no-repeat;
            background-position: bottom center;
        }

        .left p {
            font-size: 18px;
            font-weight: 600;
            line-height: 27px;
            color: #08A5E2;

            @include tablet {
                font-size: 16px;
            }
        }

        .right {

            display: flex;
            justify-content: center;

        }

    }
}
</style>