export default class ToDoRepository {
    save(todo) {
        if (!todo.id) {
            if (typeof todo.checked === 'undefined') {
                todo.checked = false;
            }
            todo.id = this.getNewIdentifier();
            const todos = this.getAll();
            todos.push(todo);
            window.localStorage.setItem('todos', JSON.stringify(todos));
        } else {
            const todos = this.getAll();
            const itemIndex = todos.findIndex((item) => {
                return item.id === todo.id;
            });
            if (itemIndex === -1) {
                throw new Error('Item with id ' + todo.id + ' not found.');
            }
            todos[itemIndex] = {...todo};
            window.localStorage.setItem('todos', JSON.stringify(todos));
        }

        return todo;
    }

    getAll() {
        const raw = window.localStorage.getItem('todos');
        if (!raw) {
            return [];
        }
        return JSON.parse(raw);
    }

    deleteById(toDoId) {
        const oldTodos = this.getAll();
        const oldLength = oldTodos.length;
        const newTodos = oldTodos.filter((todo) => {
            return todo.id !== toDoId;
        });
        const deleted = oldLength !== newTodos.length;
        if (deleted) {
            window.localStorage.setItem('todos', JSON.stringify(newTodos));
        }
        return deleted;
    }

    getNewIdentifier() {
        const oldId = window.localStorage.getItem('todoId');
        if (!oldId) {
            window.localStorage.setItem('todoId', '1');
            return 1;
        }
        const newId = Number(oldId) + 1;
        window.localStorage.setItem('todoId', newId.toString());
        return newId;
    }
}