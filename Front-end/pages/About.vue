<template>
  <Detail title="ABOUT" description="Here you can know more about me !">
    <CardBackgrounded background="/Images/about.jpg" alt="about">
      <p class="text-sm sm:text-lg text-justify">
        <span>
          &nbsp;I am energetic, creative, frank and love solving problems and
          new challenges.
        </span>
        <br />
        <span>
          &nbsp;I enjoy working with people and teams who are crazy about
          improvement, I try to improve with the team and also make the team
          improve.
        </span>
      </p>
    </CardBackgrounded>
  </Detail>
</template>

<script setup>
useHead({
  meta: [
    {
      name: "description",
      property: "og:description",
      content: "Here you can know more about Mohammad Mahdi Noorani"
    },
    {
      name: "og:title",
      content: "https://noorani-mm.ir/about"
    }
  ]
})
</script>