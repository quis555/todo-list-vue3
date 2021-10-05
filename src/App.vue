<template>
  <div :class="{container: 1, 'mt-5': 1}">
    <to-do-list/>
  </div>
</template>

<script>
import {provide} from 'vue';
import ToDoList from '@/components/ToDoList.vue';
import useDarkMode from '@/composables/useDarkMode.js';

export default {
  components: {ToDoList},
  setup() {
    const {darkMode, toggleDarkMode} = useDarkMode();
    provide('darkMode', darkMode);
    provide('toggleDarkMode', toggleDarkMode);
    return {
      darkMode
    }
  }
}
</script>

<style>
input.has-text-white::placeholder {
  color: #fff;
}
</style>
