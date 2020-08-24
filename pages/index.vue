<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <promo-component />
      <Intro title="My lasts posts: " />
      <PostsList :posts="postsLoaded" />
      <contacts-ui />
    </div>
  </div>
</template>

<script>
import promo from '@/components/Promo/Promo.vue'
import contacts from '@/components/UI/Contacts.vue'

export default {
  components: {
    'promo-component': promo,
    'contacts-ui': contacts,
  },
  head() {
    const title = 'My SSR blog!';
    const description = 'My SSR blog! With Nuxt.js';
    const type = 'site';
    
    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:type', name: 'og:type', content: type },
      ],
    };
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>