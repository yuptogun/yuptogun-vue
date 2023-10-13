<script setup>
import { ref, reactive, computed } from 'vue';
import Contact from "../components/Contact.vue";

const contacts = reactive([
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
            "type": "text"
        }
    },
    {
        "id": "velog",
        "name": "velog",
        "contact": "@eojin",
        "url": "https://velog.io/@eojin",
        "attributes": ["content"],
        "icon": {
            "type": "text"
        }
    }
]);
const searchPlaceholder = computed(() => {
    return '총 ' + contacts.length + '개 연락처 검색';
});
</script>

<template>
    <div id="contacts" class="p-5">
        <input type="text" v-model="contactSearch" class="block border rounded mb-3" :placeholder="searchPlaceholder" />
        <Contact v-for="c in contacts" :key="c.id" :contact="c"></Contact>
    </div>
</template>