import Vue from 'vue';

/*var element = document.createElement('div');
element.id = 'app1';
document.body.appendChild(element);*/

var app = new Vue({
	el: '#app1',
	template: '{{name}}',
	data: {
		name: 'example'
	}
});
