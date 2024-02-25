<template>
  <div class="book" @click="toggleDetails">
    <div class="cover">
      <h2>{{ title }}</h2>
      <h4>by</h4>
      <h2>{{ author }}</h2>
    </div>
    <div class="pages" :class="{ open: detailsAreVisible }">
      <div class="content">
        <h2>Genre: {{ genre }}</h2>
        <h2>Length: {{ length }}</h2>
        <h2>Review:</h2>
        <p>{{ review }}</p>
      </div>
    </div>
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
.book {
  position: relative;
  width: 200px;
  height: 275px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
}

.pages {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7efe5;
  box-sizing: border-box;
  transform-origin: left center;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: transform 0.3s ease;
}

.pages.open {
  transform: rotateY(0deg);
}

.content {
  padding: 20px;
}

/* Additional styles for better appearance */
.book h2,
.book h4,
.book p {
  margin: 0;
}

.book h2 {
  font-size: 18px;
}

.book h4 {
  font-size: 14px;
}
</style>
