<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar/index.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Sidebar />
  <Header />
  <div class="main main-app p-3 p-lg-4">
    <RouterView />
    <Footer />
  </div>
</template>
