<template>
	<div>
		<div v-if="orders.length > 0">
			<div @click="print" class="button">
				Печатай
			</div>
			<div @click="clearList" class="button">
				Очистить
			</div>
			<div id='printArea'>
				<OrderItem 
					v-for="order in orders"
					v-bind:key="order.product.id"
					v-bind:order="order"/>
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

<style scoped>
	.button {
		height: 24px;
		padding: 4px;
		border-radius: 4px;
		background-color: greenyellow;
		width: max-content;
	}
</style>
