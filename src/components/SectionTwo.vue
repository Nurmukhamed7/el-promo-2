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
		<div class="read">
			<img
				class="left-pic-2"
				src="@/assets/images/leftPic2.png"
				alt="leftPic2"
			/>
			<img
				class="right-pic-2"
				src="@/assets/images/rightPic2.png"
				alt="leftPic2"
			/>

			<img class="arrow" src="@/assets/images/arrow.svg" alt="arrow" />
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
	margin: 10px 10px 20px 0px;
	font-size: 24px;
	text-align: right;
}

.steps-arrow-odd {
	margin-left: 50px;
	transform: rotate(45deg);
}
.steps-arrow-even {
	margin-left: 50px;
	transform: rotate(135deg);
}

.read {
	position: relative;
	margin-top: 104px;
}

.left-pic-2 {
	position: absolute;
	left: -40px;
	top: -100px;
	width: 166px;
	z-index: -10;
}
.right-pic-2 {
	position: absolute;
	right: -20px;
	width: 128px;
	top: -180px;
}

.arrow {
	position: absolute;
	width: 97px;
	height: 58px;
	left: 50%;
	transform: translate(-50%, 12%);
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
