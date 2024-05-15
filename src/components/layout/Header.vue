<template>
    <div class="card nav-bg">
        <div class="card-child">
            <Menubar :model="items" class="navbar">
                <template #start>
                    <div class="logos">

                        <div>
                            <img class="main-first-latter" src="../../assets/images/firstalphabetimg.svg" alt="">
                        </div>
                        <div class="main-logo-parent">
                            <img class="logofirstlatter" src="../../assets/images/firstalphabetimg.svg" alt="">
                            <img class="main-logo" src="../../assets/images/whitefimlogo.svg" alt="">
                        </div>
                    </div>
                </template>

                <template #item="{ item, props, hasSubmenu, root }" :focused="false">
                    <a v-ripple class="flex flex-row-reverse align-items-center navbar-headings animation"
                        v-bind="props.action"
                        :style="item.label === 'Solutions' ? { color: 'white', borderBottom: '1px solid white' } : (item.label === 'Resources' ? { color: 'white' } : (item.label === 'About us' ? { color: 'white' } : (item.label === 'Contact' ? { color: 'white' } : {})))">
                        <span :class="item.icon"></span>
                        <span
                            @click="() => { if (item.label === 'Solutions') { updateShowMenuHandler(!showSolMenu) } console.log(item.label) }"
                            class="ml-2">{{ item.label
                            }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut"
                            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                                item.shortcut
                            }}</span>
                        <i v-if="item.label == 'Solutions'"
                            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                    </a>
                </template>

                <template #menubutton="{ id, toggleCallback }" #end>
                    <div>
                        <i class="pi pi-align-justify hamburger" @click="toggleCallback"></i>
                    </div>
                </template>

            </Menubar>
            <!-- <h4 class="login login-color">Login</h4> -->
            <div v-if="showSolMenu" class="desktop-menu animated-menu">
                <Demo />
            </div>
            <Button class="header-button" label="Warning" severity="warning" rounded>Get early access </Button>

        </div>
    </div>


</template>
<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Badge from "primevue/badge";
import 'primeicons/primeicons.css';
import '../../assets/main.scss';
import Button from 'primevue/button';
import Demo from "../Demo.vue";

const showSolMenu = ref(false);

const updateShowMenuHandler = (val) => {
    showSolMenu.value = val
}

const items = ref([
    {
        label: 'Solutions',
    },
    {
        label: 'Resources',

    },
    {
        label: 'About us',

    },
    {
        label: 'Contact',

    }

]);


window.addEventListener('scroll', function () {

    const header = document.querySelector('.nav-bg');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});

window.addEventListener('scroll', function () {
    var login = document.querySelector('.login');
    if (window.scrollY > 0) {
        login.classList.add('login-color');
    } else {
        login.classList.remove('login-color');
    }
});



</script>
<style lang="scss" scoped>
@import '../../assets/scss/mediaqueries.scss';
@import "../../assets/scss/style.scss";



.nav-bg {
    transition: background-color 0.3s ease;


}

.nav-bg.scrolled {
    background: linear-gradient(179deg, #2D2DB0 -34.67%, #2C8CF4 134.73%);
}


.card {
    display: flex;
    justify-content: center;

    height: 70px;
    position: fixed !important;
    width: 100%;
    top: 0;
    z-index: 5;
}


.card-child {
    display: flex;
    justify-content: center;
    height: 70px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
    max-width: 1280px;
}


.navbar {
    border: none;
    display: flex;
    align-items: center;

    top: 0;
    width: 100%;
    height: 70px;
    z-index: 1;
    padding-inline: 25px;
    background-color: transparent;
    border-radius: 0px;
    max-width: 1280px;
    margin: auto;

    @include tablet {
        justify-content: space-between;
    }


    .navbar-headings:hover {
        color: #FFC000 !important;
    }

    .logofirstlatter {
        height: 29px;

    }

    .logos {
        display: flex;
        align-items: center;


        @include tablet {
            .main-first-latter {
                display: none;
            }
        }


    }

    .main-logo-parent {
        margin-inline: 44px;
        margin-left: 35px;

        @include tablet {

            margin-inline: 0px !important;

        }
    }




}

.hamburger {
    /* Default styles */
    display: none !important;
    color: white;

    @include tablet {

        margin-left: 20px;
        /* Apply margin only on small screens */
        display: block !important;

    }

}


.p-menubar-root-list {


    li {
        padding: 0px 10px;

        .navbar-headings {
            font-size: 16px;
            display: flex;
            align-items: center;
            margin-inline: 10px;
            font-family: 'Rubik', sans-serif;
            padding: 0;
            gap: 3px;

            @include tablet {
                color: black !important;
                padding: 8px !important;
            }
        }
    }



}

.p-menubar-mobile-active {
    // animation-name: slidY;
    // animation-duration: 500ms;
    // animation-timing-function: ease-in-out;
    // transform-origin: top;
}

@keyframes slidY {
    from {
        transform: scaleY(0);
    }

    to {
        transform: scaleY(1);
    }
}





.card {
    position: relative;

    .header-button {
        top: 12px;
        position: relative;

        z-index: 5;
        @include btnStyle;

        height: 46px;
        width: 217px;
        white-space: nowrap;
        margin-right: 15px;
        padding-inline: 18px;
        display: flex;
        justify-content: center;

        &:hover {
            background: #73BFB8;
            color: white;
        }

        @include tablet {
            display: none !important;
            padding-inline: 0px;
        }

        @include desktop {
            margin-right: 40px !important;
        }
    }

    .login-color {
        color: white !important;
    }

    .login {
        color: #183453;
        font-size: 17px;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        margin-right: 10px;

        &:hover {
            color: #FFC000 !important;
        }

        @include tablet {
            display: none;

        }
    }


}

.desktop-menu {
    position: absolute;
    z-index: 2;
    margin-top: 70px;
}

.animated-menu {
    animation-name: slidein;
    animation-duration: 0.4s;
    animation-timing-function: ease forwards;
}

@keyframes slidein {
    from {
        transform: translateY(30%);
    }

    to {
        transform: translateY(-0%);
    }
}
</style>