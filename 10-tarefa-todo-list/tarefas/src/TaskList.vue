<template>
<ul>
  <li v-for="task in tasks" v-bind:key="task.id">
    {{task.text}}
  </li>
</ul>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
};
</script>

<style>
</style>
