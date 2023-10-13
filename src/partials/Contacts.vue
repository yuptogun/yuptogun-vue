<script setup>
import { ref, computed } from 'vue';
import Contact from "../components/Contact.vue";
import data from "../data/contacts.json";

const contacts = ref(data);
const filterText = ref('');
const filterTypes = ref([]);
const filteredContacts = computed(() => {
    return contacts.value.filter((c) => {
        const textMatches = filterText.value == '' || (
            c.id.includes(filterText.value) ||
            c.name.includes(filterText.value) ||
            c.contact.includes(filterText.value)
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
    <div id="contacts" class="p-5">
        <div class="block mb-3">
            <input type="text" v-model="filterText" class="inline-block border border-gray-300 rounded me-4 mb-2" :placeholder="searchPlaceholder" />
            <div class="inline-block">
                <label class="me-4 mb-2 inline-block">
                    <input type="checkbox" class="rounded" v-model="filterTypes" value="socialnetwork" />
                    SNS
                </label>
                <label class="me-4 mb-2 inline-block">
                    <input type="checkbox" class="rounded" v-model="filterTypes" value="content" />
                    창작
                </label>
                <label class="me-4 mb-2 inline-block">
                    <input type="checkbox" class="rounded" v-model="filterTypes" value="dev" />
                    개발
                </label>
                <label class="me-4 mb-2 inline-block">
                    <input type="checkbox" class="rounded" v-model="filterTypes" value="financial" />
                    (금전)거래
                </label>
                <label class="me-4 mb-2 inline-block">
                    <input type="checkbox" class="rounded" v-model="filterTypes" value="contact" />
                    연락처
                </label>
            </div>
        </div>
        <Contact v-for="c in filteredContacts" :key="c.id" :contact="c"></Contact>
        <div v-if="filteredContacts.length == 0">
            <p class="text-center text-lg">다시 검색해 주세요!</p>
        </div>
    </div>
</template>