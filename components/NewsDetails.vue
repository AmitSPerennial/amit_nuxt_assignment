<template>
  <div class="popup" v-if="displayNewsDetailsPopup">
    <div class="popcard">
      <img
        v-if="news.urlToImage"
        :src="news.urlToImage"
        alt=""
        class="card-image"
      />
      <img
        v-else
        src="@/assets/default-news-background.webp"
        alt=""
        class="card-image"
      />
      <div class="card-content popcard-content">
        <span v-if="news.title" class="headline">
          {{ news.title || "" }}
        </span>
        <span v-if="news.source.name" class="news-source">
          {{ news.source.name || "" }}
        </span>
        <span v-if="news.author" class="news-author">
          {{ news.author || "" }}
        </span>
        <p v-if="news.content" class="news-description">
          {{ news.content || "" }}
        </p>
        <p v-else class="news-description">
          {{ news.description || "" }}
        </p>
        <div class="card-action popcard-action-button">
          <button
            class="card-action-button popup-close-button button-text"
            @click="closePopup"
          >
            Go Back
          </button>
        </div>

        <div class="card-footer" v-if="news.publishedAt">
          <label class="published-text">
            Published:
            {{ getPublishDate(news.publishedAt) }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      news: (state) => state.popupNewsData,
      displayNewsDetailsPopup: (state) => state.displayNewsDetailsPopup,
    }),
  },
  props: {
    closePopup: Function,
    handleGotoNewsPage: Function,
  },
  methods: {
    getPublishDate: function (publishDate) {
      return moment(publishDate).format("DD/MM/YYYY");
    },
  },
};
</script>
