<template>
    <section class="section">
        <div class="container">

            <div class="card">
                <div class="mb-3">
                    <!-- Dots for navigation -->
                    <div class="dot-container">
                        <span v-for="(image, index) in images" :key="index" class="dot"
                            :class="{ active: index === activeIndex }" @click="goToIndex(index)"></span>
                    </div>
                </div>

                <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions"
                    :numVisible="5" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <!-- <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" /> -->
                        <h2 class="heading">{{ slotProps.item.heading }}</h2>
                        <p>{{ slotProps.item.paragraph }}</p>
                    </template>
                </Galleria>
            </div>

        </div>
    </section>
</template>

<script setup>
import 'primeicons/primeicons.css';
import Galleria from 'primevue/galleria';
import { ref } from 'vue';

// Simulate images data
const images = ref([
    // { itemImageSrc: 'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true', alt: 'Image 1' },
    // { itemImageSrc: 'https://jes.edu.vn/wp-content/uploads/2017/10/hinh-anh.jpg', alt: 'Image 2' },
    { heading: 'Heading 1' },
    { paragraph: 'Paragraph 1' },
    // Add more image objects as needed
]);

const activeIndex = ref(0); // Initialize activeIndex

const next = () => {
    activeIndex.value = activeIndex.value === images.value.length - 1 ? images.value.length - 1 : activeIndex.value + 1;
};

const prev = () => {
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
};

const goToIndex = (index) => {
    activeIndex.value = index;
};
</script>

<style lang="scss" scoped>


.dot-container {
    display: flex;
    justify-content: center;
}

.dot {
    height: 20px;
    width: 20px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
}

.dot.active {
    background-color: #333;
}

.card {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

</style>
