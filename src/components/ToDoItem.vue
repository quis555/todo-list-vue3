<template>
  <div :class="{'panel-block': 1, 'has-background-success-light': item.checked && !darkMode, 'has-background-black-bis': item.checked && darkMode}">
    <div :class="{'panel-icon': 1, 'is-narrow': 1, 'has-text-white': darkMode}">
      <i class="fas fa-file-alt" aria-hidden="true"></i>
    </div>
    <div :class="{column: 1, 'p-0': 1, 'has-text-white': darkMode}">
      <span v-if="item.checked"><s>{{ item.text }}</s></span>
      <span v-else>{{ item.text }}</span>
    </div>
    <div class="field is-grouped is-grouped-right has-addons is-narrow">
      <p class="control">
        <button class="button is-small is-success" type="button" @click="$emit('check')"
                v-if="!item.checked">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
        </button>
        <button :class="{'button': 1, 'is-small': 1, 'is-dark': darkMode}" type="button" @click="$emit('uncheck')" v-else>
              <span class="icon is-small">
                <i class="fas fa-history"></i>
              </span>
        </button>
      </p>
      <p class="control">
        <button class="button is-small is-danger" type="button" @click="$emit('delete')">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
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
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['check', 'uncheck', 'delete'],
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