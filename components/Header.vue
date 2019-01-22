<template>
	<div class="header">
		<div class="left-block">
			<div @click='onClickHome' class="icon home">
			</div>
		</div>
		<div class="right-block">
			<div @click='onClickBasket' class="icon basket">
			</div>
		</div>
	</div>
</template>

<script>
import PopupShoppingBasket from './PopupShoppingBasket.vue';

export default {
	methods: {
		onClickHome: function () {
			this.$router.push({
				name: 'productList'
			});
		},
		onClickBasket: function () {
			 this.$modal.show(PopupShoppingBasket);
		}
	}
}
</script>

<style scoped>
.header {
	height: 64px;
	width: 100%;
}
.left-block {
	left: 0;
	float: left;
}
.right-block {
	right: 0;
	float: right;
}
.header .icon {
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
