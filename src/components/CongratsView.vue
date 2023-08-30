<template>
    <div style="height: 100vh;" class="text-center px-5 pt-5">
        <img style="width: 100px; height: 100px;" src="@/assets/icon/Success.png" alt="">
        <div class="fs-16">{{ props.title }}</div>
        <div class="fs-12 text-gray">{{ props.desc }}</div>
    </div>
</template>
<script setup lang="ts" name="CongratsView">

const props = defineProps({
    title: { type: String, required: true },
    desc: { type: String, required: false }
})
</script>
