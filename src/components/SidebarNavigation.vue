<template>
      <ul class="features-list">
        <li>
          <router-link to="/admin/event">
            <div class="features-item" :class="{ active: isActive('/dashboard') }">
              <div class="features-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                  <path
                    d="M2.71983 17.4155C2.71983 17.4155 2.70206 17.8626 3.13878 17.8626C3.68208 17.8626 8.18023 17.8567 8.18023 17.8567L8.18763 13.7257C8.18763 13.7257 8.11657 13.0447 8.77756 13.0447H10.8693C11.651 13.0447 11.6029 13.7257 11.6029 13.7257L11.594 17.8434C11.594 17.8434 15.859 17.8434 16.5289 17.8434C17.0833 17.8434 17.0581 17.2867 17.0581 17.2867V9.6709L10.1032 3.48438L2.71983 9.6709V17.4155Z" />
                  <path
                    d="M0 9.09325C0 9.09325 0.626943 10.2487 1.99408 9.09325L10.1643 2.18134L17.8246 9.05032C19.4071 10.1917 20 9.05032 20 9.05032L10.1643 0.140625L0 9.09325Z" />
                  <path d="M17.6384 2.16406H15.668L15.6761 4.5534L17.6384 6.2181V2.16406Z" />
                </svg>
              </div>
                <span class="features-item-text" >Dashboard</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/event">
            <div class="features-item">
              <div class="features-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5.83333 1.66797C5.3731 1.66797 5 2.04106 5 2.5013V3.33464H4.16667C3.24619 3.33464 2.5 4.08083 2.5 5.0013V6.66797H17.5V5.0013C17.5 4.08083 16.7538 3.33464 15.8333 3.33464H15V2.5013C15 2.04106 14.6269 1.66797 14.1667 1.66797H13.3333C12.8731 1.66797 12.5 2.04106 12.5 2.5013V3.33464H7.5V2.5013C7.5 2.04106 7.1269 1.66797 6.66667 1.66797H5.83333Z"
                    fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.5 8.33464H2.5V15.8346C2.5 16.7551 3.24619 17.5013 4.16667 17.5013H15.8333C16.7538 17.5013 17.5 16.7551 17.5 15.8346V8.33464ZM5 10.8346C5 10.3744 5.3731 10.0013 5.83333 10.0013H7.5C7.96024 10.0013 8.33333 10.3744 8.33333 10.8346V11.668C8.33333 12.1282 7.96024 12.5013 7.5 12.5013H5.83333C5.3731 12.5013 5 12.1282 5 11.668V10.8346Z"
                    fill="currentColor" />
                </svg>
              </div>
                <span class="features-item-text">Events</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/event">
            <div class="features-item">
              <div class="features-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5.83333 1.66797C5.3731 1.66797 5 2.04106 5 2.5013V3.33464H4.16667C3.24619 3.33464 2.5 4.08083 2.5 5.0013V6.66797H17.5V5.0013C17.5 4.08083 16.7538 3.33464 15.8333 3.33464H15V2.5013C15 2.04106 14.6269 1.66797 14.1667 1.66797H13.3333C12.8731 1.66797 12.5 2.04106 12.5 2.5013V3.33464H7.5V2.5013C7.5 2.04106 7.1269 1.66797 6.66667 1.66797H5.83333Z"
                    fill="black" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.5 8.33464H2.5V15.8346C2.5 16.7551 3.24619 17.5013 4.16667 17.5013H15.8333C16.7538 17.5013 17.5 16.7551 17.5 15.8346V8.33464ZM5 10.8346C5 10.3744 5.3731 10.0013 5.83333 10.0013H7.5C7.96024 10.0013 8.33333 10.3744 8.33333 10.8346V11.668C8.33333 12.1282 7.96024 12.5013 7.5 12.5013H5.83333C5.3731 12.5013 5 12.1282 5 11.668V10.8346Z"
                    fill="currentColor" />
                </svg>
              </div>
                <span class="features-item-text">Events</span>
            </div>
          </router-link>
        </li>
        <li>
          <div @click="sidebarStore.toggle">
              <div class="features-item">
                <i class="pi features-item-icon" :class="{ 'pi-angle-left': !sidebarStore.minimize, 'pi-angle-right': sidebarStore.minimize }"></i>
                <span class="features-item-text">Minimize</span>
              </div>
          </div>
        </li>
      </ul>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar';
import { ref } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (routePath: string) => route.path.includes(routePath);
const subMenuState = ref({
  'grades': false,
  'progress': false,
  'profiles': false,
})
const openSub = (menu: 'grades' | 'progress' | 'profiles') => {
  subMenuState.value = {
    ...subMenuState.value,
    [menu]: !subMenuState.value[menu]
  }
}

const sidebarStore = useSidebarStore()

const emit = defineEmits(["close"]);
const closeSidebar = () => {
  emit('close');
}
</script>

<style scoped lang="scss">
.features-list {
  padding: 0;
  list-style: none;
}

.active{
  background-color: #00c0dd;;
}

.features-item {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0.9rem;
  margin-bottom: 1.1rem;
  color: black;
  cursor: pointer;
  
}

.features-item-icon {
  font-size: 2rem;
}

.features-item-text {
  margin-left: 1.5rem;
  transition: opacity 0.2s ease;
  opacity: 1;
}

.side-bar.collapse .features-item-text{
  opacity: 0;
}

</style>
