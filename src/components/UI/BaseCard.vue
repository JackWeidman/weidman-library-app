<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  display: block; /* Change display property to block */
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: fit-content;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.425);
  background-color: rgba(231, 213, 179, 0.904);
  margin-bottom: 2rem;
}
</style>
