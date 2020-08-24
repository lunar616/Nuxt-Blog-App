<template>
  <section class="post-list">
    <div class="container">
      <div class="posts-wrapper">
        <post-preview 
          v-for="post of posts" 
          :key="post.id"
          :admin="admin"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview/PostPreview.vue'

export default {
  components: {
    'post-preview': postPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import './PostsList.module.scss';
</style>