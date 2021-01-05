import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import page404 from '../views/page404.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    // send route props from route params in this case :id
    props: true
  },
  //redirect old path
  {
    path: '/old-jobs',
    redirect: '/jobs'
  },
  // catch all paths or nonexistent ones
  {
    path:'/:catchAll(.*)',
    name: 'page404',
    component: page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
