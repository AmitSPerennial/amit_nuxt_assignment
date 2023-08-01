<template>
    <div class="search-pannel-main-div">
      <keep-alive><search-pannel /></keep-alive>
      <div class="data-display" v-if="totalResults > 0">
        <p v-if="totalResults > 0">{{ totalResults }} News Result(s)</p>
        <cards-component
          :newsData="newsData"
          :handleBookmarkClick="handleBookmarkClick"
          displayFor="news"
        ></cards-component>
        <section v-if="handleLoadMoreDisplay()">
          <button-component
            :handleOnclick="handleButtonClick"
            title="Load More"
          ></button-component>
        </section>
      </div>
      <section v-else>
        <h1>No Data</h1>
      </section>
    </div>
  </template>
  
  <script>
  import SearchPannel from "@/components/SearchPannel.vue";
  import CardsComponent from "@/components/NewsCard.vue";
  import ButtonComponent from "@/components/Button.vue";
  import { mapState } from "vuex";
  import { numberOfResultPerPage } from "../../utils/index";
  
  export default {
    components: {
    SearchPannel,
    CardsComponent,
    ButtonComponent,
    SearchPannel
},
    computed: {
      ...mapState({
        selectedBookmarks: (state) => state.selectedBookmarks,
        totalResults: (state) => state.totalResults,
        newsData: (state) => state.newsData,
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
      getInitialNewsData: function () {
        console.log('inside the get initial news function')
        this.$store.dispatch("fetchTopHeadlines");
      },
      handleButtonClick: function () {
        let currentNewsDataPages = this.handlePageNumberRoundoff(
          this.newsData.length / Number(numberOfResultPerPage)
        );
        this.$store.dispatch("fetchMoreNews", currentNewsDataPages);
      },
      handlePageNumberRoundoff: function (num) {
        return Math.ceil(num);
      },
      handleLoadMoreDisplay: function () {
        let pages = this.handlePageNumberRoundoff(
          this.totalResults / this.newsData.length
        );
        let currentNewsDataPages = this.handlePageNumberRoundoff(
          this.newsData.length / Number(numberOfResultPerPage)
        );
        if (currentNewsDataPages > pages) {
          return false;
        } else {
          return true;
        }
      },
    },
    created() {
        console.log('inside top news created component')
        this.getInitialNewsData();
    },
};
</script>
