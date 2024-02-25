<template>
  <ul>
    <BookObject
    v-for="book in books"
    :key="book.id"
    :author="book.author"
    :title="book.title"
    :genre="book.genre"
    :length="book.length"
    :review="book.review"
    ></BookObject>
    <AddBook></AddBook>
  </ul>
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
      books: [{
        id: '',
        title: 'Harry Potter',
        author: 'Michael Gambon',
        genre: '',
        length: '',
        review: '',

      },
    {
      id: '',
      author: 'Jimmy Hoffa',
      title: 'How to not get killed by the Mob'
    }]
    };
  },
};
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

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #186309;
  background-color: #186309;
  color: white;
  padding: 0.05rem 1rem;
  
}


</style>
