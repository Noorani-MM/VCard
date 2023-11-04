<template>
  <Content
    :title="config.__(`${page}/title`.split('/'), null, lang)"
    :description="config.__(`${page}/description`.split('/'), null, lang)"
  >
    <CardBackgrounded background="/Images/skill.jpg" alt="skills">
      <h2 class="card-title">Programming</h2>
      <table class="table table-xs sm:table-md">
        <thead>
          <tr>
            <th>Language</th>
            <th>Grade</th>
            <th>Framework</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PHP</td>
            <td>
              <Rating :id="1" :rate="5" />
            </td>
            <td>Laravel</td>
            <td>
              <Rating :id="2" :rate="5" />
            </td>
          </tr>
          <tr>
            <td>C#</td>
            <td>
              <Rating :id="3" :rate="5" />
            </td>
            <td>.Netframework</td>
            <td>
              <Rating :id="4" :rate="5" />
            </td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>
              <Rating :id="5" :rate="4" />
            </td>
            <td>Nuxt</td>
            <td>
              <Rating :id="6" :rate="4" />
            </td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>
              <Rating :id="7" :rate="4" />
            </td>
            <td>Tailwind CSS</td>
            <td>
              <Rating :id="8" :rate="4" />
            </td>
          </tr>
          <tr>
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
    </CardBackgrounded>
  </Content>
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