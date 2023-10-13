<script setup>
import { ref, computed } from 'vue';
import Contact from "../components/Contact.vue";
import data from "../data/contacts.json";

const filterText = ref('');
const filterTypes = ref([]);
const contacts = ref(data);
const filteredContacts = computed(() => {
    return contacts.value.filter((c) => {
        return c.id.includes(filterText.value)
            || c.name.includes(filterText.value)
            || c.contact.includes(filterText.value)
            || (filterTypes.value.length && filterTypes.value.every(type => c.attributes.contains(type)));
        });
});
const searchPlaceholder = computed(() => {
    return '총 ' + filteredContacts.value.length + '개 연락처 검색';
});
</script>

<template>
    <div id="contacts" class="p-5">
        <input type="text" v-model="filterText" class="block border rounded mb-3" :placeholder="searchPlaceholder" />
        <Contact v-for="c in filteredContacts" :key="c.id" :contact="c"></Contact>
    </div>
</template>