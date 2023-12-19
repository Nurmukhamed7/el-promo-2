import { createRouter, createWebHistory } from 'vue-router'
import RussianView from '../views/RussianView.vue'
import EnglishView from '../views/EnglishView.vue'
import TurkishView from '../views/TurkishView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/ru',
		},
		{
			path: '/ru',
			name: 'RussianView',
			component: RussianView,
		},
		{
			path: '/en',
			name: 'EnglishView',
			component: EnglishView,
		},
		{
			path: '/tr',
			name: 'TurkishView',
			component: TurkishView,
		},
	],
})

export default router
