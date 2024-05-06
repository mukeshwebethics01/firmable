<template>
    <section>
        <div class="bgcolorimg">
            <div class="hero">

                <div class="hero-text">
                    <h1>Drive smarter decisions with Australia's definitive B2B database </h1>
                    <p>Outperform by knowing more about your leads, customers, and candidates – unlocked by the experts
                        in
                        local
                        business and market intelligence</p>
                    <div>
                        <Button class="header-button" label="Warning" severity="warning" rounded>Get early access
                        </Button>
                        <Button class="watch-btn" label="Secondary" severity="secondary" outlined>Watch Video</Button>
                    </div>
                </div>
                <div>
                    <img class="hero-img" src="../assets/images/hero-image.svg" alt="">
                </div>

            </div>

        </div>
    </section>


    <div>
        <div class="logos-parent">
            <h2 class="h2taganimation">Australia’s <span class="busUnderline">#1 business</span> database as trusted by
            </h2>
            <div class="logos">
                <img src="../assets/images/brandlogoone.svg" alt="">
                <img src="../assets/images/builddxact.svg" alt="">
                <img src="../assets/images/payapps.svg" alt="">
                <img src="../assets/images/fresho.svg" alt="">
            </div>
        </div>
    </div>

</template>
<script setup>
import Button from 'primevue/button';
// import "../assets/images/businesunderlineImg.svg"
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
@import "../assets/scss/mediaqueries.scss";

.bgcolorimg {
    background-image: url('../assets/images/herosectionbgcolor.svg');
    background-repeat: no-repeat;
    min-height: 75vh;
    background-size: contain;

    @include larg1850 {
        min-height: 0vh;
        background-size: auto;
    }


}


.hero {
    display: flex;
    padding-block: 50px;
    padding-bottom: 259px;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-inline: 10px !important;
    align-items: center;
    padding-top: 136px;

    @include tablet {
        padding-bottom: 102px;
    }

    @include desktop-larg {
        gap: 10px;
    }

    @include tab1100 {
        flex-direction: column;
        align-items: center;
    }

    .hero-img {
        @include desktop-larg {
            height: 330px;
        }

        @include tablet {
            height: 220px;
            margin-top: 10px
        }
    }
}


.hero-text {

    animation: slidein 1.5s !important;

    @keyframes slidein {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0%);
        }
    }

    @include tab1100 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.hero-text h1 {
    color: white;
    font-size: 46px;
    font-weight: 700;
    max-width: 601px;
    line-height: 59px;
    font-family: "Rubik", sans-serif;


    @include tablet {
        font-size: 20px !important;
        line-height: 35px !important;
    }

    @include tab1100 {
        text-align: center;
        max-width: 700px !important;
    }

    @include desktop-larg {
        font-size: 33px;
        max-width: 550px;
        line-height: 45px;
        margin-block: 0px;
    }

}

.hero-text p {
    color: white;
    font-size: 20px;
    line-height: 31px;
    max-width: 550px;
    font-family: "Poppins", sans-serif;

    @include tablet {
        font-size: 16px !important;
    }

    @include tab1100 {
        text-align: center;
        max-width: 700px !important;
    }

    @include desktop-larg {
        font-size: 18px;
        max-width: 450px;
    }

}

.watch-btn {
    border-radius: 45px;
    color: white;
    margin-left: 18px;
    padding-block: 13px;
    padding-inline: 20px;

    @include tablet {
        padding-block: 8px;
        padding-inline: 10px;
        font-size: 15px
    }

    &:hover {
        color: #2D2DB0E8;
    }
}

.header-button {
    @include btnStyle;
    padding-block: 13px;
    padding-inline: 32px;

    @include tablet {
        padding-block: 8px;
        padding-inline: 10px;
        font-size: 15px
    }

    &:hover {
        @include btnHover;
    }
}

.logos-parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 10px;
    padding-block: 40px;

    .logos {
        display: flex;
        align-items: center;
        gap: 155px;
        padding-inline: 10px;

        @include tablet {
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px !important;
        }

        @include desktop-larg {
            gap: 78px;
        }
    }




}

.h2taganimation {

    animation: slide-down 1s forwards;

}


@keyframes slide-down {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}


.logos-parent h2,
span {
    @include h2tag;

    .busUnderline {
        background-image: url("../assets/images/businesunderlineImg.svg");
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: contain;
    }

    @include tablet {
        text-align: center;
        font-size: 20px !important;
    }

    @include desktop-larg {
        font-size: 30px;
    }
}
</style>