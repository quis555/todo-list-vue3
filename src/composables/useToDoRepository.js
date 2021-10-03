import ToDoRepository from '@/classes/ToDoRepository.js';

export default function useToDoRepository() {
    return new ToDoRepository();
}