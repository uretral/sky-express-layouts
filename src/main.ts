import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CustomScrollbar from 'custom-vue-scrollbar'
import 'custom-vue-scrollbar/dist/style.css'

declare module 'vue' {
    export interface GlobalComponents {
        CustomScrollbar: typeof CustomScrollbar;
    }
}

createApp(App).use(store).use(router).component(CustomScrollbar.name, CustomScrollbar).mount('#app')
