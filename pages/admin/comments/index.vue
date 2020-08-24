<template>
  <client-only>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']">
      <tbody class="tbody" slot="tbody">
        <tr 
          class="comment" 
          v-for="comment of comments"
          :key="comment.id"
        >
          <td><span>{{ comment.name }}</span></td>
          <td class="comment__text"><span>{{ comment.text }}</span></td>
          <td>
            <span class="status true" v-if="comment.publish">Publish</span>
            <span class="status false" v-else>Hidden</span>
          </td>
          <td><span class="link" @click="changeComment(comment)">Change status</span></td>
          <td><span class="link" @click="deleteComment(comment.id)">Delete</span></td>
        </tr>
      </tbody>
    </commentTable>
  </client-only>
</template>

<script>
import axios from 'axios'

import commentTable from '@/components/Admin/CommentTable/CommentTable.vue'

export default {
  components: {
    commentTable,
  },
  layout: 'admin',
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      axios
        .get('https://nuxt-blog-app-be092.firebaseio.com/comments.json')
          .then(res => {
            let commentsArray = [];
            Object.keys(res.data).forEach(key => {
              const comment = res.data[key];
              commentsArray.push({
                ...comment,
                id: key,
              });
            });

            this.comments = commentsArray;
          })
          .catch(error => console.log(error));
    },
    changeComment(comment) {
      comment.publish = !comment.publish;
      axios
        .put(`https://nuxt-blog-app-be092.firebaseio.com/comments/${comment.id}.json`, comment);
    },
    deleteComment(id) {
      axios
        .delete(`https://nuxt-blog-app-be092.firebaseio.com/comments/${id}.json`)
        .then(() => this.loadComments())
        .catch(error => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.module.scss';
</style>