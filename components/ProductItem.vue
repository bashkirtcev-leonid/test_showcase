<template>
	<div @click='onClick'>
		<span>
			{{product.name}}
		</span>
		<img :src="`${product.cover}`"/>
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
