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
		},
		randomListProducts: state => {
			const length = 1 + Math.round(9 * Math.random());
			let list = [];
			let usedIndexs = [];

			if (length < state.products.length) {
				state.products.forEach(function (item, index) {
					usedIndexs.push(index);
				});
				while (length < usedIndexs.length) {
					let removedIndex = Math.round((usedIndexs.length - 1) * Math.random());
					usedIndexs.splice(removedIndex, 1);
				}
				list = state.products.filter(function (product, index) {
					return usedIndexs.includes(index);
				});
			} else {
				list = state.products;
			}

			return list;
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