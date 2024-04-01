<template>
   
    <button  v-if="!showForm" @click="toggleForm" class="add-book-button">
      +
    </button>
 
  <base-card v-else>
    <!-- Conditional rendering based on the value of showForm -->
    <form @submit.prevent="addBook" class="font-color">
      <div>
        <strong><label>Title</label></strong>
        <input type="text" v-model="newBook.title" />
      </div>
      <div>
        <strong><label>Author</label></strong>
        <input type="text" v-model="newBook.author" />
      </div>
      <div>
        <strong><label>Genre</label></strong>
        <input type="text" v-model="newBook.genre" />
      </div>
      <div>
        <strong><label for="dropdown">Length</label></strong>
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
      <button :class="{ disabled: !newBook.title || !newBook.author }">
        Add Book
      </button>
    </form>
  </base-card>
</template>

<script>
export default {
  emits: ['add-book'],
  data() {
    return {
      showForm: false, // Flag to toggle between button and form
      dragging: false,
      offsetX: 0,
      offsetY: 0,
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

      fetch(
        'https://weidman-family-library-default-rtdb.firebaseio.com/books.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newBook),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add book to database');
          }
          // Reset the form fields after successful addition
          this.newBook = {
            title: '',
            author: '',
            genre: '',
            length: '',
            // review: '',
          };
          this.showForm = false; // Hide the form after submission
        })
        .catch((error) => {
          console.error('Error adding book to database:', error);
        });
    },
    toggleForm() {
      this.showForm = !this.showForm; // Toggle showForm flag
    },
    
  },
  
};
</script>

<style scoped>
form {
  color: rgb(37, 35, 46);
}

.disabled {
  background-color: inherit;
  opacity: 0.5; /* Reduce opacity to visually indicate it's disabled */
  cursor: not-allowed; /* Change cursor to indicate it's not clickable */
}
.draggable-container {
  position: relative;
}
.add-book-button {
  /* Define styles for the initial button */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-color: #186309; /* Your desired button color */
  color: #fff; /* Text color */
  border: none;
  cursor: pointer;
}
</style>
