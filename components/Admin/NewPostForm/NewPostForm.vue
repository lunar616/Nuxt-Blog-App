<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Description:</AppInput>
        <AppInput v-model="post.img">Image link:</AppInput>

        <div class="content-wrapper">
          <label class="content-wrapper__label">Content:</label>
          <div class="content-controls">
            <input 
              class="content-controls__input" 
              type="radio" 
              id="html" 
              value="HTML" 
              v-model="post.picked"
            >
            <label class="content-controls__label" for="html">HTML</label>

            <input 
              class="content-controls__input" 
              type="radio" 
              id="markdown" 
              value="Markdown" 
              v-model="post.picked"
            >
            <label class="content-controls__label" for="markdown">Markdown</label>
          </div>

          <div class="content-view">
            <TextArea v-if="post.picked === 'HTML'" v-model="post.content"></TextArea>
            <TextArea v-else v-model="post.content"></TextArea>

            <div 
              class="preview" 
              v-if="post.picked === 'HTML'" 
              v-html="post.content"
            ></div>
            <div 
              class="preview" 
              v-else 
              v-html="markdownTextCompiled"></div>
          </div>
        </div>

        <div class="controls">
          <AppButton>Save</AppButton>
          <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import marked from '@/plugins/marked.js';

export default {
  props: {
    postEdit: {
      type: Object,
    },
  },
  mounted() {
    if (this.post.picked === 'Markdown') {
      this.post.content = this.post.contentWithoutTags;
    };
  },
  data() {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
        title: '',
        descr: '',
        img: '',
        picked: 'HTML',
        content: '',
        contentWithoutTags: null,
      },
    };
  },
  computed: {
    markdownTextCompiled() {
      return marked(this.post.content, { sanitize: true });
    },
  },
  methods: {
    onSubmit() {
      if (this.post.picked === 'Markdown') {
        this.post.contentWithoutTags = this.post.content;

        this.$emit('submit', {
          ...this.post,
          content: this.markdownTextCompiled,
        });
      };

      this.$emit('submit', this.post);
    },
    cancel() {
      this.$router.push('/admin/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './NewPostForm.module.scss';
</style>