<template>
  <fieldset class="rating rating-xs group" :id="`group-${id}`">
    <input
      type="radio"
      :name="`rating-${id}-2`"
      class="mask mask-star-2 bg-orange-400"
      :class="(rate > 5 || rate <= 0) ? 'bg-orange-400/25' : ''"
      :checked="rate === 1" disabled
    />
    <input
      type="radio"
      :name="`rating-${id}-2`"
      class="mask mask-star-2 bg-orange-400"
      :class="rate === 0 ? 'bg-orange-400/25' : ''"
      :checked="rate === 2" disabled
    />
    <input
      type="radio"
      :name="`rating-${id}-2`"
      class="mask mask-star-2 bg-orange-400"
      :class="rate === 0 ? 'bg-orange-400/25' : ''"
      :checked="rate === 3" disabled
    />
    <input
      type="radio"
      :name="`rating-${id}-2`"
      class="mask mask-star-2 bg-orange-400"
      :class="rate === 0 ? 'bg-orange-400/25' : ''"
      :checked="rate === 4" disabled
    />
    <input
      type="radio"
      :name="`rating-${id}-2`"
      class="mask mask-star-2 bg-orange-400"
      :class="rate === 0 ? 'bg-orange-400/25' : ''"
      :checked="rate === 5" disabled
    />
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