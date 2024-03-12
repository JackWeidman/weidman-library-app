<template>

  <div class="book" @click="toggleDetails">
    <div class="cover" :class="{ open: detailsAreVisible }">
      <h2>{{ title }}</h2>
      <h4>by</h4>
      <h2>{{ author }}</h2>
    </div>

    <div class="pages">
      <div class="content">
        <h2>Genre: {{ genre }}</h2>
        <h2>Length: {{ length }}</h2>
        
        <!-- <h2 v-if="review != ''">Review:
          <p>{{ review }}</p></h2> -->
          <h2>Review:</h2>
          <AddReview></AddReview>
        <button @click="deleteBook" class="delete-button" v-show="detailsAreVisible">Delete</button>
      </div>
    </div>
  </div>

</template>

<script>
import AddReview from './AddReview.vue'
export default {
  props: ['title', 'author', 'genre', 'length', 'review'],
  components: {
    AddReview
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    deleteBook(){
      const id = this.id;
      this.$emit('delete', id)
    }
  },

};
</script>

<style scoped>
/* .books-container{
  display: flex;
  flex-wrap: wrap;
} */
.book {
  position: relative;
  width: 200px;
  height: 275px;
  margin: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 5px;
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
  transform-origin: left center;
  transition: transform 0.5s ease;
}

.pages.content {
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

.cover.open {
  transform: translateX(-100%);
}

.delete-button{
  position: absolute;
  bottom: 10px;
  left: 70%;
 
}
</style>
