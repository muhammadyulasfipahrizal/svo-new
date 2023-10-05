<script setup lang="ts">
import { ref } from 'vue';
import { CorouselDashboard } from './CorouselDasboard.type';
import { corouselDummydata } from './CorouselDummyData';

const dashboardList = ref<CorouselDashboard[]>(corouselDummydata)

</script>

<template>
        <div class="flex flex-column md:w-full"  style="margin: 20px 0px 10px 0px">
            <Carousel :value="dashboardList" :numVisible="1" :numScroll="1">
                <template #item="value">
                    <div class="flex flex-row">
                        <img :src="value.data.image" alt="certifications" class="w-full img">
                    </div>
                </template>
            </Carousel>
        </div>
</template>

<style lang="scss" scoped>
::v-deep(.p-carousel) {
    .p-carousel-indicators{
        display: none;
    }
}
.img {
    height: 177.84px;
    @media (min-width: 768px) {
        height: 512px;
      }
}
</style>
