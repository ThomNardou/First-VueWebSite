import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'

// App.use(MotionPlugin);
createApp(App).use(MotionPlugin).mount('#app');
