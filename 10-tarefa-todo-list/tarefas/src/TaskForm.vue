<template>
  <div>
    <input v-model="taskName"/>
    <button @click="submit(taskName)">Adicionar Tarefa</button>
  </div>
</template>

<script>
export default {
  data() {
    return { taskName: "" };
  },
  props: {
    onSubmit: Function,
  },
  methods: {
    submit(taskName) {
      this.onSubmit(taskName);
      this.taskName = "";
    },
  },
};
</script>

<style>
</style>
