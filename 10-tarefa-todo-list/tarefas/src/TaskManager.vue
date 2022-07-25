<template>
  <div class="tasks-container">
    <h1>Tarefas</h1>
		<TaskProgressBar :partialCount="completedTasksCount" :totalCount="tasksCount" />
		<TaskForm :onSubmit="addTask" />
		<TaskList
      :tasks="tasks"
      :toggleCompletion="toggleCompletion"
      :deleteTask="deleteTask"
    />
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
      this.tasks = [...this.tasks, this.generateNewTask(taskName)];
    },
    generateNewTask(taskName) {
      const randomId = Math.floor(Math.random() * 1000000000);

      return {
        id: randomId,
        text: taskName,
        completed: false,
      };
    },
    toggleCompletion(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);

      if (!task) return;

      task.completed = !task.completed;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
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
