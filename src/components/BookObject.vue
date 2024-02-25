<template>
  <div class="center bordered-div">
    <h2>Title:{{ title }}</h2>
    <h2>Author:{{ author }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible" class="center">
      <li>
        <h2>Genre:{{ genre }}</h2>
      </li>
      <li>
        <h2>Length:{{ length }}</h2>
      </li>
      <li>
        <h2>Review:{{ review }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'author', 'genre', 'length', 'review'],
  data() {
    return {
      detailsAreVisible: false,
      
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>


<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none;
}
.bordered-div {
  border: 1px solid black
}
</style>