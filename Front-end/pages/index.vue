<template>
  <Content title="HOME" description="A brief info about me.">
    <CardBackgrounded background="/Images/software.jpg" alt="Software Engineer">
      <p class="text-sm sm:text-lg text-justify">
        &nbsp;Hello, I am Mohammad Mahdi Noorani, I'm from Iran and I'm
        developer. I started coding in 2018. My career started with C# and after
        3 years I switched to PHP. <br />
        &nbsp;I have been using Laravel framework and writing API for almost 1
        year now.
      </p>
    </CardBackgrounded>
  </Content>
</template>

<script setup>
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