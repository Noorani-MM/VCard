<template>
  <div class="min-h-screen bg-[url('/Images/Background.jpg')] bg-cover">
    <div class="flex justify-start">
      <div class="w-[32rem] sm:w-[38rem] mx-auto md:mx-0">
        <div class="pt-12"></div>
        <!-- empty space -->
        <MyHeader>
          <Navbar>
            <NavbarItem link="/" title="HOME" :active="check_active_page('')" />
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
        </MyHeader>
        <NuxtPage />
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
  let page = to.fullPath.split('/')[1];
  if (page === "") {
    page = "home";
  }
  let title = [baseTitle, page].join(" - ");
  useHead({
    title: title,
  });
});
</script>
  