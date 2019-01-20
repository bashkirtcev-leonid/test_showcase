import Vue from './node_modules/vue/dist/vue.esm';
import App from './components/App.vue';

const app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	},
	render: h => h(App)
});
