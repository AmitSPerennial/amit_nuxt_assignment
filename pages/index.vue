<template>
  <div>
    <TopNews v-if="$route.path=='/'"/>
    <Bookmarks v-else/>
  </div>
</template>

<script>
import '../assets/base.css'
import TopNews from './topNews/index.vue'
import Bookmarks from './bookmarks/index.vue'
export default {
  components: {
    TopNews,
    Bookmarks,
  }
};
</script>