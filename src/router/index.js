import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComputedComponent from "@/components/ComputedComponent";
import WatchComponent from "@/components/WatchComponent";
import ClassStyleComponent from "@/components/ClassStyleComponent";
import conditionRenderComponent from "@/components/ConditionRenderComponent";
import ListRenderComponent from "@/components/ListRenderComponent";
import EventHandler from "@/components/EventHandler";
import FormInputBinding from "@/components/FormInputBinding";
import ParentComponent from "@/components/ParentComponent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/computed',
    name:'computed',
    component:ComputedComponent
  },
  {
    path: '/watch',
    name:'watch',
    component:WatchComponent
  },
  {
    path:'/class_style',
    name:'class_style',
    component: ClassStyleComponent
  },
  {
    path:'/conditional',
    name:'conditional',
    component: conditionRenderComponent
  },
  {
    path:'/listRender',
    name:'listRender',
    component: ListRenderComponent
  },
  {
    path:'/event',
    name:'event',
    component: EventHandler
  },
  {
    path:'/formInput',
    name:'FormInputBinding',
    component: FormInputBinding
  },
  {
    path:'/parentBinding',
    name:'ParentComponent',
    component: ParentComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
