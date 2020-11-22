<template>
  <div>
    <nav class="teal lighten-2">
      <div class="nav-wrapper">
        <router-link to="/">Home</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="active"><router-link to="/">Список дел</router-link></li>
          <li><router-link to="/contacts">Контакты</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  nav {
    padding: 0 1rem;
  }
</style>
