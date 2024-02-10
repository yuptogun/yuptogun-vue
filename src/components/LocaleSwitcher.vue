<script setup>
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const changeLocale = function (l) {
    window.localStorage.setItem('locale', l);
    i18n.locale.value = l;
};
</script>

<template>
    <div class="mt-5">
        <a class="block md:inline-block me-2 cursor-pointer" title="우리말로 보기"
            :class="i18n.locale.value == 'ko' ? 'text-gray-600' : 'text-gray-400 hover:text-gray-600'"
            @click="changeLocale('ko')">
            우리말
        </a>
        <a class="block md:inline-block me-2 cursor-pointer" title="Get English version of the page"
            :class="i18n.locale.value == 'en' ? 'text-gray-600' : 'text-gray-400 hover:text-gray-600'"
            @click="changeLocale('en')">
            English
        </a>
    </div>
</template>