<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref } from 'vue'
import type { IReviews } from './StudentReviews.type'
import { StudentReviewsDummyData } from './StudentReviewsDummyData'

const reviewData = ref<IReviews[]>(StudentReviewsDummyData)
</script>

<template>
  <section>
    <h1 class="hidden lg:block title-head my-2">Reviews</h1>
    <div style="margin-bottom: 10px;" v-for="item in reviewData">
      <div class="flex flex-column" style="gap: 10px">
        <div class="flex flex-row align-items-center" style="gap: 10px;">
          <img
            :key="item.id"
            :src="item.image"
            alt=""
            style="width: 122px; height: 122px; border-radius: 61px; object-fit: cover"
          />
          <div class="flex flex-column">
            <p class="inter-normal font-bold black-1" style="font-size: 35px;">{{ item.name }}</p>
            <p class="inter-normal font-bold black-1" style="font-size: 15px;">{{ item.occupation }}</p>
          </div>
        </div>
        <div style="border: 1px solid #EBEBEB; border-radius: 10px; 
            padding: 10px; font-size: 14px;"
            class="inter-normal">{{ item.review }}</div>
      </div>
    </div>
  </section>
</template>
