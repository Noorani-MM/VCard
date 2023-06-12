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
useHead({
  title: "Profile",
});
const check_active_page = (current_page) => {
  let path = useRoute().fullPath;
  let slug = path.split("/");

  return current_page === slug[1];
};
</script>
  