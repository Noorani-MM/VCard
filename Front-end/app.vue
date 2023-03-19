<template>
  <div class="min-h-screen">
    <div class="pt-12"></div> <!-- empty space -->
    <MyHeader> 
      <Navbar /> 
    </MyHeader>
    
      <div class="px-2 py-5 grid grid-cols-10">
      <div class="col-span-2 grid items-center">
        <img class="w-24 h-24 border rounded-full" src="" alt="My image"/>
      </div>
      <div class="ml-5 col-span-8 md:col-span-5 bg-red-50">
        <h1 class="text-xl sm:text-2xl font-medium">Your name</h1>
        <p class="w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vero magni sit quidem, illo suscipit cupiditate expedita nam magnam numquam ad deserunt beatae repudiandae. Iste reprehenderit sint molestiae magni aut!</p>
      </div>
    </div>
  </div>
</template>
