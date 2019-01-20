import Vue from './node_modules/vue/dist/vue.esm';
import App from './components/App.vue';
import store from './store'

const app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	},
	store,
	render: h => h(App)
});
