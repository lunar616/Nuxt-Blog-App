<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post-ui :post="post" />
    <comments-component :comments="comments" />
    <new-comment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from 'axios'

import post from '@/components/Blog/Post/Post.vue'
import newComment from '@/components/Comments/NewComment/NewComment.vue'
import comments from '@/components/Comments/Comments/Comments.vue'

export default {
  components: {
    'post-ui': post,
    'new-comment': newComment,
    'comments-component': comments,
  },
  head() {
    const title = this.post.title;
    const description = this.post.descr;
    const img = this.post.img;
    const type = 'article';
    
    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img },
      ],
    };
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://nuxt-blog-app-be092.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://nuxt-blog-app-be092.firebaseio.com/comments.json`),
    ]);

    let postComments = comments.data ? Object.values(comments.data)
      .filter(comment => {
        return (comment.postId === context.params.id) && comment.publish;
      }) : null;

    return {
      post: post.data,
      comments: postComments,
    };
  },
};
</script>

<style lang="scss">
@import './index.module.scss';
</style>