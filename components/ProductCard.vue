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
		}
	}
}
</script>

