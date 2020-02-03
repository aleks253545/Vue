import VueRouter from 'vue-router'
import MyList from './components/MyList'
import SearchBox from './components/SearchBox'

export default new VueRouter ({
  routes:[
    {
      path: '',
      redirect: '/search',
    },
    {
      path: '/search',
      component: SearchBox
    },
    {
      path: '/my-list',
      component: MyList
    }
  ]
})