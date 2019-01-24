<template>
	<div>
		<div v-if="product !== null">
			<div>
				Карточка продукта {{product.name}}. Цена: {{product.price}}.
			</div>
			<img :src="`${product.cover}`"/>
			<div>
				<div>
					{{product.description}}
				</div>
				<div v-if="!productInBasket">
					<div @click="addInBasket" class="button">
						Добавить товар в корзину
					</div>
				</div>
				<div v-else>
					Товар уже в корзине
				</div>
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
			this.$store.dispatch('addShoppingInList',
				{
					id: this.product.id,
					count: 1
				}
			);
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
	img {
		width: 400px;
		height: 400px;
	}
</style>
