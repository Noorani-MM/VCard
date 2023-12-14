<template>
  <fieldset class="flex flex-row items-center gap-1" :id="`group-${id}`">
    <div class="w-3 h-3 rounded-full" :class="(rate > 0) ? 'bg-accent' : 'bg-accent/30'"></div>
    <div class="w-3 h-3 rounded-full" :class="(rate > 1) ? 'bg-accent' : 'bg-accent/30'"></div>
    <div class="w-3 h-3 rounded-full" :class="(rate > 2) ? 'bg-accent' : 'bg-accent/30'"></div>
    <div class="w-3 h-3 rounded-full" :class="(rate > 3) ? 'bg-accent' : 'bg-accent/30'"></div>
    <div class="w-3 h-3 rounded-full" :class="(rate > 4) ? 'bg-accent' : 'bg-accent/30'"></div>
  </fieldset>
</template>

<script setup>
const props = defineProps({
  rate: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>