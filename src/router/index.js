import { createRouter, createWebHistory } from 'vue-router'
import RussianView from '../views/RussianView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'RussianView',
			component: RussianView,
		},
	],
})

export default router
