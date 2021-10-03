<template>
  <div class="panel-block">
    <div class="column is-full field p-0 has-addons">
      <p class="control is-expanded has-icons-left">
        <input
            class="input" type="text" placeholder="Szukaj"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
        <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
      </p>
      <p class="control">
        <button type="button" class="button" @click="$emit('update:modelValue', '')">
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>
</style>