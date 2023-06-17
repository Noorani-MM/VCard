<template>
    <NuxtLink :to="link" class="tab tab-bordered uppercase" :class="active ? 'tab-active' : '' ">{{ title }}</NuxtLink>
</template>

<script setup>
    const props = defineProps({
        title : {
            type : String,
            required: true
        },
        link : {
            type: String,
            required: true
        },
        active : {
            type : Boolean,
            default: false
        }
    });
</script>