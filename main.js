import Vue from './node_modules/vue/dist/vue.esm';
import VModal from 'vue-js-modal';

import App from './components/App.vue';
import store from './store';
import router from './route';

Vue.use(VModal, { dynamic: true });

const app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	},
	store,
	router,
	render: h => h(App)
});
