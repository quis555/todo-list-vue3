<template>
  <div class="panel-block">
    <span class="panel-icon"><i class="fas fa-plus-square" aria-hidden="true"></i></span>
    <div class="column p-0">
      <form @submit.prevent="handleSubmit">
        <div class="control">
          <input class="input" type="text" v-model="text" placeholder="co masz do zrobienia?">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'ToDoCreateForm',
  emits: ['create'],
  setup(props, {emit}) {
    const text = ref('');

    const handleSubmit = () => {
      emit('create', {text: text.value});
      text.value = '';
    }
    return {
      text,
      handleSubmit
    }
  }
}
</script>

<style scoped>

</style>