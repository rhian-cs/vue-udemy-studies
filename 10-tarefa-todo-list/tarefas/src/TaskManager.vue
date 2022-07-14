<template>
  <div class="tasks-container">
    <h1>Tarefas</h1>
		<TaskProgressBar :partialCount="completedTasksCount" :totalCount="tasksCount" />
		<TaskForm :onSubmit="addTask" />
		<TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskProgressBar from "./TaskProgressBar.vue";
import TaskForm from "./TaskForm.vue";
import TaskList from "./TaskList.vue";

export default {
  components: { TaskProgressBar, TaskForm, TaskList },
  data() {
    return { tasks: [] };
  },
  methods: {
    addTask(taskName) {
      const randomId = Math.floor(Math.random() * 1000000000);
      const task = {
        id: randomId,
        text: taskName,
        completed: false,
        markAsComplete: () => {
          // eslint-disable-next-line
          console.log("Task completed.");
          this.complete = true;
        },
      };

      this.tasks = [...this.tasks, task];
    },
  },
  computed: {
    completedTasksCount() {
      return this.tasks.filter((task) => task.completed).length;
    },
    tasksCount() {
      return this.tasks.length;
    },
  },
};
</script>

<style scoped>
.tasks-container {
  display: flex;
  flex-direction: column;
}
</style>
