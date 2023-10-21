<script setup>
import Intro from './partials/Intro.vue';
import Contacts from './partials/Contacts.vue';
import Footer from './partials/Footer.vue';
import Navigation from './partials/Navigation.vue';
</script>

<template>
  <div class="flex flex-row h-full">
    <div class="flex-none p-4 md:p-5 self-start sticky top-0 self-start">
      <Navigation></Navigation>
    </div>
    <div class="pt-4 ps-2 md:pt-5 md:ps-5">
      <Intro></Intro>
      <Contacts></Contacts>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
</style>
