<template>
  <div class="flex h-screen w-screen">
    <ClientOnly>
      <CustomParticles />
    </ClientOnly>
    <div class="flex justify-start h-fit my-auto mx-auto">
      <div class="w-[97%] sm:w-[38rem] mx-auto">
        <!-- Header -->
        <div class="bg-base-200  rounded-t-md">
          <div class="pl-4 uppercase">
            <div class="text-warning font-bold font-serif mb-4 py-1">
              <span class="text-xl sm:text-2xl">Hello. My name is</span>
              <h1 class="text-info-content text-2xl sm:text-3xl">
                MOHAMMAD MAHDI NOORANI
              </h1>
              <span class="text-lg sm:text-xl">I am a Fullstack DEVELOPER</span>
            </div>
          </div>
          <hr class="mx-4 border-info-content" />
          <!-- Page links -->
          <div class="px-5 w-full">
            <Navbar>
              <NavbarItem
                link="/"
                title="HOME"
                :active="check_active_page('')"
              />
              <NavbarItem
                link="/about"
                title="ABOUT"
                :active="check_active_page('about')"
              />
              <NavbarItem
                link="/contact"
                title="Contact"
                :active="check_active_page('contact')"
              />
              <NavbarItem
                link="/skills"
                title="skills"
                :active="check_active_page('skills')"
              />
            </Navbar>
          </div>
        </div>
        <!-- Page content-->
        <div class="bg-base-200 rounded-b-md">
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