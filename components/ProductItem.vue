<template>
	<div @click='onClick' class="product-tile">
		<img :src="`${product.cover}`"/>
		<div class="product-tile_footer">
			<div>
				Название: {{product.name}}
			</div>
			<div>
				Цена: {{product.price}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['product'],
	methods: {
		onClick: function () {
			this.$router.push({
				name: 'productCard',
				params: {
					id: this.product.id
				}
			});
		}
	}
}
</script>

<style scoped>
	.product-tile {
		display: inline-block;
		width: 200px;
		height: 200px;
		margin: 4px;
		padding: 8px;
		border: 2px black solid;
	}
	.product-tile img {
		width: 100%;
		height: 80%;
	}
</style>
