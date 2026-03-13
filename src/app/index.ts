import ElementPlus from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './styles/index.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus, { locale: ru })

app.mount('#app')
