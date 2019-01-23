export default {
	setList: function (list) {
		localStorage.setItem('basket', JSON.stringify(list));
	},
	getList: function () {
		let orders;
		try {
			orders = JSON.parse(localStorage.getItem('basket')) || [];
		} catch (e) {
			orders = [];
		}
		return orders;
	},
	clearBasket: function () {
		localStorage.removeItem('basket');
	}
};