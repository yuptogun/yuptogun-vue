<script setup>
import Intro from './partials/Intro.vue';
import Contacts from './partials/Contacts.vue';
import Footer from './partials/Footer.vue';
</script>

<template>
  <div class="flex flex-row h-full">
    <div class="flex-none p-5 self-start sticky top-0 self-start">
      <a href="#">
        <img src="https://gravatar.com/avatar/6827b8f452e98fcda676789477b05de3658e7f81f69d9dc66957eee8cd223c84.jpg?s=160" class="w-16 md:w-32 lg:w-48 h-auto rounded-full">
      </a>
    </div>
    <div class="pt-5">
      <Intro></Intro>
      <Contacts></Contacts>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
</style>
