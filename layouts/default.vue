<template>
  <div class="flex flex-col h-screen w-screen bg-base-100 text-base-content">
    <ClientOnly>
      <CustomParticles />
    </ClientOnly>
    <div class="flex flex-col gap-2 w-full h-full items-center justify-center z-10">
      <div class="flex flex-col gap-2 items-center w-11/12 max-w-xl">
        <!-- header -->
        <header class="flex flex-col gap-3 bg-base-300 rounded-t-md p-2 font-serif w-full uppercase">
          <!-- header content -->
          <div class="flex flex-col gap-1 px-2 py-1 text-lg sm:text-xl font-semibold">
            <span>HELLO. MY NAME IS</span>
            <h1 class="text-xl sm:text-2xl text-primary">{{ useRuntimeConfig().public.USER_NAME }}</h1>
            <p>I am a full-stack developer</p>
          </div>
          <!-- links -->
          <div
            class="flex flex-row items-center justify-evenly gap-1 text-base py-1 px-2 border-t border-t-base-content text-base-content/70">
            <NuxtLink draggable="false" to="/" class="transmission px-2 py-1 border-b-2"
              :class="check_active_page('') ? 'text-primary border-b-primary' : 'hover:text-base-content hover:border-b-base-content border-b-base-content/70'">
              Home</NuxtLink>
            <NuxtLink draggable="false" to="/about" class="transmission px-2 py-1 border-b-2"
              :class="check_active_page('about') ? 'text-primary border-b-primary' : 'hover:text-base-content hover:border-b-base-content border-b-base-content/70'">
              About</NuxtLink>
            <NuxtLink draggable="false" to="/contact" class="transmission px-2 py-1 border-b-2"
              :class="check_active_page('contact') ? 'text-primary border-b-primary' : 'hover:text-base-content hover:border-b-base-content border-b-base-content/70'">
              Contact</NuxtLink>
            <NuxtLink draggable="false" to="/skills" class="transmission px-2 py-1 border-b-2"
              :class="check_active_page('skills') ? 'text-primary border-b-primary' : 'hover:text-base-content hover:border-b-base-content border-b-base-content/70'">
              Skills</NuxtLink>
          </div>
        </header>

        <!-- page content -->
        <div class="flex flex-col w-full min-h-[28rem] max-h-[28rem] rounded-b-md py-2 bg-base-300">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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