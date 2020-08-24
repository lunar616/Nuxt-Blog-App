<template>
  <section>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th v-for="(th, index) in thead" :key="index">{{ th }}</th>
          </tr>
        </thead>
        
        <slot name="tbody" />
      </table>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './CommentTable.module.scss';
</style>

