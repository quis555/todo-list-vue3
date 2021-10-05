<template>
  <div class="panel-block">
    <span :class="{'panel-icon': 1, 'has-text-white': darkMode}">
      <i class="fas fa-plus-square" aria-hidden="true"></i>
    </span>
    <div class="column p-0">
      <form @submit.prevent="handleSubmit">
        <div class="control">
          <input
              :class="{'input': 1, 'has-background-dark': darkMode, 'has-text-white': darkMode}"
              type="text"
              v-model="text"
              placeholder="co masz do zrobienia?"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {inject, ref} from 'vue';

export default {
  name: 'ToDoCreateForm',
  emits: ['create'],
  setup(props, {emit}) {
    const text = ref('');
    const darkMode = inject('darkMode');

    const handleSubmit = () => {
      emit('create', {text: text.value});
      text.value = '';
    }
    return {
      text,
      darkMode,
      handleSubmit
    }
  }
}
</script>

<style scoped>

</style>