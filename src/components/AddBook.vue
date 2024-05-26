<template>
  <base-card>
    <form @submit.prevent="addBook">
      <div>
        <!-- <strong><label>Title:</label></strong> -->
        <div>
          <input type="text" placeholder="Title" v-model="newBook.title" />
        </div>
      </div>
      <div>
        <!-- <strong><label>Author:</label></strong> -->
        <div>
          <input type="text" placeholder="Author" v-model="newBook.author" />
        </div>
      </div>
      <div>
        <searchable-dropdown v-model="newBook.genre"></searchable-dropdown>
      </div>
      <div>
        <strong><label for="dropdown">Length:</label></strong>
        <div>
          <select id="dropdown" v-model="newBook.length">
            <option value="Short">Short</option>
            <option value="Medium">Medium</option>
            <option value="Long">Long</option>
          </select>
        </div>
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
import SearchableDropdown from './SearchableDropdown.vue';
export default {
  components: {
    SearchableDropdown,
  },
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
        })
        .catch((error) => {
          console.error('Error adding book to database:', error);
        });
    },
  },
};
</script>

<style scoped>
div {
  padding: 0.1rem;
  color: #071849;
}

button {
  width: 100%;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.disabled {
  background-color: inherit;

  opacity: 0.5; /* Reduce opacity to visually indicate it's disabled */
  cursor: not-allowed; /* Change cursor to indicate it's not clickable */
}

input,
select {
  width: 100%;
  height: 25px;
  border-color: #071849;
  border-width: 1px;
  border-radius: 4px;
}
</style>
