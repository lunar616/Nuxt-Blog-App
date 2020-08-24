<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/System/Header/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>