<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Contact from "../components/Contact.vue";
import { contactsData } from '../data/contactsData';

const i18n = useI18n();
const filterTypeOptions = ['socialnetwork', 'content', 'dev', 'financial', 'contact'];
const contacts = ref(contactsData);
const filterText = ref(window.localStorage.getItem('filterText') || '');
const filterTypes = ref(JSON.parse(window.localStorage.getItem('filterTypes') || '[]'));
const filteredContacts = computed(() => {
    window.localStorage.setItem('filterText', filterText.value);
    window.localStorage.setItem('filterTypes', JSON.stringify(filterTypes.value));
    return contacts.value.filter((c) => {
        let filterTextValue = filterText.value.toLowerCase();
        const textMatches = filterTextValue == '' || (
            c.id.toLowerCase().includes(filterTextValue) ||
            c.name.toLowerCase().includes(filterTextValue) ||
            c.contact.toLowerCase().includes(filterTextValue) ||
            c.alias.filter((a) => a.toLowerCase().includes(filterTextValue)).length > 0
        );
        const typesMatches = filterTypes.value.length == 0 || (
            filterTypes.value.filter(type => c.attributes.includes(type)).length
        );
        return textMatches && typesMatches;
    });
});
const searchPlaceholder = computed(() => {
    return i18n.t('contacts.placeholders.filterText', {filtered: filteredContacts.value.length}, filteredContacts.value.length);
});
</script>

<template>
    <div id="contacts" class="pt-5 pb-10">
        <div class="block py-5 box-border sticky top-0 bg-gradient-to-b from-white from-90% to-transparent">
            <div class="inline-block me-4 mb-2">
                <input type="text" v-model="filterText" class="rounded border border-gray-300 w-full" :placeholder="searchPlaceholder" />
            </div>
            <div class="inline-block">
                <template v-for="option in filterTypeOptions" :key="option">
                    <label class="me-4 mb-2 inline-block select-none">
                        <input type="checkbox" class="rounded" v-model="filterTypes" :value="option" />
                        {{ i18n.t('contacts.labels.' + option) }}
                    </label>
                </template>
            </div>
        </div>
        <Contact v-for="c in filteredContacts" :key="c.id" :contact="c"></Contact>
        <div v-if="filteredContacts.length == 0">
            <p class="text-lg pt-1">{{ $t('contacts.placeholders.noResult') }}</p>
        </div>
    </div>
</template>