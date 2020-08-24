<template>
  <div class="message" :class="mesClass">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: 'success',
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.message {
  padding: 10px 0;
  font-size: 22px;
}

.success {
  color: #26DE81;
}

.error {
  color: #FC5C65;
}
</style>