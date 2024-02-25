<template>
  <form @submit.prevent="addBook">
    <div>
      <label>Title</label>
      <input type="text" v-model="newBook.title" />
    </div>
    <div>
      <label>Author</label>
      <input type="text" v-model="newBook.author" />
    </div>
    <div>
      <label>Genre</label>
      <input type="text" v-model="newBook.genre" />
    </div>
    <div>
      <label for="dropdown">Length</label>
      <select id="dropdown" v-model="newBook.length">
        <option value="Short">Short</option>
        <option value="Medium">Medium</option>
        <option value="Long">Long</option>
      </select>
    </div>
    <!-- Need to create new component for this? -->
    <!-- <div>
      <label>Review</label> 
      <input type="text" />
    </div> -->
    <button>Add Book</button>
  </form>
</template>

<script>
export default {
  emits: ['add-book'],
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        genre: '',
        length: '',
        // review: '',
      },
    };
  },
  methods: {
    addBook() {
      this.$emit('add-book', this.newBook);
      this.newBook = {
        title: '',
        author: '',
        genre: '',
        length: '',
        // review: '',
      }
    },
  },
};
</script>
