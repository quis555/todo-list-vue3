<template>
  <form @submit.prevent>
    <label class="checkbox m-2">
      <input type="checkbox" :checked="hideDone" @change="handleChange">
      ukryj wykonane <span v-if="doneCount">({{ doneCount }})</span>
    </label>
  </form>
</template>

<script>
import {toRef} from 'vue';
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
    const handleChange = (evt) => {
      const newValue = evt.target.checked;
      emit('update:hideDone', newValue);
      optionsRepository.setHideDone(newValue);
    };
    return {
      hideDone,
      handleChange
    }
  }
}
</script>

<style scoped>

</style>