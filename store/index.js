import Vue from '../node_modules/vue/dist/vue.esm';
import Vuex from 'vuex';
import dataProducts from '../api/products.js';
import basket from '../api/shoppingBasket.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: dataProducts.list,
		shoppingBasket: basket.getList()
	},
	mutations: {

	},
	actions: {
		clearBasket: function () {

		},
		addShoppingInList: function () {

		},
		changeShoppingInList: function () {
			
		}
	}
})