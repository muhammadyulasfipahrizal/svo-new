<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import type { Courses } from './CourseDashboard.type';
import { popularCourseDummyData, freeCourseDummyData } from './CourseDummyData';

const popularCourses = ref<Courses[]>(popularCourseDummyData);
const freeCourses = ref<Courses[]>(freeCourseDummyData);
</script>

<template>
  <div class="flex flex-column" style="gap: 10px">

    <!-- popular course -->
    <div class="flex flex-column" style="gap: 10px">
        <p class="text-xl font-bold">Popular course</p>
        <Carousel :value="popularCourses" :numVisible="4" :numScroll="1" class="carousel-width">
          <template #item="value">
              <div class="courses max-w-min">
                <div class="course-card p-1 border-1 surface-border flex flex-column gap-1">
                  <img :src="value.data.image" :alt="value.data.image" class="image-course" style="width: 251.4px; height: 141px;">
                  <h1 class="inter-normal black-1" style="font-size: 14px; font-weight: 700;">{{ value.data.name }}</h1>
      
                  <div class="flex gap-1 align-items-center instructor">
                    <img :src="value.data.lecturerImage" :alt="value.data.lecturerName" class="border-circle" style="width: 23px; height: 23px">
                    <h2 class="inter-normal black-1" style="font-size: 15px; font-weight: 400;">{{ value.data.lecturerName }}</h2>
                  </div>
      
                  <div class="flex align-items-center flex-wrap gap-1 rating">
                    <h1 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">{{ value.data.rating }}</h1>
                    <div class="star-container" style="color: #333;"></div>
                    <h2 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">({{ value.data.review }} Reviews)</h2>
                  </div>
      
                  <h1 class="completed">
                    <span class="font-bold suggested-orange">{{ value.data.totalCompleted }}</span> completed the course
                  </h1>
                  <h1 class="hours">{{ value.data.totalHour }} Total Hours | {{ value.data.lecturers }} Lectures | {{ value.data.level }}</h1>
      
                  <div class="flex gap-1 price-container">
                    <h1 class="price">{{ value.data.price }}</h1>
                    <h1 class="price-discount"><strike>{{ value.data.priceWas }}</strike></h1>
                  </div>
                </div>
              </div>
          </template>
        </Carousel>
    </div>

    <!-- popular course -->
    <div class="flex flex-column" style="gap: 10px">
      <p class="text-xl font-bold">Free course</p>
      <Carousel :value="freeCourses" :numVisible="4" :numScroll="4" class="carousel-width">
        <template #item="value">
            <div class="courses max-w-min">
              <div class="course-card p-1 border-1 surface-border flex flex-column gap-1">
                <img :src="value.data.image" :alt="value.data.image" class="image-course" style="width: 251.4px; height: 141px;">
                <h1 class="inter-normal black-1" style="font-size: 14px; font-weight: 700;">{{ value.data.name }}</h1>
    
                <div class="flex gap-1 align-items-center instructor">
                  <img :src="value.data.lecturerImage" :alt="value.data.lecturerName" class="border-circle" style="width: 23px; height: 23px">
                  <h2 class="inter-normal black-1" style="font-size: 15px; font-weight: 400;">{{ value.data.lecturerName }}</h2>
                </div>
    
                <div class="flex align-items-center flex-wrap gap-1 rating">
                  <h1 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">{{ value.data.rating }}</h1>
                  <div class="star-container" style="color: #333;"></div>
                  <h2 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">({{ value.data.review }} Reviews)</h2>
                </div>
    
                <h1 class="completed">
                  <span class="font-bold suggested-orange">{{ value.data.totalCompleted }}</span> completed the course
                </h1>
                <h1 class="hours">{{ value.data.totalHour }} Total Hours | {{ value.data.lecturers }} Lectures | {{ value.data.level }}</h1>
    
                <div class="flex gap-1 price-container">
                  <h1 class="price">{{ value.data.price }}</h1>
                  <h1 class="price-discount"><strike>{{ value.data.priceWas }}</strike></h1>
                </div>
              </div>
            </div>
        </template>
      </Carousel>
  </div>

  <!-- short course -->
  <div class="flex flex-column" style="gap: 10px">
    <p class="text-xl font-bold">Short course</p>
    <Carousel :value="freeCourses" :numVisible="4" :numScroll="4" class="carousel-width">
      <template #item="value">
          <div class="courses max-w-min">
            <div class="course-card p-1 border-1 surface-border flex flex-column gap-1">
              <img :src="value.data.image" :alt="value.data.image" class="image-course" style="width: 251.4px; height: 141px;">
              <h1 class="inter-normal black-1" style="font-size: 14px; font-weight: 700;">{{ value.data.name }}</h1>
  
              <div class="flex gap-1 align-items-center instructor">
                <img :src="value.data.lecturerImage" :alt="value.data.lecturerName" class="border-circle" style="width: 23px; height: 23px">
                <h2 class="inter-normal black-1" style="font-size: 15px; font-weight: 400;">{{ value.data.lecturerName }}</h2>
              </div>
  
              <div class="flex align-items-center flex-wrap gap-1 rating">
                <h1 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">{{ value.data.rating }}</h1>
                <div class="star-container" style="color: #333;"></div>
                <h2 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">({{ value.data.review }} Reviews)</h2>
              </div>
  
              <h1 class="completed">
                <span class="font-bold suggested-orange">{{ value.data.totalCompleted }}</span> completed the course
              </h1>
              <h1 class="hours">{{ value.data.totalHour }} Total Hours | {{ value.data.lecturers }} Lectures | {{ value.data.level }}</h1>
  
              <div class="flex gap-1 price-container">
                <h1 class="price">{{ value.data.price }}</h1>
                <h1 class="price-discount"><strike>{{ value.data.priceWas }}</strike></h1>
              </div>
            </div>
          </div>
      </template>
    </Carousel>
