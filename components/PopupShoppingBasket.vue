<template>
	<div>
		<div v-if="orders.length > 0">
			<OrderItem 
				v-for="order in orders"
				v-bind:key="order.product.id"
				v-bind:order="order"/>
		</div>
		<div v-else>
			Корзина пустая
		</div>
	</div>
</template>

<script>
import OrderItem from './OrderItem.vue';

export default {
	computed: {
		orders: function () {
			return this.$store.orders;
		}
	}
}
</script>

<style>

</style>
