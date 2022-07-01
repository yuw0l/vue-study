import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages';
import Todos from '../pages/todos';
import Todo from '../pages/todos/_id.vue';
import TodoCreate from '../pages/todos/create';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todos/create',
      name: 'TodoCreate',
      component: TodoCreate
    },
    {
      path: '/todos/:id',
      name: 'Todo',
      component: Todo
    },
  ]
});

export default router;