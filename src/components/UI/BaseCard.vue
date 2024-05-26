<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
};
</script>

<style scoped>
.base-card {
  display: block; /* Change display property to block */
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: fit-content;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 15px #050f30;
  background-color: #ffb55b;
  margin-bottom: 2rem;
}
</style>


