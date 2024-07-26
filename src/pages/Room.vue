<template>
    <div class="room">
        <div class="header">
            <div class="fish">
                <img :src="Fish" alt="">
            </div>
            <div class="setting">
                <div class="info">
                    <div>声音</div>
                    <div>矿产</div>
                </div>
                <div class="rank">
                    排名
                </div>
            </div>
        </div>
        <div class="floor">
            
        </div>
        <div class="seats">
            <div class="item" v-for="(it, idx) in cats"><Seat :cat-instance="it" :seatIdx="idx" /></div>
            
        </div>
        <div class="footer">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import Fish from '@/assets/images/fish.png'
import Seat from '@/components/seat.vue'
import { useCatStore } from '../store'
const { cats } = useCatStore()
onMounted(() => {
})

</script>

<style lang="scss" scoped>
.room{
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/room-bg.png') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    .header{
        height: 260px;
        display: flex;
        justify-content: space-between;
        .fish{
            width: 200px;
            box-sizing: border-box;
            padding: 50px 30px;
            background: url('@/assets/images/yg.png') no-repeat;
            background-size: 120px;
            background-position: 20px 30px;
            position: relative;
            img{
                width: 40px;
                position: absolute;
                left: 98px;
                top: 120px;
                animation: fish-animation 2s linear alternate infinite;
            }
        }
        
        @keyframes fish-animation {
            0%{
                transform: rotate(0deg) ;
            }
            25%{
                transform: rotate(20deg);
            }
            50%{
                transform: rotate(0deg);
            }
            75%{
                transform: rotate(-20deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }
        .setting{
            display: flex;
            .info{
                div{
                    height: 130px;
                    line-height: 80px;
                    
                }
            }
            .rank{
                width: 200px;
                margin-left: 20px;
                text-align: center;
                line-height: 260px;
            }
        }
    }
    .floor{
        flex: 1;
    }
    .seats{
        height: 400px;
        .item{
            position: relative;
            width: 25%;
            display: inline-block;
        }
    }
    .footer{
        height: 200px;
        // background-color: yellow;
    }
}
</style>