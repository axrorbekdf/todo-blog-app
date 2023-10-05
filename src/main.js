import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uiComponents from '@/ui-components/index.js'

const app = createApp(App)

app.component(uiComponents)
app.mount('#app')
