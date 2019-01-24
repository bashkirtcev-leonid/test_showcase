<template>
	<div class="main">
		<Header/>

		<router-view></router-view>

		<modals-container/>
	</div>
</template>

<<script>
import Header from './Header.vue';
export default {
	components: {
		Header
	},
	data() {
		return {
			msg: 'Hello'
		}
	},
}
</script>

<style scoped>
	.main {
		width: 1280px;
		height: 800px;
		overflow: scroll;
	}
</style>
