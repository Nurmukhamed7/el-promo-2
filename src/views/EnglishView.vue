<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
// import SectionSecond from '../../components/second/SectionSecond.vue'
</script>

<template>
	<div class="container">
		<the-navbar></the-navbar>
		<div class="first">
			<header>
				<div class="logo">
					<img src="@/assets/images/logo/logo.svg" alt="logo" />
					<span>EasyLife</span>
				</div>
				<h2>ВНИМАНИЕ!</h2>
				<div class="rel">
					<h1>РОЗЫГРЫШ</h1>
					<img
						class="left-pic"
						src="@/assets/images/leftPic.png"
						alt="leftPic"
					/>
					<img
						class="right-pic"
						src="@/assets/images/rightPic.png"
						alt="rightPic"
					/>
					<img class="sale" src="@/assets/images/sale.png" alt="sale" />
					<img
						class="fingers"
						src="@/assets/images/fingers.png"
						alt="fingers"
					/>
					<img
						class="iphone"
						src="@/assets/images/iphone-ru.png"
						alt="iphone-ru"
					/>
				</div>
				<div class="conditions">
					<h3>Размести свое объявление и выиграй:</h3>
					<h3><span>300 лир</span> - раз в неделю</h3>
					<h3><span>1 000 лир</span> - раз в месяц</h3>
				</div>
				<div class="read">
					<h3>Читай условия розыгрыша:</h3>
					<img class="arrow" src="@/assets/images/arrow.svg" alt="arrow" />
					<div class="downloads">
						<img
							class="btn"
							src="@/assets/images/appstore-ru.png"
							alt="appstore"
						/>
						<img
							class="btn"
							src="@/assets/images/googleplay-ru.png"
							alt="googleplay"
						/>
					</div>
				</div>
			</header>
			<!-- <section-second></section-second> -->
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

header {
	text-align: center;
}

.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 7.11px;

	span {
		font-size: 20.7px;
		color: $white;
		font-weight: 700;
	}
}

.rel {
	position: relative;
}
.left-pic {
	position: absolute;
	left: -10px;
	top: 30%;
	z-index: -10;
}
.right-pic {
	position: absolute;
	right: -10px;
	z-index: -10;
}
.sale {
	position: absolute;
	top: 40%;
	right: 4%;
	z-index: -8;
}

.fingers {
	position: absolute;
	top: -100%;
	right: 20px;
	z-index: -10;
}

.iphone {
	// background: red;
	width: 203px;
	position: absolute;
	z-index: -9;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 12%);
}

.conditions {
	margin-top: 307px;
}

.read {
	position: relative;
	margin-top: 57px;
}

.arrow {
	position: absolute;
	width: 97px;
	height: 58px;
	top: 50%;
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
