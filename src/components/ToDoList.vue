<template>
  <nav class="panel">
    <p :class="{'panel-heading': 1, 'has-text-centered': 1, 'has-background-dark': darkMode, 'has-text-white': darkMode}">
      DO ZROBIENIA
    </p>
    <to-do-options v-model:hide-done="hideDone" :done-count="doneCount"/>
    <to-do-search-form v-model="searchText"/>
    <div :class="{'panel-block': 1, 'has-text-white': darkMode}" v-if="!todos.length">
      <span v-if="!searchText.length">Ta lista jest pusta. Nie masz przypadkiem czegoś do zrobienia? Wpisz to pod spodem i naciśnij Enter.</span>
      <span v-else>Nic nie znaleziono.</span>
    </div>
    <to-do-item
        v-for="item in todos" :item="item" :key="item.id"
        @check="handleUpdate(item.id, true)"
        @uncheck="handleUpdate(item.id, false)"
        @delete="handleDelete(item.id)"
    />
    <to-do-create-form @create="handleCreate"/>
  </nav>
</template>

<script>
import useToDoRepository from '@/composables/useToDoRepository.js';
import {ref, computed, inject} from 'vue';
import ToDoSearchForm from '@/components/ToDoSearchForm.vue';
import ToDoItem from '@/components/ToDoItem.vue';
import ToDoCreateForm from '@/components/ToDoCreateForm.vue';
import ToDoOptions from '@/components/ToDoOptions.vue';
import useOptionsRepository from '@/composables/useOptionsRepository.js';

export default {
  components: {ToDoOptions, ToDoCreateForm, ToDoItem, ToDoSearchForm},
  setup() {
    const searchText = ref('');
    const toDoRepository = useToDoRepository();
    const optionsRepository = useOptionsRepository();
    const todos = ref(toDoRepository.getAll());
    const hideDone = ref(optionsRepository.shouldHideDone());
    const darkMode = inject('darkMode');

    const applyHideDone = (items) => {
      if (hideDone.value) {
        return items.filter(item => !item.checked);
      }
      return items;
    };
    const applySearch = (items) => {
      if (!searchText.value.length) {
        return items;
      }
      const searchString = searchText.value.toLowerCase();
      return items.filter(item => item.text.toLowerCase().search(searchString) !== -1);
    };
    const applySorting = (items) => {
      return items.sort((a, b) => {
        if (a.checked === b.checked) {
          return a.id > b.id ? 1 : -1;
        }
        return a.checked ? 1 : -1;
      });
    };

    const doneCount = computed(() => {
      if (!hideDone.value) {
        return 0;
      }
      return applySearch(todos.value).filter(item => item.checked).length;
    });

    const handleCreate = (item) => {
      const newItem = toDoRepository.save(item);
      todos.value.push(newItem);
    };

    const handleUpdate = (id, checked) => {
      const item = todos.value.find((todo) => {
        return todo.id === id;
      });
      item.checked = checked;
      toDoRepository.save(item);
    }

    const handleDelete = (id) => {
      toDoRepository.deleteById(id);
      todos.value = todos.value.filter((item) => {
        return item.id !== id;
      });
    };
    return {
      todos: computed(() => {
        return applySorting(applyHideDone(applySearch(todos.value)));
      }),
      searchText,
      hideDone,
      doneCount,
      darkMode,
      handleCreate,
      handleUpdate,
      handleDelete,
    }
  }
}
</script>

<style scoped>

</style>