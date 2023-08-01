<template>
  <div class="card-main-div">
    <div v-for="(news, index) in newsData" :key="index" class="news-card">
      <img
        v-if="news.urlToImage == ('' || null || undefined)"
        src="@/assets/default-news-background.webp"
        alt=""
        class="card-image"
      />
      <img v-else :src="news.urlToImage" alt="" class="card-image" />
      <div class="card-content">
        <span v-if="news.title" class="headline" @click="openPopup(news)">
          {{ news.title || "" }}
        </span>
        <span v-if="news.source.name" class="news-source">
          {{ news.source.name || "" }}
        </span>
        <span v-if="news.author" class="news-author">
          {{ news.author || "" }}
        </span>
        <p v-if="news.description" class="news-description">
          {{ news.description || "" }}
        </p>
        <div class="card-action">
          <button class="card-action-button" @click="openPopup(news)">
            Go To Page
          </button>
          <img
            v-if="checkIfBookmark(news)"
            class="image-icon bookmark"
            src="@/assets/bookmark-icon-selected.svg"
            alt=""
            @click="handleBookmarkClick(news)"
          />
          <img
            v-if="!checkIfBookmark(news)"
            class="image-icon bookmark"
            src="@/assets/bookmark-icon.svg"
            alt=""
            @click="handleBookmarkClick(news)"
          />
        </div>
      </div>
      <div class="card-footer" v-if="news.publishedAt">
        <label class="published-text">
          Published:
          {{ getPublishDate(news.publishedAt) }}
        </label>
      </div>
    </div>
    <news-details
      :closePopup="closePopup"
      :handleGotoNewsPage="handleGotoNewsPage"
    ></news-details>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import NewsDetails from "./NewsDetails.vue";

export default {
  components: {
    NewsDetails,
  },
  props: {
    newsData: Array,
    onNewsClick: Function,
    handleBookmarkClick: Function,
    handleGotoNewsPage: Function,
  },
  computed: {
    ...mapState({
      selectedBookmarks: (state) => state.selectedBookmarks,
    }),
  },
  methods: {
    getPublishDate: function (publishDate) {
      return moment(publishDate).format("DD/MM/YYYY");
    },
    checkIfBookmark: function (data) {
      let result = this.selectedBookmarks.some(
        (dataElement) => dataElement.title === data.title
      );
      return result;
    },
    openPopup: function (news) {
      this.$store.dispatch("updatePopupNewsData", news);
    },
    closePopup: function () {
      this.$store.dispatch("handleNewsDisplayPopup");
    },
  },
  // created: function () {
  //   window.addEventListener("keydown", this.closePopup);
  // },

  // destroyed: function () {
  //   window.removeEventListener("keydown", this.closePopup);
  // },
};
</script>
