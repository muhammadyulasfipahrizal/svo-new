import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('events', () => {
    const minimize = ref<boolean>(false);
    const toggle = () => minimize.value = !minimize.value

    return { minimize, toggle }
})
