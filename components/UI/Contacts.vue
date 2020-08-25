<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <Message v-if="message" :message="message" :mesClass="error" />
      <form class="contact-form" @submit.prevent="onSubmit">
        <AppInput v-model="user.name">Name:</AppInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppTextArea v-model="user.text">Text:</AppTextArea>

        <div class="controls">
          <AppButton btnClass="btnWhite">Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      message: null,
      error: null,
      user: {
        name: '',
        email: '',
        text: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.$route.params)
      axios.post('http://localhost:3000/telegram.php', { ...this.user })
        .then(() => {
          this.error = null;
          this.message = 'Submited';
        })
        .catch(() => {
          this.error = 'error';
          this.message = 'Error';
        })
        .finally(() => {
          this.user.name = '';
          this.user.email = '';
          this.user.text = '';
        });
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4F68F4;
  color: #FFF;

  .title {
    color: #FFF;
  }

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>