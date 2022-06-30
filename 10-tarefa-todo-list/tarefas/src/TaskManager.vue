<template>
  <div>
    <h1>Tarefas</h1>
		<TaskCompletion />
		<NewTask />
		<TaskList />
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
    addTask(task) {
      return [...tasks, task];
    },
  },
};
</script>

<style>
</style>
