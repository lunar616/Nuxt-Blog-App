<template>
  <client-only>
    <div class="wrapper">
      <Header />
      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Admin Page">
          <nuxt-link class="link linkWhite" to="/admin">Admin</nuxt-link>
          <nuxt-link class="link linkWhite" to="/admin/new-post">New post</nuxt-link>
          <nuxt-link class="link linkWhite" to="/admin/comments">Comments</nuxt-link>
          <span class="link linkWhite" @click="logoutUser">Logout</span>
        </Intro>
        <Nuxt />
      </div>
    </div>
  </client-only>
</template>

<script>
import Header from '@/components/System/Header/Header.vue'

export default {
  components: {
    Header,
  },
  middleware: ['auth-check', 'auth'],
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/admin/auth');
        })
    },
  },
};
</script>