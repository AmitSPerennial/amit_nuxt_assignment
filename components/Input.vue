<template>
  <input
    type="text"
    @change="handleOnClick"
    class="input-dimentions text-input"
  />
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    handleOnClick: Function,
  },
};
</script>
