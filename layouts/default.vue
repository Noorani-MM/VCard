<template>
  <div class="flex h-screen w-screen">
    <!-- <ClientOnly>
      <CustomParticles />
    </ClientOnly>-->
    <div class="flex justify-start h-fit my-auto mx-auto">
      <div class="w-[97%] sm:w-[38rem] mx-auto">
        <!-- Header -->
        <div class="bg-base-200 rounded-t-md">
          <div class="pl-4 uppercase">
            <div class="text-warning font-bold font-serif mb-4 py-1">
              <span class="text-xl sm:text-2xl">{{
                config.__(`${layout}/title`.split("/"), null, lang)
              }}</span>
              <h1 class="text-info-content text-2xl sm:text-3xl">
                {{ config.__(`${layout}/name`.split("/"), null, lang) }}
              </h1>
              <span class="text-lg sm:text-xl">{{
                config.__(`${layout}/skill`.split("/"), null, lang)
              }}</span>
            </div>
          </div>
          <hr class="mx-4 border-info-content" />
          <!-- Page links -->
          <div class="px-5 w-full">
            <Navbar>
              <NavbarItem
                link="/"
                :title="config.__(`${tabs}/home`.split('/'), null, lang)"
                :active="check_active_page('')"
              />
              <NavbarItem
                link="/about"
                :title="config.__(`${tabs}/about`.split('/'), null, lang)"
                :active="check_active_page('about')"
              />
              <NavbarItem
                link="/contact"
                :title="config.__(`${tabs}/contact`.split('/'), null, lang)"
                :active="check_active_page('contact')"
              />
              <NavbarItem
                link="/skills"
                :title="config.__(`${tabs}/skill`.split('/'), null, lang)"
                :active="check_active_page('skills')"
              />
            </Navbar>
          </div>
        </div>
        <!-- Page content-->
        <div class="bg-base-200 rounded-b-md">
          <NuxtPage :lang="lang"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Config from "~~/composables/Config";

const layout = "layout/header";
const tabs = "layout/tabs";
const lang = ref("en");

const current_page = () => {
  let path = useRoute().fullPath;
  let slug = path.split("/");

  return slug[1] ?? slug[0];
};
const check_active_page = (page) => {
  return page === current_page();
};

addRouteMiddleware((to, from) => {
  let baseTitle = "Noorani";
  let page = to.fullPath.split("/")[1];
  if (page === "") {
    page = "home";
  }
  let title = [baseTitle, page].join(" - ");
  useHead({
    title: title,
  });
});
</script>
  
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.27s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>