import Vue from './node_modules/vue/dist/vue.esm';
import VModal from 'vue-js-modal';

import App from './components/App.vue';
import store from './store';
import router from './route';
//import VueHtmlToPaper from 'vue-html-to-paper';

Vue.use(VModal, { dynamic: true });

/*const options = {
	name: '_blank',
	specs: [
		'fullscreen=yes',
		'titlebar=yes',
		'scrollbars=yes'
	]
};

Vue.use(VueHtmlToPaper, options);*/

const app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	},
	store,
	router,
	render: h => h(App)
});
