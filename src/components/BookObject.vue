<template>
  <div class="book" @click="toggleDetails">
    <div class="cover" :class="{ open: detailsAreVisible }">
      <h2>{{ title }}</h2>
      <h4>by</h4>
      <h2>{{ author }}</h2>
    </div>

    <div class="pages" :class="{ open: detailsAreVisible }">
      <div class="content">
        <h2>Genre: {{ genre }}</h2>
        <h2>Length: {{ length }}</h2>
        <h2>Review: {{ review }}</h2>

        <button
          @click="deleteBook"
          class="delete-button"
          v-show="detailsAreVisible"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'author', 'genre', 'length', 'review'], // Include 'id' prop

  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    deleteBook() {
      // Emit 'delete' event with the book's id
      this.$emit('delete', this.id);
    },
  },
};
</script>

<style scoped>
.book {
  position: relative;
  width: 200px;
  height: 275px;
  margin: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0 8px 15px #050f30;
  -webkit-animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
  transition: opacity 0.5s ease;
}

.pages {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  opacity: 0;
  pointer-events: none; /* to prevent interaction when hidden */
  transition: opacity 0.5s ease;
}

.pages.open {
  opacity: 1;
  pointer-events: auto; /* allow interaction when visible */
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

.delete-button {
  position: absolute;
  bottom: 10px;
  left: 70%;
}


 @-webkit-keyframes shadow-pop-tl {
  0% {
    -webkit-box-shadow: 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b;
            box-shadow: 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: -1px -1px #ffb55b, -2px -2px #ffb55b, -3px -3px #ffb55b, -4px -4px #ffb55b, -5px -5px #ffb55b, -6px -6px #ffb55b, -7px -7px #ffb55b, -8px -8px #ffb55b;
            box-shadow: -1px -1px #ffb55b, -2px -2px #ffb55b, -3px -3px #ffb55b, -4px -4px #ffb55b, -5px -5px #ffb55b, -6px -6px #ffb55b, -7px -7px #ffb55b, -8px -8px #ffb55b;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}
@keyframes shadow-pop-tl {
  0% {
    -webkit-box-shadow: 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b;
            box-shadow: 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b, 0 0 #ffb55b;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    -webkit-box-shadow: -1px -1px #ffb55b, -2px -2px #ffb55b, -3px -3px #ffb55b, -4px -4px #ffb55b, -5px -5px #ffb55b, -6px -6px #ffb55b, -7px -7px #ffb55b, -8px -8px #ffb55b;
            box-shadow: -1px -1px #ffb55b, -2px -2px #ffb55b, -3px -3px #ffb55b, -4px -4px #ffb55b, -5px -5px #ffb55b, -6px -6px #ffb55b, -7px -7px #ffb55b, -8px -8px #ffb55b;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}

</style>
