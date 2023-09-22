<template>
    <div class="text-secondary" :style="`direction: ${ContentReader.rightToLeft() ? 'rtl': 'ltr'};`">
        Hello world !
    </div>
</template>

<script setup>
import { ContentReader } from '#imports';
</script>