<template>
    <div class="card-container-parent">
        <div class="card-container">
            <div class="first">
                <h2 class="h2tag">A data solution for
                    every team,
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
                            <h2 class="marketing-title">Marketing</h2>
                        </template>
                        <template class="" #content>
                            <p class="m-0 marketinf-para">
                                Less searching, more time selling. For sales to prospect, prioritise, and connect
                                with
                                their
                                ideal customer.
                            </p>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1 learn-more ">
                                <span class="marketing-learn-more">Learn More</span>
                                <img alt="user header" src="../assets/images/whiteRightarrow.svg" />
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
</script>
<style lang="scss" scoped>
@import "../assets/scss/mediaqueries.scss";
@import "../assets/scss/mediaqueries.scss";
@import "../assets/scss/style.scss";

.card-container-parent {
    background: #F9F9F9;
    padding-inline: 20px;

    .card-container {
        max-width: 1280px;
        margin: auto;
        display: flex;
        gap: 30px;
        justify-content: center;
        padding-block: 60px;
        position: relative;

        @include desktop-larg {
            flex-direction: column;
        }

        &::before {
            content: url('../assets/images/fimg.svg');
            display: block;
            position: absolute;
            left: 14px;
            top: 38px;
        }

        @include desktop-larg {
            &::before {
                left: -12px;
                top: 39px;
            }

        }

        &::after {
            content: url("../assets/images/i-img.svg");
            display: block;
            display: flex;
            align-items: end;
            position: absolute;
            bottom: 30px;
            right: 22px;
        }

        @include desktop-larg {
            &::after {
                bottom: 27px;
                right: -8px;
            }

        }

        .h2tag {
            font-size: 32px;
            font-weight: 700;
            font-family: "Rubik", sans-serif;
            display: flex;
            justify-content: center;
            padding-left: 22px;
            color: #183555;

            @include tablet {
                font-size: 20px;
            }
        }

        // .h2tag span {
        //     font-size: 32px !important;
        //     font-weight: 700;
        //     color: #183555;
        //     font-family: "Rubik", sans-serif;
        // }

        .first {
            background: white;
            max-width: 385px;
            border-radius: 12px;
            background-image: url('../assets/images/bgDesign-1 1.svg');
            background-repeat: no-repeat;
            position: relative;
            background-position: left;

            @include tablet {
                height: 600px !important;
            }

            @include desktop-larg {
                height: 787px;
                max-width: 100%;
            }


            .girlbg {
                position: absolute;
                bottom: 0;
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




.learn-more span {
    color: #08A5E2;
    margin-right: 5px;
}

.righticon {
    color: #08A5E2;
}

.card-img {
    padding: 24px;
}

.card {
    padding-block: 10px;
}

.small-card-container {
    display: flex;
    gap: 30px;



    .card-wrapper {
        max-width: 385px !important;

        &:hover {
            background: #73BFB8;
            transition: 500ms ease-in-out;
            cursor: pointer;
        }

        @include desktop-larg {
            max-width: 100% !important;
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
    }

    .fourth-card {
        margin-bottom: 30px;
        background: #73BFB8;
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

.marketinf-para {
    color: white;
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