<template>
    <div class="card-container-parent">
        <div class="card-container">
            <div class="first">
                <h2 :class="[animateClassVal, 'second h2tag']" ref="elementRef">A data solution for
                    <span class="everyteam">every team,</span> <br>
                    all in one platform
                </h2>

                <img class="girlbg" src="../assets/images/cardgirlimg.svg" alt="">

            </div>


            <div class="small-card-container">
                <div class="seprate-card">


                    <Card class="card second-card card-wrapper" style=" overflow: hidden">
                        <template #header>
                            <img class="card-img" alt="user header" src="../assets/images/sales-icon.svg" />
                        </template>
                        <template #title> <span class="cardtitle">Sales</span> </template>
                        <template #content>
                            <p class="m-0 cardpara">
                                Less searching, more time selling. For sales to prospect, prioritise, and connect
                                with
                                their
                                ideal customer.
                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 learn-more">
                                <span>Learn More</span>
                                <i class="pi pi-arrow-right righticon"></i>
                            </div>
                        </template>
                    </Card>

                    <Card class="card third-card card-wrapper" style=" overflow: hidden">
                        <template #header>
                            <img class="card-img" alt="user header" src="../assets/images/recruimenticon.svg" />
                        </template>
                        <template #title> <span class="cardtitle">Recruitment</span> </template>
                        <template #content>
                            <p class="m-0 cardpara">
                                Less searching, more time selling. For sales to prospect, prioritise, and connect
                                with
                                their
                                ideal customer.
                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 learn-more">
                                <span>Learn More</span>
                                <i class="pi pi-arrow-right righticon"></i>
                            </div>
                        </template>
                    </Card>

                </div>
                <div class="seprate-card">

                    <Card class="card fourth-card card-wrapper" style=" overflow: hidden">
                        <template #header>
                            <img class="card-img" alt="user header" src="../assets/images/marketingicon.svg" />
                        </template>
                        <template #title>
                            <span class=" cardtitle">Marketing</span>
                        </template>
                        <template class="" #content>
                            <p class="m-0 cardpara">
                                Less searching, more time selling. For sales to prospect, prioritise, and connect
                                with
                                their
                                ideal customer.
                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 learn-more">
                                <span>Learn More</span>
                                <i class="pi pi-arrow-right righticon"></i>
                            </div>
                        </template>
                    </Card>

                    <Card class="card five-card card-wrapper" style=" overflow: hidden">
                        <template #header>
                            <img class="card-img" alt="user header" src="../assets/images/marketInllicon.svg" />
                        </template>
                        <template #title> <span class="cardtitle">Market Intelligence</span> </template>
                        <template #content>
                            <p class="m-0 cardpara">
                                Less searching, more time selling. For sales to prospect, prioritise, and connect
                                with
                                their
                                ideal customer.
                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 learn-more">
                                <span>Learn More</span>
                                <i class="pi pi-arrow-right righticon"></i>
                            </div>
                        </template>
                    </Card>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


import Card from 'primevue/card';
import 'primeicons/primeicons.css'
import { ref, onMounted, onUnmounted } from 'vue';

const animateClassVal = ref('');


