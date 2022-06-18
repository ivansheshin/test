import { createApp } from 'vue'
import App from './App.vue'
import './common.less';
// const heh = ['1', '1231'];
// TODO Перенести в компонент, подумать над архитектурой
const API_URL = 'https://api.in.dev-team.club/people?pp=10&p=1';

async function hui() {
    await fetch(API_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const app = createApp(App,{
            data() {
                return {
                    data,
                };
            }
        })
        app.mount('#app');
    })
    .catch(() => console.error('Все плохо'))
;
}

hui();

// response.json();

// createApp(App).mount('#app')
