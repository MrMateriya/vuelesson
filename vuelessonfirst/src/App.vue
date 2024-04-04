<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="pageMain">
    <Header class="header"/>
    <div class="content">
      <RouterView/>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<style scoped>
.pageMain {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.header {
}
.content {
  flex-grow: 1;
}
.footer {
}
</style>
