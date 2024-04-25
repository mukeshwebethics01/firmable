<template>
    <div class="footer-container">
        <div class="fmax-container">

            <div class="footer-container-child">
                <div class="one">
                    <ul class="unorder-list">
                        <li class="footer-links"><a class="footer-links-text first-link" href="#"> Solutions</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="#"> Sales</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Marketing</a> </li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Recruitment</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Market Intelligence</a> </li>
                    </ul>
                </div>
                <div class="two">
                    <ul class="unorder-list">
                        <li class="footer-links"><a class="footer-links-text first-link" href="#">Popular Use Cases</a>
                        </li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Sales prospecting</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="">List building</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="">Lead enrichment</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="">Lead scoring </a></li>
                        <li class="footer-links"><a class="footer-links-text" href="">Market research</a></li>
                    </ul>
                </div>
                <div class="three">
                    <ul class="unorder-list">
                        <li class="footer-links"><a class="footer-links-text first-link" href="#">Company</a> </li>
                        <li class="footer-links"><a class="footer-links-text" href="#"> About us</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Careers</a> </li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Blog</a> </li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Contact us</a> </li>

                    </ul>
                </div>
                <div class="four">
                    <ul class="unorder-list">
                        <li class="footer-links"><a class="footer-links-text first-link" href="#">Resources</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="#">What are firmographics?</a></li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Sales prospecting list
                                building</a>
                        </li>
                        <li class="footer-links"><a class="footer-links-text" href="#">Ideal customer profiling</a>

                        </li>
                        <li class="footer-links"> <a class="footer-links-text" href="#">Enriching CRM lead database</a>
                        </li>
                        <li class="footer-links"> <a class="footer-links-text" href="#">What is lead scoring?</a> </li>
                    </ul>
                </div>
                <div class="five">
                    <Button class="footer-btn" label="Warning" severity="warning" rounded>Get early access </Button>
                    <div class="socailmedia-icons">
                        <img src="../../assets/images/Instagram.svg" alt="">
                        <img src="../../assets/images/Subtract.svg" alt="">
                        <img src="../../assets/images/Twitter.svg" alt="">
                        <img src="../../assets/images/Linkedin.svg" alt="">
                    </div>
                </div>
            </div>

            <div>
                <img class="footer-logo" src="../../assets/images/footerfirmlogo.svg" alt="">
                <hr class="hrline">
                <div class="copyright">
                    <span class="copyright-span">©2023 All Rights Reserved by Firmable</span>
                    <span class="copyright-span">Privacy Policy | Terms of service</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Button from 'primevue/button';
export default {
    components: {
        Button
    },
}

</script>
<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
@import "../../assets/scss/mediaqueries.scss";

.footer-container {
    width: 100%;
    justify-content: center;
    /** display: flex; */
    flex-direction: column;
    margin-top: 10px;
    background: #183453;
    padding-block: 20px;

    &-child {
        /** max-width: 1440px; */
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: minmax(100px, auto);
        justify-content: space-between;
        padding-inline: 28px;
        z-index: 5;

        @include desktop-larg {
            grid-template-columns: repeat(3, 1fr);
        }

        @include tablet {
            grid-template-columns: repeat(2, 1fr);
        }

        @include mobile {
            grid-template-columns: repeat(1, 1fr);
        }


        .unorder-list {
            margin: 0;
            padding: 0;
            margin-bottom: 40px;
        }

    }

    .fmax-container {
        max-width: 1440px;
        margin: auto;
    }

    .footer-links {
        list-style: none;
        margin-bottom: 20px;


        &-text {
            color: white;
            text-decoration: none;
            font-size: 15px;
            font-family: "Poppins-Regular", sans-serif;

            &:hover {
                color: #2C8CF4;
            }
        }
    }

    .first-link {
        font-weight: 500;
        font-size: 16px;
        font-family: "Rubik", sans-serif;
    }

    .socailmedia-icons {
        display: flex;
        align-items: center;
        gap: 21px;
        margin-top: 10px
    }

    .footer-btn {
        @include btnStyle;
        padding-block: 14px;
        padding-inline: 18px;

    }

    .hrline {
        height: 1px;
        border: none;
        background-color: #08A5E233 !important;
    }

    .copyright {
        display: flex;
        justify-content: space-between;
        padding-inline: 28px;
        padding-block: 20px;
  @include tablet {
flex-direction : column;
}

        &-span {
            color: white;
            font-size: 14px;
            font-family: "Poppins-Regular", sans-serif;
        }


    }

    .footer-logo {
        padding-inline: 28px;
        padding-block: 15px;

    }

}
</style>