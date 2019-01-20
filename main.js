import Vue from './node_modules/vue/dist/vue.esm';
import App from './components/App.vue';
import store from './store';
import router from './route';

const app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	},
	store,
	router,
	render: h => h(App)
});
