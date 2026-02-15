<script setup>
const props = defineProps(['contact']);
const rel = (props.contact.rel ? 'me ' : '') + 'noopener noreferer';
</script>

<template>
    <a :href="contact.url" target="_blank" class="mb-2 me-6 inline-block" :class="contact.url ? 'opacity-100 hover:opacity-75' : ''" :title="contact.name + ': ' + contact.contact" :rel="rel">
        <font-awesome-icon class="me-1 align-middle" :icon="contact.icon.content" v-if="contact.icon.type == 'icon'" />
        <span class="me-1 align-middle text-xs bg-gray-300 dark:bg-gray-600 rounded px-1" v-text="contact.name" v-if="contact.icon.type == 'text'"></span>
        <span :class="contact.url ? 'text-primary' : ''" v-text="contact.contact"></span>
    </a>
</template>