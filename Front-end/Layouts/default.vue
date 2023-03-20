<template>
    <div class="min-h-screen bg-[url('/Images/Background.jpg')] bg-cover">
        <div class="flex justify-start">
            <div class="w-[32rem] sm:w-[38rem]">
                <div class="pt-12"></div> <!-- empty space -->
                <MyHeader>
                    <Navbar /> 
                </MyHeader>

                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
console.log("layouts");
</script>
  