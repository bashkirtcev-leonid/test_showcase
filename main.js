import Vue from './node_modules/vue/dist/vue.esm';
import ProductList from './components/ProductList.vue';


/*var element = document.createElement('div');
element.id = 'app';
document.body.appendChild(element);*/

const app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	}
});
