<template>
    <div class="searchable-dropdown">
      <input
        type="text"
        v-model="inputValue"
        @input="filterOptions"
        @focus="showDropdown = true"
        @blur="handleBlur"
        placeholder="Enter genre"
      />
      <ul v-if="showDropdown" class="dropdown">
        <li
          v-for="option in filteredOptions"
          :key="option"
          @mousedown.prevent="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['value'],
    data() {
      return {
        inputValue: this.value || '',
        options: ['Fantasy', 'Science Fiction', 'Mystery', 'Thriller', 'Non-fiction', 'Romance', 'Horror'],
        filteredOptions: [],
        showDropdown: false,
      };
    },
    watch: {
      inputValue(newValue) {
        this.$emit('input', newValue);
      }
    },
    methods: {
      filterOptions() {
        if (this.inputValue) {
          this.filteredOptions = this.options.filter(option =>
            option.toLowerCase().includes(this.inputValue.toLowerCase())
          );
        } else {
          this.filteredOptions = this.options;
        }
        this.showDropdown = true;
      },
      selectOption(option) {
        this.inputValue = option;
        this.showDropdown = false;
      },
      handleBlur() {
        setTimeout(() => {
          this.showDropdown = false;
        }, 100);
      }
    },
    mounted() {
      this.filteredOptions = this.options;
    }
  };
  </script>
  
  <style scoped>
  .searchable-dropdown {
    position: relative;
    width: 100%;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #071849;
    border-radius: 4px;
  }
  
  .dropdown {
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 150px;
    overflow-y: auto;
    background-color: white;
    z-index: 1000;
  }
  
  .dropdown li {
    padding: 8px;
    cursor: pointer;
  }
  
  .dropdown li:hover {
    background-color: #f0f0f0;
  }
  </style>
  