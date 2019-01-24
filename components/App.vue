<template>
	<div>
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