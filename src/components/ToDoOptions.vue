<template>
  <form @submit.prevent>
    <label :class="{'checkbox': 1, 'm-2': 1, 'has-text-white': darkMode}">
      <input type="checkbox" :checked="hideDone" @change="handleHideDoneChange">
      ukryj wykonane <span v-if="doneCount">({{ doneCount }})</span>
    </label>
    <label :class="{'checkbox': 1, 'm-2': 1, 'has-text-white': darkMode}">
      <input type="checkbox" :checked="darkMode" @change="handleDarkModeChange">
      tryb ciemny
    </label>
  </form>
</template>

<script>
import {toRef, inject} from 'vue';
import useOptionsRepository from '@/composables/useOptionsRepository.js';

export default {
  props: {
    hideDone: {
      type: Boolean,
    },
    doneCount: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ['update:hideDone'],
  setup(props, {emit}) {
    const optionsRepository = useOptionsRepository();
    const hideDone = toRef(props, 'hideDone');
    const darkMode = inject('darkMode');
    const toggleDarkMode = inject('toggleDarkMode');

    const handleHideDoneChange = (evt) => {
      const newValue = evt.target.checked;
      emit('update:hideDone', newValue);
      optionsRepository.setHideDone(newValue);
    };
    const handleDarkModeChange = () => {
      toggleDarkMode();
    };
    return {
      hideDone,
      darkMode,
      handleHideDoneChange,
      handleDarkModeChange
    }
  }
}
</script>

<style scoped>

</style>