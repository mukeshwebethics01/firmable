<template>
    <div class="mega-menu">
        <div class="left-side">
            <h3 class="mega-menu-h3">OUR CASES FOR EVERY TEAM</h3>
            <div class="menu-container">
                <div class="sales">
                    <div>
                        <img src="../assets/images/headphoneIocn.svg" alt="">
                    </div>
                    <div>
                        <h4 class="menutitle">Sales</h4>
                        <p class="content-one">Less searching, more time selling</p>
                        <p class="content-two">Sales prospecting database
                            Lead qualification
                            Sales Intelligence</p>
                    </div>
                </div>
                <div class="recruitment">
                    <div>
                        <img src="../assets/images/recruitersicon.svg" alt="">
                    </div>
                    <div>
                        <h4 class="menutitle">Recruitment</h4>
                        <p class="content-one">Less searching, more time selling</p>
                        <p class="content-two">Sales prospecting database
                            Lead qualification
                            Sales Intelligence</p>
                    </div>
                </div>
                <div class="marketing">
                    <div>
                        <img src="../assets/images/newsroomicon.svg" alt="">
                    </div>
                    <div>
                        <h4 class="menutitle">Marketing</h4>
                        <p class="content-one">Less searching, more time selling</p>
                        <p class="content-two">Sales prospecting database
                            Lead qualification
                            Sales Intelligence</p>
                    </div>
                </div>
                <div class="market-intelligence">
                    <div>
                        <img src="../assets/images/recruitersicon.svg" alt="">
                    </div>
                    <div>
                        <h4 class="menutitle">Market Intelligence</h4>
                        <p class="content-one">Less searching, more time selling</p>
                        <p class="content-two">Sales prospecting database
                            Lead qualification
                            Sales Intelligence</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightside">
            <h3 class="mega-menu-h3">LEARN MORE</h3>
            <div>
                <div>
                    <img src="../assets/images/Frame1597882932.svg" alt="">
                </div>
                <h4 class="rightsideh4">Watch a Demo</h4>
                <p class="rightside-content">Lorem ipsum dolor sit amet consectetur Tincidunt vulputate cursus lobortis
                </p>
                <Button class="btn-demo" label="Contrast" severity="contrast" outlined>Watch Demo</Button>
            </div>
        </div>
        <div class="box"></div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style lang="scss" scoped>
@import "../assets/scss/mediaqueries.scss";

.mega-menu {
    display: flex;
    max-width: 1050px;
    gap: 24px;
    box-shadow: 1px -1px 16px -17px;
    background: white;
    position: relative;
    border-radius: 10px;
    margin-inline: 10px;

    @include tablet {
        display: none;
    }

    // position: absolute;
    // z-index: 2;
    // margin-top: 69px;

    .mega-menu-h3 {
        color: #18345399;
        font-weight: 500;
        font-family: "Rubik", sans-serif;
    }

    .box {
        height: 20px;
        background: white;
        width: 20px;
        position: absolute;
        top: -9px;
        left: 214px;
        rotate: 45deg;

        @include tab1100 {
            left: 293px;
        }
    }

}

.left-side {
    max-width: 632px;
    margin-left: 44px;

    @include tab1100 {
        margin-left: 20px;
    }
}

.menu-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-bottom: 11px;
}

.sales,
.recruitment,
.marketing,
.market-intelligence {
    display: flex;
    gap: 10px;

    max-width: 312px;
    padding-inline: 10px;
    padding-block: 12px;
    border-radius: 5px;

    @media screen and (max-width:1034px) {
        max-width: 100%;
        padding-block: 5px;
    }

    &:hover {
        background: #EEF9FF;
        transition: all 0.4s ease-in-out;
    }

    &:hover .menutitle {
        color: #08A5E2;
        transition: all 0.4s ease-in-out;
    }

    .menutitle {
        margin-block: 0px;
        color: #183453;
        font-size: 17px;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        line-height: 20px;
    }

    .content-one {
        color: #747474;
        font-size: 15px;
        font-family: "Poppins-Regular", sans-serif;
        line-height: 22px;

        @include tab1100 {
            margin-block: 7px;
        }
    }

    .content-two {
        color: #08A5E2;
        font-size: 15px;
        font-family: "Poppins-Regular", sans-serif;
        line-height: 24px;

        @include tab1100 {
            margin-block: 7px;
        }
    }
}


.rightside {
    background: #EEF9FF;
    max-width: 350px;
    padding-left: 26px;
    padding-right: 10px;
    border-radius: 0 10px 10px 0;
    padding-bottom: 20px;
}

.rightside-content {
    color: #747474;
    font-size: 15px;
    font-family: "Poppins-Regular", sans-serif;
    line-height: 22px;
}

.rightsideh4 {

    color: #183453;
    font-size: 17px;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    line-height: 20px;
}

.btn-demo {
    border-radius: 25px;
    font-size: 15px;
    width: 148px;
    height: 46px;
    display: flex;
    justify-content: center;
    color: #183453;
}
</style>
