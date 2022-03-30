<template>
  <div class="counters">
    <LocalCounter v-for="c in 5" :key="c" />
  </div>
</template>

<script>
import MyCounter from "./MyCounter.vue";

export default {
  components: {
    LocalCounter: MyCounter,
  },
};
</script>

<style scoped>
/* div {
  border: 1px solid red;
} */
</style>
