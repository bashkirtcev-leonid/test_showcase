<template>
	<div>
		
	</div>
</template>


<script>
import { mapState } from 'vuex'
import ProductItem from './ProductItem.vue';

export default {
	computed: mapState({
		products: state => state.products
	}),
}
</script>