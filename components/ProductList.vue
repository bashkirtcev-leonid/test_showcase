<template>
	<div>
		<ProductItem 
			v-for="product in products"
			v-bind:key="product.id"
			v-bind:product="product"/>
	</div>
</template>


<script>
import { mapState } from 'vuex'
import ProductItem from './ProductItem.vue';

export default {
	components: {
		ProductItem
	},
	computed: {
		products: function () {
			return this.$store.getters.randomListProducts;
		}
	},
}
</script>