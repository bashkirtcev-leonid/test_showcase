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
		},
		decrement: function (state, idProduct) {
			state.shoppingBasket
				.find(item => (item.id ===idProduct))
				.count--;
		},
		increment: function (state, idProduct) {
			state.shoppingBasket
				.find(item => (item.id ===idProduct))
				.count++;
		},
		removeOrder: function (state, idProduct) {
			state.shoppingBasket.splice(
				state.shoppingBasket
					.findIndex(item => (item.id ===idProduct)), 1
			);
		},
		clearList: function (state) {
			state.shoppingBasket = [];
		}
	},
	actions: {
		clearBasket: function () {

		},
		addShoppingInList: function ({ commit }, shop) {
			this.commit('addShopInList', shop);
			basket.setList(this.state.shoppingBasket.map(function (item) {
				return {
					id: item.id,
					count: item.count
				};
			}));
		},
		decrement: function ({commit}, idProduct) {
			this.commit('decrement', idProduct);
			basket.setList(this.state.shoppingBasket.map(function (item) {
				return {
					id: item.id,
					count: item.count
				};
			}));
		},
		increment: function ({commit}, idProduct) {
			this.commit('increment', idProduct);
			basket.setList(this.state.shoppingBasket.map(function (item) {
				return {
					id: item.id,
					count: item.count
				};
			}));
		},
		removeOrder: function ({commit}, idProduct) {
			this.commit('removeOrder', idProduct);
			basket.setList(this.state.shoppingBasket.map(function (item) {
				return {
					id: item.id,
					count: item.count
				};
			}));
		},
		clearList: function ({commit}) {
			this.commit('clearList');
			basket.clearBasket();
		}
	}
})