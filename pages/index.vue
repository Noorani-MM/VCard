<template>
    <div class="flex flex-col w-full h-full">
        <div class="relative flex flex-col w-full aspect-video lg:h-full items-center justify-center">
            <!-- glass -->
            <figure class="z-0 absolute top-0 left-0 w-full">
                <div class="z-10 absolute top-0 left-0 bg-black/40 w-full h-full"></div>
                <img src="/images/desktop.jpg" class="lg:h-[91vh] w-full  object-cover" alt="desktop" />
            </figure>
            <div class="z-20 flex flex-col gap-6 lg:gap-10 items-center justify-center">
                <h1 class="title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">یاد بگیریم و یاد بدیم</h1>
                <div class="flex flex-col gap-1">
                    <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl">علم گنجی بزرگ است، که با خرج کردن تمام نمی‌شود.</p>
                    <span class="flex flex-row justify-end items-center w-full">
                        <span class="text-shadow" style="font-size: xx-small;">امام علی (ع)</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ContentReader } from '#imports';
</script>