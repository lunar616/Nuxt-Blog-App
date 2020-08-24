<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iste ipsum tenetur eaque, natus doloremque sit, ab dolores fugiat vitae fugit officia molestiae minus libero id? Atque sapiente, nostrum repellat eos harum ad cum repellendus? Molestias, sapiente odit ipsum, obcaecati libero dolorem ducimus doloribus reprehenderit voluptate, id velit illum debitis.</p>
        <Intro title="Lorem ipsum dolor sit amet" />
        <img class="container__img" src="@/assets/img/about.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatum ea doloremque sapiente velit laboriosam quasi nihil maiores cupiditate non molestias facilis autem totam corrupti temporibus obcaecati odio possimus distinctio nemo illum ad dolore. Dolorem, corporis. Sint velit iste iure soluta autem, possimus dolor consequatur veritatis a illum culpa consequuntur atque natus, enim magnam fugit. Eaque, corrupti culpa. Consectetur earum, velit similique est ratione atque non error asperiores reiciendis commodi quisquam illum, voluptatum iste ullam maxime, officiis quam alias ipsa sapiente quos animi pariatur. Reiciendis odit sapiente fuga doloremque praesentium odio ex laborum rerum maiores. Illum aut facere nisi vero.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    const title = 'About My SSR Blog!';
    const description = 'My SSR blog! With Nuxt.js';
    const type = 'site';
    
    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:type', name: 'og:type', content: type },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import './index.module.scss';
</style>