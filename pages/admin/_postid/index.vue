<template>
  <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm/NewPostForm.vue'

export default {
  components: {
    newPostForm,
  },
  layout: 'admin',
  asyncData(context) {
    return axios.get(`https://nuxt-blog-app-be092.firebaseio.com/posts/${context.params.postid}.json`)
      .then(res => {
        return {
          post: {
            ...res.data,
            id: context.params.postid,
          },
        };
      })
      .catch(error => context.error(error));
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin');
        });
    },
  },
};
</script>