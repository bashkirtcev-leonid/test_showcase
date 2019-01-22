<template>
	<div>
		<div v-if="product !== null">
			Карточка продукта:
				<span>
					{{product.name}}
				</span>
				<span>
					Здесь будет изображение
				</span>
				<span>
					{{product.price}}
				</span>
				<span>
					{{product.description}}
				</span>
				<div v-if="!productInBasket">
					<button @click="addInBasket"/>
				</div>
				<div v-else>
					Товар уже в корзине
				</div>
		</div>
		<div v-else>
			Продукт не найден
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		product: function () {
			return this.$store.state.products.filter(function (product) {
				return this.$route.params.id === product.id
			}.bind(this))[0] || null;
		},
		productInBasket: function () {
			let product = this.product;
			return this.$store.state.shoppingBasket.some(function (item) {
				return item.id === this.$route.params.id;
			}.bind(this));
		}
	},
	methods: {
		addInBasket: function () {
			this.$store.dispatch({
				type: 'addShoppingInList',
				shop: {
					id: this.product.id,
					count: 1
				}
			});
		}
	}
}
</script>

