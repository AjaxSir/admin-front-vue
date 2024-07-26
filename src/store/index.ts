import { createPinia, defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ICat } from '../types/cat'
import {generateCat} from '../utils/Cat'
export const useCatStore = defineStore('cat', () => {
    
    const cats = ref<ICat[]>(generateCat())

    function setCat(data: ICat[]): void {
        cats.value = data
    }

    return {
        cats,
        setCat
    }
})