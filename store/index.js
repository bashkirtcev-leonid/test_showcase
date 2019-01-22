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
	getters: {
		orders: state => {
			return state.shoppingBasket.map(order => {
				let product = state.products.find(product => (product.id === order.id));
				if (product) {
					return {
						product,
						count: order.count
					}
				}
				return product;
			})
			.filter(order => !!order);
		}
	},
	mutations: {
		addShopInList: function (state, shop) {
			state.shoppingBasket.push(shop);
		}
	},
	actions: {
		clearBasket: function () {

		},
		addShoppingInList: function ({ commit, state}, shop) {
			this.commit('addShopInList', shop);
			basket.setList(state.shoppingBasket);
		},
		changeShoppingInList: function () {
			
		}
	}
})