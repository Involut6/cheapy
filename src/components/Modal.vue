<script setup>
const emit = defineEmits(["closeModal"]);
</script>

<template>
    <transition name="fade">
    <div class="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[#00000070] overflow-x-hidden overflow-y-auto z-10" @click.self="emit('closeModal')">
        <div class="w-fit my-32 mx-auto">
            <div class="space-y-4 text-center bg-white relative font-bold shadow p-4 rounded">
                <slot />
            </div>
        </div>
    </div>
</transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
</style>