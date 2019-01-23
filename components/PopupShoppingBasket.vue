<template>
	<div>
		<div v-if="orders.length > 0">
			<OrderItem 
				v-for="order in orders"
				v-bind:key="order.product.id"
				v-bind:order="order"/>
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
		}
	}
}
</script>

<style>

</style>
