<template>
  <div class="flex flex-col gap-2 w-full h-full">
    <!-- header section -->
    <div class="flex flex-row items-center gap-3 font-serif">
      <h2 class="flex items-center justify-center px-3 py-2 bg-primary text-primary-content text-2xl font-semibold w-56">
        ERROR</h2>
      <span class="flex flex-row items-center text-sm md:text-base px-2 py-1 border-b border-b-base-content w-[80vh]">
        Page not found 404.
      </span>
    </div>

    <div class="flex content-center w-full h-full p-2 relative">
      <NuxtImg src="/Images/404.jpg" draggable="false" alt="page-not-found" class="rounded-md mx-auto" />
      <div class="absolute top-0 left-0 w-full h-full bg-base-200/40 flex flex-col items-center justify-end p-11">
        <NuxtLink to="/"
          class="px-3 py-2 border-primary rounded-md bg-primary transmission w-1/4 text-center shadow active:shadow-none">
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

