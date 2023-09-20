<template>
  <Content
    :title="config.__(`${page}/title`.split('/'), null, lang)"
    :description="config.__(`${page}/description`.split('/'), null, lang)"
  >
    <CardBackgrounded background="/Images/about.jpg" alt="about">
      <p class="text-sm sm:text-lg text-justify" v-html="config.__(`${page}/text`.split('/'), null, lang)">
      </p>
    </CardBackgrounded>
  </Content>
</template>

<script setup>
import Config from "~~/composables/Config";
const props = defineProps({
  lang: {
    type: String,
    default: "en",
  },
});

const page = "pages/about";
useHead({
  meta: [
    {
      name: "description",
      property: "og:description",
      content: "Here you can know more about Mohammad Mahdi Noorani",
    },
    {
      name: "og:title",
      content: "https://noorani-mm.ir/about",
    },
  ],
});
</script>