const elementRef = ref(null);
const getPosition = () => {
    if (elementRef.value) {
        const rect = elementRef.value.getBoundingClientRect();
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




.card-container-parent {
    background: #F9F9F9;
    padding-inline: 20px;

    .card-container {
        max-width: 1280px;
        margin: auto;
        display: flex;
        gap: 30px;
        justify-content: center;
        padding-block: 90px;
        position: relative;

        @include tablet {
            gap: 15px;
        }

        @include tab1024 {
            gap: 20px !important;
        }

        @include tab700 {
            flex-direction: column;
        }

        &::before {
            content: url('../assets/images/fimg.svg');
            display: block;
            position: absolute;
            left: 12px;
            top: 66px;
        }

        @include desktop-larg {
            &::before {
                left: -12px;
                top: 71px;
            }

        }

        &::after {
            content: url("../assets/images/i-img.svg");
            display: block;
            display: flex;
            align-items: end;
            position: absolute;
            bottom: 54px;
            right: 20px;
        }

        @include desktop-larg {
            &::after {
                bottom: 60px;
                right: -8px;
            }

        }

        .h2tag {
            font-size: 32px;
            font-weight: 700;
            font-family: "Rubik", sans-serif;
            justify-content: center;
            padding-left: 22px;
            line-height: 48px;
            color: #183555;

            @include tablet {
                font-size: 20px;
                line-height: 25px;
            }
        }

        .everyteam {
            background-image: url('../assets/images/everyteamline.svg');
            background-repeat: no-repeat;
            background-position: bottom;

        }


        .first {
            background: white;
            max-width: 385px;
            border-radius: 12px;
            background-image: url('../assets/images/bgDesign-1 1.svg');
            background-repeat: no-repeat;
            position: relative;
            background-position: left;
            min-width: 340px;

            @include tab700 {
                height: 600px !important;
                min-width: 280px;
            }

            @include tablet {

                min-width: 260px;
            }

            @include desktop-larg {

                max-width: 100%;
            }


            .girlbg {
                position: absolute;
                bottom: 0;

                @include tablet {
                    height: 390px;
                }
            }
        }
    }

}

@include desktop-larg {
    .seprate-card {
        width: 50%;
    }
}

@include tab700 {
    .seprate-card {
        width: 100%;
    }
}


.learn-more {
    margin-top: 14px;

    @include desktop-larg {
        margin-top: 0px;
    }
}

.learn-more span {
    color: #08A5E2;
    margin-right: 5px;
    font-weight: 600;
    font-size: 15px;
    font-family: "Rubik", sans-serif;
}

.righticon {
    color: #08A5E2;
    font-weight: 600;
    font-size: 15px;
}

.card-img {
    padding-left: 18px;
    padding-top: 14px;
}

.card {
    padding-block: 10px;
}

.small-card-container {
    display: flex;
    gap: 30px;

    @include tablet {
        gap: 15px;
    }

    @include tab1024 {
        gap: 20px;
    }


    .card-wrapper {
        max-width: 385px !important;
        padding-top: 32px;
        padding-bottom: 17px;
        padding-inline: 7px;

        @include tab820 {
            padding-top: 0px;
            padding-bottom: 0px;
            padding-inline: 0px;
        }

        @include tab700 {
            padding-top: 0px;
            padding-bottom: 0px;
            padding-inline: 0px;
        }

        &:hover {
            background: #73BFB8;
            transition: 500ms ease-in-out;
            cursor: pointer;
        }

        @include desktop-larg {
            max-width: 100% !important;
        }

    }

    .cardpara {
        color: #747474 !important;
        font-family: "Poppins-Regular", sans-serif;
        margin-top: 6px;

        @include tab700 {
            margin-block: 0px;
            font-size: 12px;
        }
    }

    .cardtitle {
        font-weight: 600;
        font-family: "Rubik";

        @include tablet {
            font-size: 16px;
        }
    }

    .card-wrapper:hover .cardtitle,
    .cardpara {
        color: white;
    }

    .card-wrapper:hover .cardpara {
        color: white !important;
    }

    .card-wrapper:hover .righticon {
        color: white !important;
    }

    .card-wrapper:hover .learn-more span {
        color: white;
    }


    .second-card {
        margin-bottom: 30px;

        @include tablet {
            margin-bottom: 15px;
        }

        @include tab1024 {
            margin-bottom: 20px;
        }
    }

    .fourth-card {
        margin-bottom: 30px;

        @include tablet {
            margin-bottom: 15px;
        }

        @include tab1024 {
            margin-bottom: 20px;
        }
    }
}


.cardpara {
    color: black !important;
}


.marketing-title {
    color: white !important;
    font-size: 20px;
    margin-block: 0px;
}


.marketing-learn-more {

    color: white !important;
}




@include tab700 {
    .small-card-container {
        display: flex;
        flex-direction: column !important;
    }
}
</style>