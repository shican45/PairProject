import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import jiansuo from '@/components/jiansuo'
import liebiao from '@/components/liebiao'
import remen from '@/components/remen'
import yanjiu from '@/components/yanjiu'
import descri from '@/components/descri'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Home' },
    {path: '/liebiao',
          name: 'liebiao',
          component: liebiao,
          meta:{
            title: '爬了么-论文列表',
          }
    },
    {
      path: '/jiansuo',
      name: 'jiansuo',
      component: jiansuo,
      meta:{
        title: '爬了么-论文检索',
      }
    },
    {
      path: '/remen',
          name: 'remen',
          component: remen,
          meta:{
            title: '爬了么-热门领域',
          },
    },
    {
      path: '/Home',
          name: 'Home',
          component: Home,
          meta:{
            title: '爬了么-主页',
          },
    },
    {
      path: '/yanjiu',
          name: 'yanjiu',
          component: yanjiu,
          meta:{
            title: '爬了么-研究热词',
            keepAlive: true
          }
    },
    {
      path: '/descri',
          name: 'descri',
          component: descri,
          meta:{
            title: '爬了么-论文详情',
          }
    }
    ]
  })
