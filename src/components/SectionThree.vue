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
		<h1 class="luck">Удачи!</h1>
		<div class="instagram">
			<img src="@/assets/images/instagram.svg" alt="instagram" />
			<a href="https://www.instagram.com/easylife_turkiye" target="_blank"
				>easylife_turkiye</a
			>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.how-header {
	margin: 31px 0 71px;
	h3 {
		// color: $yellow;
		text-align: center;
		font-size: 24px;
	}
}

.how-paragraph {
	// background: red;
	// width: 347px;
}

// .luck {
// 	margin: 50px;
// 	font-size: 48px;
// 	text-align: center;
// }

// .instagram {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	gap: 13px;
// 	a {
// 		font-size: 20px;
// 		font-weight: 800;
// 		color: white;
// 		text-decoration: underline;
// 	}
// }
</style>
