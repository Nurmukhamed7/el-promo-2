<template>
	<nav>
		<button @click="$i18n.locale = 'en'">EN</button>
		<button @click="$i18n.locale = 'ru'">RU</button>
		<button @click="$i18n.locale = 'tr'">TR</button>

		<router-link to="/" class="language">RU</router-link>
		<router-link to="/en" class="language">EN</router-link>
		<router-link to="/tr" class="language">TR</router-link>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

nav {
	padding: 4px 3px;
	margin: 0 0 16px;
	display: flex;
	gap: 7px;
}

.language {
}

a {
	font-weight: 600;
	font-size: 11px;
	line-height: 1;
	background-color: $white;
	padding: 6px 4px;
	border: 2px solid $dark-purple;
	border-radius: 10px;
	opacity: 0.4;
}
.router-link-active {
	background: $dark-purple;
	color: $white;
	border: 2px solid $white;
	opacity: 1;
}
</style>
