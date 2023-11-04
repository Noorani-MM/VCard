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
      name: "keywords",
      content: "Mohammad Mahdi, Noorani, محمد مهدی, نورانی, محمد مهدی نورانی, developer, توسعه‌دهنده"
    },
    {
      name: "title",
      property: "og:title",
      content: "Mohammad Mahdi Noorani",
    },
    {
      name: "description",
      property: "og:description",
      content: "There you can know about Mohammad Mahdi Noorani",
    },
  ],
});
</script>