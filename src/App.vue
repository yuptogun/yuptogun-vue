<script setup>
import Intro from './partials/Intro.vue';
import Contacts from './partials/Contacts.vue';
</script>

<template>
  <div class="flex flex-row h-full">
    <div class="flex-none p-5 self-start sticky top-0 self-start">
      <img src="https://gravatar.com/avatar/6827b8f452e98fcda676789477b05de3658e7f81f69d9dc66957eee8cd223c84.jpg?s=160" class="w-12 md:w-24 h-auto rounded-full">
    </div>
    <div class="pt-5">
      <Intro></Intro>
      <Contacts></Contacts>
    </div>
  </div>
</template>

<style scoped>
</style>
