<template>

    <section class="detail-container">
        <div class="detail-container-child">

            <h2 class="h2tag">Reach your <span>ideal customers</span> and candidates in a couple of clicks</h2>
            <div class="detail-row first">
                <div class="row-one">
                    <h3 class="detail-heading">Access the largest local B2B database for businesses </h3>
                    <p class="detail-para">You no longer have to settle for out-of-date patchy data. Get access to the
                        most comprehensive
                        and
                        accurate local dataset. Using ZoomInfo for global data? Great, we’ll make sure your Australian
                        data
                        is more complete with more company attributes. </p>
                </div>
                <div>
                    <img class="detail-img" src="../assets/images/blobalstatisticImg.svg" alt="">
                </div>
            </div>
            <div class="detail-row second">
                <div>
                    <img class="detail-img" src="../assets/images/outTeamimg.svg" alt="">
                </div>
                <div class="row-two">
                    <h3 class="detail-heading">Know your ideal customer better than ever before</h3>
                    <p class="detail-para">With deep firmographic data sets that go beyond the basics. Don’t just
                        profile by size, revenue,
                        industry and location – you now have access to modern company attributes like website traffic,
                        reviews, social followers, and more all in the one place. </p>
                </div>
            </div>
            <div class="detail-row third">

                <div class="row-three">
                    <h3 class="detail-heading">Easy to use platform that integrates with your existing tools </h3>
                    <p class="detail-para">With deep firmographic data sets that go beyond the basics. Don’t just
                        A modern interface that makes it fast and easy to run searches, target the right companies and
                        contacts, and start putting it to use. APIs and plug and play integrations with popular
                        platforms like Salesforce and Hubspot make CRM enrichment a breeze. </p>
                </div>
                <div>
                    <img class="detail-img" src="../assets/images/trafficGrothimg.svg" alt="">
                </div>
            </div>
            <div class="detail-row four">
                <div>
                    <img class="detail-img" src="../assets/images/engagementImg.svg" alt="">
                </div>
                <div class="row-four">
                    <h3 class="detail-heading">Local Australian support to help you realise maximum value </h3>
                    <p class="detail-para">While we think our B2B database is the easiest on the market to use, we
                        understand there’s times you may need a little help. We’ve got teams on the ground to get you up
                        and running and help you start seeing results in a flash </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../assets/scss/mediaqueries.scss";
@import "../assets/scss/style.scss";

.detail-container {
    display: flex;
    justify-content: center;
    padding-inline: 20px;
    padding-block: 20px;

    .h2tag {
        @include h2tag;
        line-height: 60px;
        text-align: center;
        max-width: 900px;

        @include tab1100 {
            font-size: 25px;
            line-height: 35px;
        }
    }

    .h2tag span {
        background-image: url("../assets/images/idealcusunderlieImg.svg");
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: contain;

    }

    &-child {
        max-width: 1280px;
        gap: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        @include tab1100 {
            .detail-img {
                width: 290px;
            }
        }


        .first,
        .second,
        .third,
        .four {
            margin-bottom: 30px;
        }

        .first {
            @include tab1100 {
                display: flex;
                flex-direction: column-reverse;
            }
        }

        .first::before {
            content: url('../assets/images/fimg.svg');
            display: block;
            position: absolute;
            left: 8px;
            top: 186px;
        }

        .second {
            @include tab1100 {
                display: flex;
                flex-direction: column;
            }
        }

        .third {
            @include tab1100 {
                display: flex;
                flex-direction: column-reverse;
            }
        }

        .four {
            @include tab1100 {
                display: flex;
                flex-direction: column;
            }
        }

        .four::after {
            content: url("../assets/images/i-img.svg");
            display: block;
            display: flex;
            align-items: end;
            position: absolute;
            bottom: 24px;
            right: 19px;
        }




        .detail-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 150px;

            @include tab1100 {
                gap: 0px;
            }

            .row-one {
                max-width: 524px;
            }

            .row-two {
                max-width: 467px;
            }

            .row-three {
                max-width: 471px;
            }

            .row-four {
                max-width: 551px;
            }


            .detail-heading {
                font-size: 33px;
                font-weight: 600;
                font-family: "Rubik", sans-serif;
                color: #183554;

                @include tab1100 {
                    font-size: 20px;
                }
            }

            .detail-para {
                font-family: "Poppins-Regular", sans-serif;
                line-height: 29px;
                color: #747474;

                @include tab1100 {
                    font-size: 15px;
                }
            }
        }
    }
}
</style>