<template>
  <div class="control">
    <label> <slot /> </label>
    <textarea
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  height: 100%;
  max-height: 700px;
}
</style>