<template>
  <div class="min-h-screen">
    <div class="flex justify-start">
      <div class="w-[32rem] sm:w-[38rem] mx-auto md:mx-0">
        <div class="pt-12"></div>
        <!-- empty space -->
        <div class="bg-white/95 pt-4 m-2">
          <div class="pl-4">
            <div class="text-black/50 font-bold font-serif mb-4">
              <span class="text-xl sm:text-2xl">HELLO. MY NAME IS</span>
              <h1 class="text-black text-2xl sm:text-3xl">
                MOHAMMAD MAHDI NOORANI
              </h1>
              <span class="text-lg sm:text-xl">I AM BACKEND DEVELOPER</span>
            </div>
          </div>
          <hr class="mx-4 border-black/50" />
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
        <div>
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
  