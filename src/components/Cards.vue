<template>
    <div class="card-container-parent">
        <div class="card-container">
            <div class="first">
                <h2 class="h2tag">A data solution for
                    every team,
                    all in one platform</h2>

                <img class="girlbg" src="../assets/images/cardgirlimg.svg" alt="">

            </div>


            <div class="small-card-container">
                <div>

                    <div>
                        <Card class="card second-card card-wrapper" style=" overflow: hidden">
                            <template #header>
                                <img class="card-img" alt="user header" src="../assets/images/sales-icon.svg" />
                            </template>
                            <template #title>Sales</template>
                            <template #content>
                                <p class="m-0">
                                    Less searching, more time selling. For sales to prospect, prioritise, and connect
                                    with
                                    their
                                    ideal customer.
                                </p>
                            </template>
                            <template #footer>
                                <div class="flex gap-3 mt-1 learn-more">
                                    <span>Learn More</span>
                                    <img alt="user header" src="../assets/images/leftarrowicon.svg" />
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div>
                        <Card class="card third-card card-wrapper" style=" overflow: hidden">
                            <template #header>
                                <img class="card-img" alt="user header" src="../assets/images/sales-icon.svg" />
                            </template>
                            <template #title>Sales</template>
                            <template #content>
                                <p class="m-0">
                                    Less searching, more time selling. For sales to prospect, prioritise, and connect
                                    with
                                    their
                                    ideal customer.
                                </p>
                            </template>
                            <template #footer>
                                <div class="flex gap-3 mt-1 learn-more">
                                    <span>Learn More</span>
                                    <img alt="user header" src="../assets/images/leftarrowicon.svg" />
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
                <div>
                    <div>
                        <Card class="card fourth-card card-wrapper" style=" overflow: hidden">
                            <template #header>
                                <img class="card-img" alt="user header" src="../assets/images/sales-icon.svg" />
                            </template>
                            <template #title>Sales</template>
                            <template #content>
                                <p class="m-0">
                                    Less searching, more time selling. For sales to prospect, prioritise, and connect
                                    with
                                    their
                                    ideal customer.
                                </p>
                            </template>
                            <template #footer>
                                <div class="flex gap-3 mt-1 learn-more">
                                    <span>Learn More</span>
                                    <img alt="user header" src="../assets/images/leftarrowicon.svg" />
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div>
                        <Card class="card five-card card-wrapper" style=" overflow: hidden">
                            <template #header>
                                <img class="card-img" alt="user header" src="../assets/images/sales-icon.svg" />
                            </template>
                            <template #title>Sales</template>
                            <template #content>
                                <p class="m-0">
                                    Less searching, more time selling. For sales to prospect, prioritise, and connect
                                    with
                                    their
                                    ideal customer.
                                </p>
                            </template>
                            <template #footer>
                                <div class="flex gap-3 mt-1 learn-more">
                                    <span>Learn More</span>
                                    <img alt="user header" src="../assets/images/leftarrowicon.svg" />
                                </div>
                            </template>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import Card from 'primevue/card';

</script>
<style lang="scss" scoped>
@import "../assets/scss/mediaqueries.scss";

.card-container-parent {
    background: #F9F9F9;
    padding-inline: 20px;

    .card-container {
        max-width: 1440px;
        margin: auto;
        display: flex;
        gap: 30px;
        justify-content: center;
        padding-block: 60px;
        position: relative;

        @media (max-width:1400px) {
            flex-direction: column;
        }

        &::before {
            content: url('../assets/images/fimg.svg');
            display: block;
            position: absolute;
            left: 70px;
            top: 29px;
        }

        &::after {
            content: url("../assets/images/i-img.svg");
            display: block;
            display: flex;
            align-items: end;
            position: absolute;
            bottom: 21px;
            right: 85px;
        }

        .h2tag {
            font-size: 32px;
            font-weight: 700;
            font-family: "Rubik", sans-serif;
            display: flex;
            justify-content: center;
            padding-left: 22px;
        }

        .first {
            background: white;
            max-width: 385px;
            border-radius: 12px;
            background-image: url('../assets/images/bgDesign-1 1.svg');
            background-repeat: no-repeat;
            position: relative;
            background-position: left;

            @media (max-width:1400px) {
                height: 787px;
                width: 100% !important;
            }


            .girlbg {
                position: absolute;
                bottom: 0;
            }
        }
    }

}


.learn-more span {
    color: #08A5E2;
    margin-right: 5px;
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

        @media (max-width:1400px) {
            width: 100%;
        }

    }

    .second-card {
        margin-bottom: 30px;


    }

    .fourth-card {
        margin-bottom: 30px;
    }

}
</style>