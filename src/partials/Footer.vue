<script setup>
import { ref, computed } from "vue";

const taglines = ref([
    'No plan.',
    'Be oversmart.',
    'A pencil in His hand.',
]);
const tagline = computed(() => {
    return taglines.value[Math.floor(Math.random() * taglines.value.length)];
})
</script>

<template>
    <div class="pt-5 pb-10">
        <blockquote class="text-center text-gray-400" v-text="tagline"></blockquote>
    </div>
</template>