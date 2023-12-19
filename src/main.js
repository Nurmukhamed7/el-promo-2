import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import ru from './locale/ru.json'
import tr from './locale/tr.json'

import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
	locale: navigator.language.split('-')[0],
	legacy: false,
	fallbackLocale: 'en',
	messages: {
		ru: ru,
		en: en,
		tr: tr,
	},
})
app.use(i18n)
app.use(router)

app.mount('#app')
