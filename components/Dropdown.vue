<template>
  <select class="input-dimentions" @change="handleOnclick" :value="selectValue">
    <option value="" disabled="true">SELECT ANY</option>
    <option
      @click="handleOnclick"
      v-for="(data, key, index) in valueData"
      :value="dataFor === 'country' ? key : data"
      :key="index"
    >
      {{ data.toUpperCase() }}
    </option>
  </select>
</template>

<script>
export default {
  name: "DropdownComponent",
  props: {
    selectValue: String,
    valueData: Object,
    dataFor: String,
    handleOnclick: Function,
  },
};
</script>
