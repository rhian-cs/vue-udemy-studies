<template>
  <div id="app-component">
    <div>Hello, Vue!</div>
    <div>{{ title }}</div>
    <button @click="title += '#'">###</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Test",
    };
  },
};
</script>

<style>
#app-component {
  background-color: chocolate;
  color: white;
}
</style>
