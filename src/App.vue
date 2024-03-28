<template>
  <div>
    <base-card v-if="!user">
      <div class="input-field">
        <div>
          <input type="email" v-model="email" placeholder="Email" />
        </div>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
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
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import AddBook from './components/AddBook.vue';
import BookObject from './components/BookObject.vue';
const firebaseConfig = {
  apiKey: 'AIzaSyD9mS2ktlfVmR-VU4puo9aMmpAFLTXQZxo',
  authDomain: 'weidman-family-library.firebaseapp.com',
  databaseURL: 'https://weidman-family-library-default-rtdb.firebaseio.com',
  projectId: 'weidman-family-library',
  storageBucket: 'weidman-family-library.appspot.com',
  messagingSenderId: '166456432095',
  appId: '1:166456432095:web:75ec4d0b775d59659ca06a',
};
initializeApp(firebaseConfig);
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
    },
    deleteBook(id) {
      const index = this.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    },
    async fetchBooks() {
      let booksArray;
      try {
        // Fetch data from Firebase
        const response = await fetch(
          'https://weidman-family-library-default-rtdb.firebaseio.com/books.json'
        );
        const data = await response.json();
        // Update the local books array with the retrieved data
        if (data) {
          booksArray = Object.keys(data).map((key) => ({
            id: key,
            title: data[key].title,
            author: data[key].author,
            genre: data[key].genre,
            length: data[key].length,
          }));

          booksArray.sort((a, b) => {
            const lastNameA = a.author.split(' ').pop().toLowerCase();
            const lastNameB = b.author.split(' ').pop().toLowerCase();
            return lastNameA.localeCompare(lastNameB);
          });
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        if (booksArray) {
          this.books = booksArray;
          console.log(this.books);
        }
        this.booksLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
.input-field {
  display: block;
  margin-bottom: 10px; /* Add some margin between input fields */
}
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
  background-color: rgb(
    75,
    31,
    13
  ); /* Change to your desired background color */
}
</style>
