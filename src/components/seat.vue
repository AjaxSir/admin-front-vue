<!--
 * @Date: 2024-07-19 10:47:17
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-26 17:06:32
 * @Description: 
-->

<template>
    <div :id="`seat-${seatIdx}`" class="main">
            <div class="bag">
                <div class="level">
                    {{ seatIdx }}
                </div>
            </div>
            
            <!-- <div class="cat">
                cat
            </div> -->
            <div class="seat">
            
            </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import CatImage from '@/assets/images/cat.jpg'
import { Cat } from '@/utils/Cat'
import { useCatStore } from '../store'
const { cats } = useCatStore()
const props = defineProps({
    airDrop: {
        type: Boolean,
        default: false
    },
    seatIdx: {
        type: Number,
        default: 1
    },
    catInstance: {
        type: Object as () => InstanceType<typeof Cat>,
        default: () => new Cat(document.querySelector(`#seat-1`) as HTMLElement, 1, 1)
    }
})
const hasCat = ref(false)
const position = reactive({
    x: 0,
    y: 0
})
const domSeat = ref<HTMLDivElement |null>(null)
watch(() => props, (n,_o) => {
    if (n.airDrop && hasCat.value) {
        const bag = domSeat.value!.querySelector('.bag')
        console.log(bag)
    }
})
onMounted(() => {
    const { catInstance, seatIdx } = props
    catInstance.init(document.querySelector(`#seat-${seatIdx}`) as HTMLElement)
    catInstance.move()
    domSeat.value = document.getElementById(`seat-${seatIdx}`) as HTMLDivElement;
    const bag = domSeat.value.querySelector('.bag') as HTMLDivElement;
    const instance = anime({
        targets: bag,
        keyframes: [
            {translateY: -80, opacity: 0},
            {translateX: -10, translateY: -70, opacity: 1},
            {translateX: 10, translateY: -60},
            {translateX: -10, translateY: -50},
            {translateX: 10, translateY: -40},
            {translateX: -10, translateY: -30},
            {translateX: 10, translateY: -20},
            {translateX: -10, translateY: -10},
            {translateX: 0, translateY: -20},
        ],
        duration: 2000,
        easing: 'linear',
    })
    instance.finished.then(() => {
        bag.style.background = `url(${CatImage}) no-repeat center center`
        bag.style.backgroundSize = `cover`
        const level = domSeat.value!.querySelector('.level') as HTMLDivElement
        level.style.display = 'flex'
    })
})
</script>

<style lang="scss" scoped>
.main{
    width: 80px;
    height: 80px;
    position: relative;
    margin: 16px auto;
    .bag{
        width: inherit;
        height: inherit;
        position:relative;
        z-index: 9;
        background: url('@/assets/images/bag.png') no-repeat center center;
        background-size: contain;
        border-radius: 50%;
        // overflow: hidden;
        .level{
            position: absolute;
            width: 20px;
            height: 20px;
            // text-align: center;
            line-height: 20px;
            border-radius: 50%;
            padding: 8px;
            right: -10px;
            bottom: 10px;
            color: white;
            background-color: #4db8ad;
            z-index: 10;
            justify-content: center;
            display: none;
            font-size: 18px;
        }
    }
    
    .show{
        top: -30px;
        left: 0;
        opacity: 1;
        background-color: red;
    }
    .seat{
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        transform: scaleY(50%);
        background-color: blue;
        bottom: 0px;
        left: 0px;
    }
}
</style>