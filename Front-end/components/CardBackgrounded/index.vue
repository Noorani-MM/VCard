<template>
  <div class="card bg-base-100 image-full">
    <figure>
      <img :src="background" :alt="alt" />
    </figure>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})
</script>