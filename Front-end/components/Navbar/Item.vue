<template>
    <div class="text-lg text-black/50 font-serif p-2 hover:text-black hover:underline underline-offset-8 cursor-pointer sm:text-xl">
        <NuxtLink to="#">{{ props.title }}</NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps({
        title : {
            type : String,
            required: true
        }
    });
</script>