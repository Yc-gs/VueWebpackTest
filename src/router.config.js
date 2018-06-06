import Home from './components/Home.vue'
import Login from './components/Login.vue'
import HomeFirst from './components/HomeFirst.vue'
import HomeSecond from './components/HomeSecond.vue'
import HomeThird from './components/HomeThird.vue'
import HomeForth from './components/HomeForth.vue'
export default {
	routes:[
		{path:'/',component:Home},
		{path:'/home',component:Home},
		{path:'/login',component:Login},
/*		{path:'/home/first',component:HomeFirst},
		{path:'/home/second',component:HomeSecond},
		{path:'/home/third',component:HomeThird},
		{path:'/home/forth',component:HomeForth},*/
	]
}
