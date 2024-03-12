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
      @delete="deleteBook(book.id)"
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
      });
    },
    deleteBook(id) {
      const index = this.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
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
  min-height: 500px;
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
  border: 5px solid #186309;
  background-color: #186309;
  color: white;
  padding: 0.05rem 1rem;
}
</style>

<style>
body {
  background-color: #e5f2c9; /* Change to your desired background color */
}

</style>
