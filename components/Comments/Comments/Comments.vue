<template>
  <section class="comments" v-if="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <p v-if="!comments.length">Comments: 0</p>
      <div class="comment" v-for="comment of comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss">
@import './Comments.module.scss';
</style>