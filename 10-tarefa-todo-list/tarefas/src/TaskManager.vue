<template>
  <div>
    <h1>Tarefas</h1>
		<TaskCompletion :partialCount="completedTasksCount" :totalCount="tasksCount" />
		<NewTask :onClick="addTask" />
		<TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskCompletion from "./TaskCompletion.vue";
import NewTask from "./NewTask.vue";
import TaskList from "./TaskList.vue";

export default {
  components: { TaskCompletion, NewTask, TaskList },
  data() {
    return { tasks: [] };
  },
  methods: {
    addTask(taskName) {
      const randomId = Math.floor(Math.random() * 1000000000);
      const task = { id: randomId, text: taskName, completed: false };

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

<style>
</style>
