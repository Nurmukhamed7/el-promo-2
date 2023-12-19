import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import RU from './locale/ru.json'

import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
	locale: document.cookie.split('=')[1],
	messages: {
		EN: EN,
		RU: RU,
	},
})
app.use(i18n)
app.use(router)

app.mount('#app')
