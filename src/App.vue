<template>
  <BookObject/>
</template>

<script>

import BookObject from './components/BookObject.vue'
export default {
  name: 'App',
  components: {
    BookObject
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
