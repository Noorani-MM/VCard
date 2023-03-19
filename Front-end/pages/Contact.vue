<template>
    <Detail title="Contact" description="I'd love to hear from you">
        <div>
            <form class="flex flex-col gap-2">
                <div class="flex flex-row gap-3">
                    <div class="w-1/3 flex justify-end items-center">
                        <label>Mobile:</label>
                    </div>
                    <div class="w-2/3">
                        <input class="border w-full  px-2 py-1" maxlength="11" type="text" v-model="form.mobile" />
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <div class="w-1/3 flex justify-end items-start">
                        <label>Description:</label>
                    </div>
                    <div class="w-2/3">
                        <textarea class="border w-full  px-2 py-1" rows="8" v-model="form.description"></textarea>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="px-6 p-1 bg-black/90 shadow-md rounded-md text-lg sm:text-xl text-white">Send</button>
                </div>
            </form>
        </div>
    </Detail>
</template>

<script setup>
    const form = ref({
        mobile: null,
        description: null
    });
</script>