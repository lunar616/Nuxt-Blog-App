<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo"><nuxt-link to="/">Blog</nuxt-link></div>
          <ul class="navbar-list">
            <li 
              class="navbar-item" 
              v-for="link in links" 
              :key="link.title"
            >
              <nuxt-link 
                class="navbar-link"
                active-class="navbar-link-active"
		            :title="link.title" 
                :to="link.url"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Blog', url: '/blog' },
        { title: 'About', url: '/about' },
        { title: 'Admin', url: '/admin' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './Header.module.scss';
</style>