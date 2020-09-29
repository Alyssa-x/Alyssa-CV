import Vue from 'vue'
import Router from 'vue-router'


const Personal = () => import('../views/personal/Personal');
const Education = () => import('../views/education/Education');
const Intern = () => import('../views/intern/Intern');
const Projects = () => import('../views/projects/Projects');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/personal'
    },
    {
      path: '/personal',
      // name: 'HelloWorld',
      component: Personal
    },
    {
      path: '/education',
      component: Education
    },
    {
      path: '/intern',
      component: Intern
    },
    {
      path: '/projects',
      component: Projects
    },
  ],
  mode:'history'
})
