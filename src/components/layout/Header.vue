<template>
    <div class="card">
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
                <template #item="{ item, props, hasSubmenu, root }" class="px-3" :focused="false">
                    <a v-ripple class="flex flex-row-reverse align-items-center navbar-headings" v-bind="props.action"
                        :style="item.label === 'Solutions' ? { color: 'white', borderBottom: '1px solid white' } : (item.label === 'Resources' ? { color: 'white' } : (item.label === 'About us' ? { color: 'white' } : (item.label === 'Contact' ? { color: 'white' } : {})))"
                        @click="(e) => { console.log('Link clicked!', e.preventDefault()); }">
                        <span :class="item.icon"></span>
                        <span class="ml-2">{{ item.label }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut"
                            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                                item.shortcut
                            }}</span>
                        <i v-if="hasSubmenu"
                            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                    </a>
                </template>

                <template #menubutton="{ id, toggleCallback }" #end>
                    <div>
                        <i class="pi pi-align-justify hamburger" @click="toggleCallback"></i>

                    </div>
                </template>
            </Menubar>
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

const items = ref([
    {
        label: 'Solutions',
        items: [
            {
                label: 'Resource',

            },
            {
                label: 'Blocks',

            },
            {
                label: 'UI Kit',

            },

        ]
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


</script>
<style lang="scss" scoped>
@import '../../assets/scss/mediaqueries.scss';
@import "../../assets/scss/style.scss";


.card-child {
    display: flex;
    justify-content: center;
    background: linear-gradient(179deg, #2D2DB0 -34.67%, #2C8CF4 134.73%);
    height: 70px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
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
    background: linear-gradient(179deg, #2D2DB0 -34.67%, #2C8CF4 134.73%);
    border-radius: 0px;
    max-width: 1440px;
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

            @include tablet {
                color: black !important;
                padding: 8px !important;
            }
        }
    }
}

.card {
    position: relative;

    .header-button {
        top: 14px;
        position: fixed;
        right: 10px;
        z-index: 5;
        @include btnStyle;
        padding-inline: 32px;
        padding-block: 13px;
        margin-right: 95px;

        @include tablet {
            display: none !important;
            padding-inline: 0px;
        }

        @include desktop {
            margin-right: 40px !important;
        }
    }
}
</style>