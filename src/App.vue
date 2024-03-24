<template>
  <div>
    <base-card v-if="!user">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="signIn">Sign In</button>
    </base-card>
    <div v-else>
      <button @click="signOut">Sign Out</button>

      <AddBook @add-book="addBook" class="centered"></AddBook>

      <div v-if="booksLoaded" class="books-container">
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
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
      booksLoaded: false,
      email: '',
      password: '',
      user: null,
    };
  },
  created() {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      this.user = user;
      if (user) {
        this.fetchBooks();
      }
    });
  },
  methods: {
    async signIn() {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, this.email, this.password);
        // Clear the form after successful sign-in
        this.email = '';
        this.password = '';
      } catch (error) {
        console.error('Error signing in:', error);
        // Handle sign-in errors (if needed)
      }
    },
    async signOut() {
      try {
        const auth = getAuth();
        await signOut(auth);
      } catch (error) {
        console.error('Error signing out:', error);
      }
    },
    addBook(newBook) {
      this.books.push({
        id: this.books.length + 1,
        title: newBook.title,
        author: newBook.author,
        genre: newBook.genre,
        length: newBook.length,
      });
      this.books.sort((a, b) => {
        return a.author.localeCompare(b.author);
      });
    },
    deleteBook(id) {
      const index = this.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    },
    async fetchBooks() {
      try {
        // Fetch data from Firebase
        const response = await fetch(
          'https://weidman-family-library-default-rtdb.firebaseio.com/books.json'
        );
        const data = await response.json();
        // Update the local books array with the retrieved data
        if (data) {
          this.books = Object.keys(data).map((key) => ({
            id: key,
            title: data[key].title,
            author: data[key].author,
            genre: data[key].genre,
            length: data[key].length,
          }));
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        this.booksLoaded = true;
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
  background-color: rgb(75, 31, 13); /* Change to your desired background color */
}
</style>
