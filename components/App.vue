<template>
	<div>
		<ProductList/>
		{{ msg }}
	</div>
</template>

<<script>
import ProductList from './ProductList.vue'

export default {
	components: { ProductList },
	data() {
		return {
			msg: 'Hello'
		}
	},
}
</script>