<template>
    <div class="min-h-screen bg-[url('/Images/Background.jpg')] bg-cover">
    <div class="pt-12"></div> <!-- empty space -->
    <MyHeader>
        <Navbar /> 
    </MyHeader>

    <Detail title="ABOUT" description="A brief info about me">
        <RouterView />
    </Detail>
    </div>
</template>

<script setup>
console.log("layouts");
</script>
  