</div>

<!-- long course -->
<div class="flex flex-column" style="gap: 10px">
  <p class="text-xl font-bold">Long course</p>
  <Carousel :value="freeCourses" :numVisible="4" :numScroll="4" class="carousel-width">
    <template #item="value">
        <div class="courses max-w-min">
          <div class="course-card p-1 border-1 surface-border flex flex-column gap-1">
            <img :src="value.data.image" :alt="value.data.image" class="image-course" style="width: 251.4px; height: 141px;">
            <h1 class="inter-normal black-1" style="font-size: 14px; font-weight: 700;">{{ value.data.name }}</h1>

            <div class="flex gap-1 align-items-center instructor">
              <img :src="value.data.lecturerImage" :alt="value.data.lecturerName" class="border-circle" style="width: 23px; height: 23px">
              <h2 class="inter-normal black-1" style="font-size: 15px; font-weight: 400;">{{ value.data.lecturerName }}</h2>
            </div>

            <div class="flex align-items-center flex-wrap gap-1 rating">
              <h1 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">{{ value.data.rating }}</h1>
              <div class="star-container" style="color: #333;"></div>
              <h2 class="inter-normal black-1" style="font-size: 13px; font-weight: 400;">({{ value.data.review }} Reviews)</h2>
            </div>

            <h1 class="completed">
              <span class="font-bold suggested-orange">{{ value.data.totalCompleted }}</span> completed the course
            </h1>
            <h1 class="hours">{{ value.data.totalHour }} Total Hours | {{ value.data.lecturers }} Lectures | {{ value.data.level }}</h1>

            <div class="flex gap-1 price-container">
              <h1 class="price">{{ value.data.price }}</h1>
              <h1 class="price-discount"><strike>{{ value.data.priceWas }}</strike></h1>
            </div>
          </div>
        </div>
    </template>
  </Carousel>
</div>
  <Button size="small" class="w-full border-noround" style="border: none;
         background-color: #00C0DD;">
            <p class="text-white mx-auto inter-normal" style="font-size: 13px;
            font-weight: 600;">Show More</p>
  </Button>
</div>
</template>


<style scoped lang="scss">
@import "/src/assets/global.scss";
.input-card {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ECEEF5;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.courses {
  display: grid;

  .course-card {
    max-width: 236px;
    padding: 5px;

    h1 {
      color: var(--font-1, #001125);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
    }

    .instructor {
      img {
        width: 13px;
        height: 13px;
      }

      h2 {
        color: var(--fonts-primary, #25213B);
        font-family: Inter;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .rating {
      h1 {
        color: #000;
        font-family: Inter;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      h2 {
        color: #000;
        font-family: Inter;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      :deep(.vue-star-rating) {
        height: 13px;

        .vue-star-rating-star {
          height: 13px;
          display: flex;

          svg {
            width: 13px;
            height: 13px;
          }
        }
      }
    }

    h1.completed {
      color: var(--font-1, #001125);
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }

    h1.hours {
      color: var(--font-1, #001125);
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }

    .price-container {
      .price {
        color: var(--Suggested-orange, #E96853);
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
      }

      .price-discount {
        color: #D9D9D9;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
      }
    }

    @media screen and (min-width: 576px) {
      max-width: 100%;
    }
  }
}

.p-6px {
  padding: 6px;
}

::v-deep(.p-rating) {
  .p-rating-item {
    color: #F1644C;
  }
}

::v-deep(.p-carousel) {
  .p-carousel-indicators{
      display: none;
  }
}

.carousel-width {
  width: 100vw;
  @media (min-width: 768px) {
    width: 80vw;
  }
}
</style>
