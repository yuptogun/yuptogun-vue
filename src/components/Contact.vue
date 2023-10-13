<script setup>
defineProps(['contact']);
</script>

<template>
    <a :href="contact.url" target="_blank" class="me-5 inline-block opacity-100 hover:opacity-75" :title="contact.name + ': ' + contact.contact" :rel="contact.rel ? 'me' : null">
        <i v-if="contact.icon.type == 'icon'" :class="contact.icon.content" class="me-1 align-middle"></i>
        <span v-if="contact.icon.type == 'text'" class="me-1" v-text="contact.name"></span>
        <span class="text-primary" v-text="contact.contact"></span>
    </a>
</template>