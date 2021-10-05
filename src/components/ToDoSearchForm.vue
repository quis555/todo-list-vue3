<template>
  <div class="panel-block">
    <div class="column is-full field p-0 has-addons">
      <p class="control is-expanded has-icons-left">
        <input
            :class="{'input': true, 'has-background-dark': darkMode, 'has-text-white': darkMode}" type="text" placeholder="Szukaj"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
      </p>
      <p class="control">
        <button type="button" :disabled="!modelValue.length" :class="{'button': 1, 'has-background-dark': darkMode, 'has-text-white': darkMode}" @click="$emit('update:modelValue', '')">
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import {inject} from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
    }
  },
  emits: ['update:modelValue'],
  setup() {
    const darkMode = inject('darkMode');
    return {
      darkMode
    }
  }
}
</script>

<style scoped>
</style>