<script setup>

</script>

<template>
  <header class="header">
    <nav>
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li><RouterLink to="/products">Товары</RouterLink></li>
        <li><RouterLink to="/photos">Фотки</RouterLink></li>
        <li><RouterLink to="/about">О компании</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {

}
nav {
  background-color: rgba(68, 55, 80, 0.56);
}
ul {
  list-style: none;
  display: flex;
}
a {
  display: inline-block;
  padding: 20px 40px;
  text-decoration: none;
  color: aliceblue;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
}
a:hover {
  background-color: rgba(207, 166, 243, 0.56);
}
</style>