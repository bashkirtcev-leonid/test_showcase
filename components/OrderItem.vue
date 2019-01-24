<template>
	<div class="order-item">
		{{order.product.name}}
		<div>
			<div @click="decrement">
				Уменьшить (-)
			</div>
			<div>
				{{order.count}}
			</div>
			<div @click="increment">
				Увеличить (+)
			</div>
			<div @click="removeOrder">
				Удалить позицию
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['order'],
	methods: {
		decrement: function () {
			this.$store.dispatch('decrement', this.order.product.id);
		},
		increment: function () {
			this.$store.dispatch('increment', this.order.product.id);
		},
		removeOrder: function () {
			this.$store.dispatch('removeOrder', this.order.product.id);
		}
	}
}
</script>

<style scoped>
	.order-item {
		margin: 4px;
		padding: 8px;
		border: 2px black solid;
	}
</style>
