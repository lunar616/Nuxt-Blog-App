<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <Intro title="My posts: " />
      <PostsList :posts="postsLoaded" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    },
  },
  head() {
    const title = 'My Blog Page!';
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
};
</script>