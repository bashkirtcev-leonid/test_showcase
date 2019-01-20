<template>
	<div @click='onClick'>
		<span>
			{{product.name}}
		</span>
		<span>
			Здесь будет изображение
		</span>
		<span>
			{{product.price}}
		</span>
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
