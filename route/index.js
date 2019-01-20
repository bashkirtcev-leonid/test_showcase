import Vue from '../node_modules/vue/dist/vue.esm';
import VueRouter from 'vue-router';
import ProductList from '../components/ProductList.vue';
import ProductCard from '../components/ProductCard.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: ProductList,
			name: 'productList'
		},
		{
			path: '/product/:id',
			component: ProductCard,
			name: 'productCard'
		}
	]
});
