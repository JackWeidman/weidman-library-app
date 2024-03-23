<template>
  <base-card>
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

      fetch('https://weidman-family-library-default-rtdb.firebaseio.com/books.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newBook)
      }).then(response => {
        if(!response.ok){
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
      }).catch(error => {
        console.error('Error adding book to database:', error)
      });
    },
  },
};
</script>



<style scoped>
.font-color {
  color: rgb(35, 33, 41);
}

.disabled {
  background-color: inherit;

  opacity: 0.5; /* Reduce opacity to visually indicate it's disabled */
  cursor: not-allowed; /* Change cursor to indicate it's not clickable */
}
</style>
