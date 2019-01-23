<template>
	<div>
		<div v-if="orders.length > 0">
			<div id='printArea'>
				<OrderItem 
					v-for="order in orders"
					v-bind:key="order.product.id"
					v-bind:order="order"/>
			</div>
			<div @click="print">
				Печатай
			</div>
			<div @click="clearList">
				Очистить
			</div>
		</div>
		<div v-else>
			Корзина пустая
		</div>
	</div>
</template>

<script>
import OrderItem from './OrderItem.vue';
import PHE from 'print-html-element';

export default {
	components: {
		OrderItem
	},
	computed: {
		orders: function () {
			return this.$store.getters.orders;
		}
	},
	methods: {
		clearList: function () {
			this.$store.dispatch('clearList');
		},
		print: function () {
			//this.$htmlToPaper('printArea');
			PHE.printElement(document.getElementById('printArea'));
		}
	}
}
</script>

<style>

</style>
