<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue'
import { DummyBadges } from './DummyStudentBadge'
import type { IBadge } from './StudentBadge.type'
import Badge from '@/components/customizeBadge/Badge.vue'
import { firstLetterOfWord } from '@/utils/utils'

const isMobile = ref(window.matchMedia('(max-width: 768px)').matches)

const costumizeList = ref<IBadge[]>(DummyBadges)

watchEffect(() => {
  const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 768px)').matches
  }

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

const isActive = ref()
const filteredList = ref(costumizeList.value);

const toggleAll = (status: string) => {
  isActive.value = status;
  if (status === 'All') {
    filteredList.value = costumizeList.value;
  } else {
    filteredList.value = costumizeList.value.filter(item => item.status === status);

  }
};
</script>

<template>
  <main>
    <section style="padding: 10px; gap: 10px">
      <h1 class="font-bold title" style="padding: 10px 0px">Badges</h1>
      <!-- the tabs -->
      <div class="flex flex-row" style="gap: 10px">
        <button
          class="btn-header"
          :class="{ active: isActive === 'All' }"
          @click="toggleAll('All')"
          style="width: 120px; height: 39px"
        >
          <p class="inter-normal text-white" style="font-size: 16px; font-weight: 600">
            All Badges
          </p>
        </button>

        <button
          class="btn-header"
          :class="{ active: isActive === 'achieved' }"
          @click="toggleAll('achieved')"
          style="width: 120px; height: 39px"
        >
          <p class="inter-normal text-white" style="font-size: 16px; font-weight: 600">Achieved</p>
        </button>

        <button
          class="btn-header"
          :class="{ active: isActive === 'Not Achieved' }"
          @click="toggleAll('not achieved')"
          style="width: 120px; height: 39px"
        >
          <p class="inter-normal text-white" style="font-size: 16px; font-weight: 600">
            Not Achieved
          </p>
        </button>
      </div>

      <!-- the bagge -->
      <div class="customize-container" style="padding: 10px 0px">
        <div v-for="(item, index) in filteredList" :key="index" class="card-badge">
          <div class="flex flex-column align-items-center gap-2">
            <div class="flex w-full">
              <div class="mx-auto relative">
                <span class="inter-normal black-1" style="font-size: 20px; font-weight: 700"
                  >Achieved</span
                >
              </div>
            </div>
            <div class="relative">
              <Badge
                :color="item.color"
                :word="firstLetterOfWord(item.title)"
                :width="isMobile ? '150' : undefined"
                :height="isMobile ? '144' : undefined"
              />
              <span class="title-badge"
                ><em>{{ item.title }}</em></span
              >
            </div>
            <p class="title">{{ item.title }}</p>
            <p class="description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import '/src/assets/global.scss';
.title {
  font-family: Inter;
  font-size: 35px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
}

.btn-new {
  border: none;
  background-color: #00c0dd;

  &:hover {
    background-color: #00c0ddb0;
  }
}

.btn-header {
  height: 40px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #006785;
  background: white !important;
  cursor: pointer;

  p {
    color: #006785 !important;
  }

  i {
    color: #006785;
  }

  &:hover,
  &.active {
    background: #006785 !important;

    p {
      color: white !important;
    }

    i {
      color: white;
    }
  }
}

.card-badge {
  border-radius: 10px;
  border: 1px solid #d9d5ec;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;

  .edit-icon {
    border-radius: 50;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    :hover {
      background-color: #f0f0f0;
    }

    :active {
      background-color: #d0d0d0;
    }

    @media screen and (min-width: 576px) {
      left: calc(100% + 2em);
    }
  }

  .title-badge {
    line-height: 0.7em;
    top: 44%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    text-align: center;
    width: 100px;

    @media screen and (min-width: 769px) {
      top: 45%;
      line-height: 1.4em;
      width: 150px;
    }

    em {
      color: #123256;
      font-weight: bold !important;
      font-family: Inter;
      font-size: 10px;

      @media screen and (min-width: 769px) {
        font-size: 20px;
      }
    }
  }

  .title {
    color: var(--font-1, #001125);
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 24px */
    text-align: center;
  }

  .description {
    color: var(--font-1, #001125);
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 24px */
  }
}

.customize-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.edit-mode {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 4px;
}
</style>
