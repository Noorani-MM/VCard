<template>
  <Content
    :title="config.__(`${page}/title`.split('/'), null, lang)"
    :description="config.__(`${page}/description`.split('/'), null, lang)"
  >
    <CardBackgrounded background="/Images/software.jpg" alt="Software Engineer">
      <p class="text-sm sm:text-lg text-justify" v-html="config.__(`${page}/text`.split('/'), null, lang)">
      </p>
    </CardBackgrounded>
  </Content>
</template>

<script setup>
import Config from "~~/composables/Config";

const page = "pages/home";
const props = defineProps({
  lang: {
    type: String,
    default: "en",
  },
});

useHead({
  meta: [
    {
      name: "og:title",
      content: "https://noorani-mm.ir/",
    },
    {
      name: "og:description",
      content: "There you can know about Mohammad Mahdi Noorani",
    },
  ],
});
</script>