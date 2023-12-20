<template>
	<nav>
		<button
			:class="{ language: true, active: $i18n.locale === 'ru' }"
			@click="$i18n.locale = 'ru'"
		>
			RU
		</button>
		<button
			:class="{ language: true, active: $i18n.locale === 'en' }"
			@click="$i18n.locale = 'en'"
		>
			EN
		</button>
		<button
			:class="{ language: true, active: $i18n.locale === 'tr' }"
			@click="$i18n.locale = 'tr'"
		>
			TR
		</button>
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
	font-weight: 600;
	font-size: 11px;
	line-height: 1;
	background-color: $white;
	padding: 6px 4px;
	border: 2px solid $dark-purple;
	border-radius: 10px;
	opacity: 0.4;
}

.language.active {
	opacity: 1;
	background: $dark-purple;
	color: $white;
	border: 2px solid $white;
}
</style>
