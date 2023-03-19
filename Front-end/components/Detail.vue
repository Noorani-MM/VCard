<template>
    <div class="bg-white/95 pt-4 m-2">
        <div class="grid grid-cols-8 gap-4 sm:gap-6 font-serif">
            <div class="col-span-3 bg-black text-white text-3xl sm:text-4xl font-bold p-2 grid justify-center">
                {{ title }}
            </div>
            <div class="col-span-5 flex items-center ">
                <span class="w-full">
                    {{  description }}
                    
                    <hr class="border-black/30 mt-1 mr-5"/>
                </span>
            </div>
        </div>

        <div class="px-9 pt-5 h-[25rem]">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    });
</script>