<template>
  <div
    @click="onClick"
    class="task-card"
    :class="{ 'completed-task': this.task.completed, 'pending-task': !this.task.completed }"
  >
    <div class="cross" @click="onClose">&times;</div>
    <div class="card-content">{{task.text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    onClick: Function,
    onClose: Function,
  },
};
</script>

<style scoped>
.task-card {
  margin: 0.5rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  max-width: 256px;
  word-wrap: break-word;
}
.completed-task {
  background-color: rgb(26, 188, 42);
}

.pending-task {
  background-color: rgb(188, 42, 26);
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
