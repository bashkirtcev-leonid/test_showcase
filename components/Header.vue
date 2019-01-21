<template>
	<div class="header">
		<div class="left-block">
			<i class="home"/>
		</div>
		<div class="right-block">
			<i class="basket"/>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {
	height: 64px;
}
.left-block {
	left: 0;
	display: inline-block;
}
.right-block {
	right: 0;
	display: inline-block;
}
.header i {
	width: 32px;
	height: 32px;
}
.home {
	background-color: aqua;
}
.basket {
	background-color: orangered;
}
</style>
