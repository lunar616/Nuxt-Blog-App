<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New comment</h2>
      <Message v-if="message" :message="message" />
      <form class="coment-form" @submit.prevent="onSubmit">
        <AppInput v-model="comment.name">Name:</AppInput>
        <AppTextArea v-model="comment.text">Text:</AppTextArea>

        <div class="controls">
          <AppButton>Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: '',
      },
    };
  },
  methods: {
    onSubmit() {
      axios.post(`https://nuxt-blog-app-be092.firebaseio.com/comments.json`, {
        postId: this.postId,
        publish: false,
        ...this.comment,
      })
        .then(() => {
          this.message = 'Submited';

          this.comment.name = '';
          this.comment.text = '';
        })
        .catch(error => console.log(error));
    },
  },
};
</script>

<style lang="scss">
@import './NewComment.module.scss';
</style>