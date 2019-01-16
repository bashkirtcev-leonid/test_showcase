import Vue from 'vue';

var element = document.createElement('div');
element.id = 'app';
document.body.appendChild(element);

var app = new Vue({
	el: '#app',
	data: {
		name: 'example'
	},
	render: function (createElement) {
		return createElement('div', this.name);
	}
});
