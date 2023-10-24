<template>
  <div id="app-sidebar"
    class="side-bar h-full md:h-auto"
    :class="{ collapse: sidebarStore.minimize }">

    <div v-show="!isMobile" class="w-inherit">
      <a href="/dashboard">
        <div class="logo-name">
          <img src="/assets/img/svo-academy-logo.png" alt="Logo" class="logo">
          <h1 class="logo-name__name font-viga text-600">Education</h1>
        </div>
      </a>
      <SidebarNavigation />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar';
import SidebarNavigation from './SidebarNavigation.vue'
import { ref, watchEffect } from 'vue'
const sidebarStore = useSidebarStore();
const isMobile = ref(window.matchMedia('(max-width: 768px)').matches)
const showSidebarNavigation = ref(false)

const showNavigation = () => {
  showSidebarNavigation.value = !showSidebarNavigation.value
}

watchEffect(() => {
  const handleResize = () => {
    isMobile.value = window.matchMedia('(max-width: 768px)').matches
  }

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

</script>

<style scoped lang="scss">
#app-sidebar {
  background-color: #fff;
  padding: 1rem;
  top: 0;
  left: 0;
}

.side-bar {
  width: 17rem;
  height: 100%;
  padding: 2.1rem 1.2rem;
  background-color: #17171e;
  transition: all 0.5s ease;
}

.logo-name-wrapper {
  position: relative;
  margin-bottom: 2.1rem;
  display: flex;
  font-size: 1.2rem;
}

.logo-name {
  display: flex;
  align-items: center;
}


.side-bar.collapse {
  width: 6rem;
}

.logo-name__name{
  transition: opacity 0.6s ease;
  opacity: 1;
}

.side-bar.collapse .logo-name__name{
  opacity: 0;
}

</style>
