<template>
	<div>
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
	props: ['product']
}
</script>
