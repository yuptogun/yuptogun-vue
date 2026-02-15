<script setup>
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const changeLocale = function (l) {
    window.localStorage.setItem('locale', l);
    i18n.locale.value = l;
};
const getClassnames = function (l) {
    const selected = 'text-gray-600 dark:text-gray-400';
    const selectable = 'text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400';
    return `block md:inline-block me-2 cursor-pointer ${i18n.locale.value == l ? selected : selectable}`;
};
</script>

<template>
    <div class="mt-5">
        <a @click="changeLocale('ko')" :class="getClassnames('ko')" title="우리말로 보기">우리말</a>
        <a @click="changeLocale('en')" :class="getClassnames('en')" title="Get English version of the page">English</a>
    </div>
</template>