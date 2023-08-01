<template>
  <button class="card-action-button button-height" @click="handleOnclick">
    <p v-if="title" class="button-text">{{ title }}</p>
    <img v-else src="../assets/search-icon.svg" alt="" class="image-icon" />
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    title: String,
    handleOnclick: Function,
  },
};
</script>
