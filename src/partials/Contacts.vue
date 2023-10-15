<script setup>
import { ref, computed } from 'vue';
import Contact from "../components/Contact.vue";
import data from "../data/contacts.json";

const filterTypeOptions = [
    {"value": "socialnetwork", "label": "SNS"},
    {"value": "content", "label": "창작"},
    {"value": "dev", "label": "개발"},
    {"value": "financial", "label": "후원/구매"},
    {"value": "contact", "label": "연락처"}
];
const contacts = ref(data);
const filterText = ref('');
const filterTypes = ref([]);
const filteredContacts = computed(() => {
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
    return '총 ' + contacts.value.length + '개 계정 검색';
});
</script>

<template>
    <div id="contacts" class="py-10">
        <div class="block mb-3 box-border">
            <div class="inline-block me-4 mb-2">
                <input type="text" v-model="filterText" class="rounded border border-gray-300 w-full" :placeholder="searchPlaceholder" />
            </div>
            <div class="inline-block">
                <template v-for="option in filterTypeOptions" :key="option.value">
                    <label class="me-4 mb-2 inline-block select-none">
                        <input type="checkbox" class="rounded" v-model="filterTypes" :value="option.value" />
                        {{ option.label }}
                    </label>
                </template>
            </div>
        </div>
        <Contact v-for="c in filteredContacts" :key="c.id" :contact="c"></Contact>
        <div v-if="filteredContacts.length == 0">
            <p class="text-center text-lg">다시 검색해 주세요!</p>
        </div>
    </div>
</template>