<template>
  <section class="auth">
    <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <form class="auth-form" @submit.prevent="onSubmit"> 
        <div class="auth-info">
          <p>Login: <span class="auth-info__text">admin@test.ru</span></p>
          <p>Password: <span class="auth-info__text">admin123</span></p>
        </div>

        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppInput v-model="user.password" type="password">Password:</AppInput>

        <div class="controls">
          <AppButton>Log In</AppButton>
        </div>
      </form>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authUser', this.user)
        .then(res => {
          this.$router.push('/admin');
        })
        .catch(error => {
          this.user.email = '';
          this.user.password = '';

          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.module.scss';
</style>