<template>
  <div @click="task.markAsComplete()" class="task-card">
    <div class="cross">&times;</div>
    <div class="card-content">{{task.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.task-card {
  background-color: rgb(188, 42, 26);
  margin: 0.5rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  max-width: 256px;
  word-wrap: break-word;
}

.cross-container {
  width: 100%;
}

.cross {
  position: absolute;
  right: 0.5rem;
  top: 0.25rem;
}

.cross:hover {
  cursor: pointer;
}

.card-content {
  padding: 1rem;
}
</style>
