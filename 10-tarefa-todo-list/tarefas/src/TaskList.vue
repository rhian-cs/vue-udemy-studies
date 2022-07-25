<template>
  <div class="task-list">
    <TaskCard
      v-for="task in tasks"
      :task="task"
      :key="task.id"
      :onClick="() => toggleCompletion(task.id)"
      :onClose="() => deleteTask(task.id)"
    />
  </div>
</template>

<script>
import TaskCard from "./TaskCard.vue";

export default {
  props: {
    tasks: Array,
    toggleCompletion: Function,
    deleteTask: Function,
  },
  components: { TaskCard },
};
</script>

<style scoped>
.task-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
