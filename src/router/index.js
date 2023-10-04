import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../composable/DefaultLayout.vue'
import Home from '../components/Home.vue'
import WorkerList  from '../components/WorkerList.vue'
import GuestLayout  from '../components/GuestLayout.vue'
import AddWorker  from '../components/AddWorker.vue'
const routes = [
    {
      path: '/',
      component: DefaultLayout ,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
            path: "/worker-list",
            name: "WorkerList",
            component: WorkerList 
        },
        {
            path: '/add-worker',
            name: 'AddWorker',
            component: AddWorker
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;