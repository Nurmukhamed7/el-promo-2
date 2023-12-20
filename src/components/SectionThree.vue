<template>
	<section class="wrapper">
		<div class="logo rel">
			<img src="@/assets/images/logo/logo.svg" alt="logo" />
			<span>EasyLife</span>
		</div>
		<div class="how-header">
			<h3>Как будут подводиться итоги розыгрыша?</h3>
		</div>
		<div class="how-paragraph">
			<p>
				Каждое воскресенье в прямом эфире Instagram @easylife_turkiye методом
				случайных чисел определяется победитель
			</p>
			<p>
				О своём выигрыше Победитель узнает из публикации и личного сообщения в
				приложении EasyLife.
			</p>
		</div>
		<div class="bg">
			<img class="bg-image" src="@/assets/images/background15.png" alt="" />
			<h1 class="luck">Удачи!</h1>
			<div class="instagram">
				<img src="@/assets/images/instagram.svg" alt="instagram" />
				<a href="https://www.instagram.com/easylife_turkiye" target="_blank"
					>easylife_turkiye</a
				>
			</div>
		</div>
		<div class="downloads">
			<img
				v-if="$i18n.locale === 'ru'"
				class="btn"
				src="@/assets/images/appstore-ru.png"
				alt="appstore"
			/>
			<img
				v-else
				class="btn"
				src="@/assets/images/appstore-en.png"
				alt="appstore"
			/>
			<img
				class="btn"
				src="@/assets/images/googleplay-ru.png"
				alt="googleplay"
			/>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.how-header {
	margin: 31px 0 71px;
	h3 {
		color: $yellow;
		text-align: center;
		font-size: 24px;
	}
}

.how-paragraph {
}

.bg {
	position: relative;
}

.bg-image {
	position: absolute;
	top: -100px;
	z-index: -10;
	width: 375px;
}

.luck {
	margin: 50px;
	font-size: 48px;
	text-align: center;
}

.instagram {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 13px;
	a {
		font-size: 20px;
		font-weight: 800;
		color: white;
		text-decoration: underline;
	}
}

.downloads {
	margin-top: 22px;
	display: flex;
	justify-content: space-between;
	.btn {
		width: 108px;
	}
}
</style>
