<template>
    <div class="data-display">
      <p v-if="selectedBookmarks.length > 0">
        {{ selectedBookmarks.length }} News Result(s)
      </p>
      <cards-component
        :newsData="selectedBookmarks"
        :handleBookmarkClick="handleBookmarkClick"
      ></cards-component>
    </div>
  </template>
  
  <script>
  import CardsComponent from "@/components/NewsCard.vue";
  import { mapState } from "vuex";
  
  export default {
    name: "BookmarksComponent",
    components: {
      CardsComponent,
    },
    computed: {
      ...mapState({
        selectedBookmarks: (state) => state.selectedBookmarks,
      }),
    },
    methods: {
      handleBookmarkClick: function (data) {
        let bookmarkData = this.selectedBookmarks;
        if (
          bookmarkData.some((dataElement) => dataElement.title === data.title)
        ) {
          this.$store.dispatch("removeBookmark", data.title);
        } else {
          this.$store.dispatch("addBookmark", data);
        }
      },
    },
  };
  </script>
  