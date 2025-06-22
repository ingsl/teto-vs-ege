import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import ResultPage from '../views/ResultPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/result', name: 'ResultPage', component: ResultPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;