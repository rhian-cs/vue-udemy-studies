<template>
  <div>
    <input v-model="taskName"/>
    <button @click="onClick(taskName)">Adicionar Tarefa</button>
  </div>
</template>

<script>
export default {
  data() {
    return { taskName: "" };
  },
  props: {
    onClick: Function,
  },
};
</script>

<style>
</style>
