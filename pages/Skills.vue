<template>
  <div class="flex flex-col gap-2 w-full h-full">
    <!-- header section -->
    <div class="flex flex-row items-center gap-3 font-serif">
      <h2 class="flex items-center justify-center px-3 py-2 bg-primary text-primary-content text-2xl font-semibold w-56">Skills</h2>
      <span class="flex flex-row items-center text-sm md:text-base px-2 py-1 border-b border-b-base-content w-[80vh]">
        A brief info about me.
      </span>
    </div>

    <!-- page content -->
    <div class="flex flex-col w-full items-center h-5/6">
      <div class="relative flex flex-col w-11/12 rounded-lg h-full overflow-clip">
        <NuxtImg class="absolute top-0 left-0 w-full h-full object-cover" src="/Images/skill.jpg"
          alt="mySkills" />
        <div class="flex flex-col gap-7 w-full h-full bg-base-200/40 z-10 px-5 py-6 md:py-8 md:px-7">
          <h2 class="font-semibold">Programming</h2>
          <table class="flex flex-col gap-2 w-full text-xs">
            <thead>
              <tr class="grid grid-cols-4 gap-2">
                <th class="w-full text-start">Language</th>
                <th class="w-full text-start">Grade</th>
                <th class="w-full text-start">Framework</th>
                <th class="w-full text-start">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr class="grid grid-cols-4 gap-2">
                <td>PHP</td>
                <td>
                  <Rating :id="1" :rate="5" />
                </td>
                <td>Laravel</td>
                <td>
                  <Rating :id="2" :rate="5" />
                </td>
              </tr>
              <tr class="grid grid-cols-4 gap-2">
                <td>C#</td>
                <td>
                  <Rating :id="3" :rate="5" />
                </td>
                <td>.Netframework</td>
                <td>
                  <Rating :id="4" :rate="5" />
                </td>
              </tr>
              <tr class="grid grid-cols-4 gap-2">
                <td>Javascript</td>
                <td>
                  <Rating :id="5" :rate="4" />
                </td>
                <td>Nuxt</td>
                <td>
                  <Rating :id="6" :rate="4" />
                </td>
              </tr>
              <tr class="grid grid-cols-4 gap-2">
                <td>CSS</td>
                <td>
                  <Rating :id="7" :rate="4" />
                </td>
                <td>Tailwind CSS</td>
                <td>
                  <Rating :id="8" :rate="4" />
                </td>
              </tr>
              <tr class="grid grid-cols-4 gap-2">
                <td>Python</td>
                <td>
                  <Rating :id="9" :rate="3" />
                </td>
                <td>Django</td>
                <td>
                  <Rating :id="10" :rate="0" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Config from "~~/composables/Config";

const page = "pages/skill";
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
      content: "php, laravel, c#, tailwind css, nuxt, javascript, skills"
    },
    {
      name: "description",
      property: "og:description",
      content: "What can I do as a software engineer.",
    },
    {
      name: "title",
      property: "og:title",
      content: "My skills"
    }
  ],
});
</script>