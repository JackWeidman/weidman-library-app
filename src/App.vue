<template>
  <AddBook @add-book="addBook" class="centered"></AddBook>
  <div class="books-container">
    <BookObject
      v-for="book in books"
      :key="book.id"
      :author="book.author"
      :title="book.title"
      :genre="book.genre"
      :length="book.length"
      :review="book.review"
    ></BookObject>
  </div>
</template>

<script>
import AddBook from './components/AddBook.vue';
import BookObject from './components/BookObject.vue';
export default {
  name: 'App',
  components: {
    BookObject,
    AddBook,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    addBook(newBook) {
      this.books.push({
        id: this.books.length + 1,
        title: newBook.title,
        author: newBook.author,
        genre: newBook.genre,
        length: newBook.length,
        // review: review
      });
    },
  },
};
</script>

<style scoped>

.centered {
  margin-bottom: 20px;
  text-align: center;
}
.books-container {
  display: flex;
  flex-wrap: wrap;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #186309;
  background-color: #186309;
  color: white;
  padding: 0.05rem 1rem;
}
</style>
<style>
body {
  background-color: rgb(47, 114, 77); /* Change to your desired background color */
}
</style>