<template>
    <div class="search-pannel">
      <dropdown-component
        :handleOnclick="handleCountryChange"
        :valueData="countriesData"
        dataFor="country"
        :selectValue="selectedCountry"
      ></dropdown-component>
      <dropdown-component
        :handleOnclick="handleCategoryChange"
        :valueData="categoriesData"
        dataFor="category"
        :selectValue="selectedCategory"
      ></dropdown-component>
      <input-component :handleOnClick="handleInputChange"></input-component>
      <button-component :handleOnclick="handleButtonClick"></button-component>
    </div>
  </template>
  <script>
  import InputComponent from "@/components/Input.vue";
  import DropdownComponent from "@/components/Dropdown.vue";
  import ButtonComponent from "@/components/Button.vue";
  import { mapState } from "vuex";
  
  export default {
    components: {
      DropdownComponent,
      InputComponent,
      ButtonComponent,
    },
    computed: {
      ...mapState({
        selectedCategory: (state) => state.selectedCategory,
        selectedCountry: (state) => state.selectedCountry,
        categoriesData: (state) => state.categories,
        countriesData: (state) => state.country,
      }),
    },
    methods: {
      handleCategoryChange: function (event) {
        this.$store.dispatch("handleCategoryChange", event.target.value);
      },
      handleCountryChange: function (event) {
        this.$store.dispatch("handleCountryChange", event.target.value);
      },
      handleInputChange: function (event) {
        this.$store.dispatch("handleInputChange", event.target.value);
      },
      handleButtonClick: function () {
        this.$store.dispatch("fetchNewsData");
      },
    },
  };
  </script>
  