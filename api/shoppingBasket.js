export default {
	setList: function (list) {
		localStorage.setItem('basket', list);
	},
	getList: function () {
		return localStorage.getItem('basket') || [];
	},
	clearBasket: function () {
		localStorage.removeItem('basket');
	}
};