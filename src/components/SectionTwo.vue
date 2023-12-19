<template>
	<section class="wrapper">
		<div class="logo rel">
			<img src="@/assets/images/logo/logo.svg" alt="logo" />
			<span>EasyLife</span>
			<img class="left-pic" src="@/assets/images/leftPic.png" alt="leftPic" />
			<img class="fingers" src="@/assets/images/fingers.png" alt="fingers" />
		</div>
		<div class="steps-header">
			<h3>5 шагов до выигрыша:</h3>
		</div>
		<div class="steps-paragraph">
			<h3 class="steps-paragraph-odd">1 - Скачай приложение</h3>
			<img
				class="steps-arrow-odd"
				src="@/assets/images/yellow-arrow.svg"
				alt="fingers"
			/>
			<h3 class="steps-paragraph-even">2 - Зарегистрируйся</h3>
			<img
				class="steps-arrow-even"
				src="@/assets/images/yellow-arrow.svg"
				alt="fingers"
			/>
			<h3 class="steps-paragraph-odd">3 - Размести объявление</h3>
			<img
				class="steps-arrow-odd"
				src="@/assets/images/yellow-arrow.svg"
				alt="fingers"
			/>
			<h3 class="steps-paragraph-even">4 - Подтверди участие</h3>
			<img
				class="steps-arrow-even"
				src="@/assets/images/yellow-arrow.svg"
				alt="fingers"
			/>
			<h3 class="steps-paragraph-odd">5 - Ожидай итоги</h3>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.wrapper {
	margin-top: 102px;
}

.rel {
	position: relative;
}

.left-pic {
	position: absolute;
	left: -10px;
	top: -150px;
	z-index: -10;
}
.fingers {
	position: absolute;
	top: -100px;
	right: 10px;
	z-index: -10;
	transform: rotate(-45deg);
}

.steps-header {
	margin: 31px 0 71px;
	h3 {
		color: $yellow;
		text-align: center;
	}
}

.steps-paragraph {
}

.steps-paragraph-odd {
	margin: 5px 0;
	font-size: 24px;
	text-align: left;
}
.steps-paragraph-even {
	margin: 10px 10px 20px 70px;
	font-size: 24px;
	// text-align: right;
}

.steps-arrow-odd {
	margin-left: 30px;
	transform: rotate(45deg);
}
.steps-arrow-even {
	margin-left: 30px;
	transform: rotate(135deg);
}
</style>
