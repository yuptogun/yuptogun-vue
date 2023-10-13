<script setup>
import { ref, reactive, computed } from 'vue';
import Contact from "../components/Contact.vue";

const filterText = ref('');
const filterTypes = ref([]);
const contacts = ref([
    {
        "id": "twitter",
        "name": "Twitter",
        "contact": "yuptogun",
        "url": "https://twitter.com/yuptogun",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": "bi bi-twitter"
        }
    },
    {
        "id": "facebook",
        "name": "Facebook",
        "contact": "yuptogun",
        "url": "https://facebook.com/yuptogun",
        "attributes": ["socialnetwork"],
        "icon": {
            "type": "icon",
            "content": "bi bi-facebook"
        }
    },
    {
        "id": "mastodon",
        "name": "mastodon.social",
        "contact": "yuptogun",
        "url": "https://mastodon.social/@yuptogun",
        "attributes": ["socialnetwork"],
        "rel": true,
        "icon": {
            "type": "icon",
            "content": "bi bi-mastodon"
        }
    },
    {
        "id": "tistory",
        "name": "tistory",
        "contact": "yuptogun",
        "url": "https://yuptogun.tistory.com",
        "attributes": ["content"],
        "icon": {
            "type": "text",
            "content": null
        }
    },
    {
        "id": "velog",
        "name": "velog",
        "contact": "@eojin",
        "url": "https://velog.io/@eojin",
        "attributes": ["content"],
        "icon": {
            "type": "text",
            "content": null
        }
    }
]);
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