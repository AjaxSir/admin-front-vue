<template>
    <div class="animate">
        <button @click="back">back</button>
    </div>
</template>

<script setup langt="ts">
const router = useRouter()
const back = () => {
    router.go(-1)
}
</script>

<style lang="scss" scoped>
.animate{
    width: 100vw;
    height: 100vh;
    background-color: blue;
}
</style>