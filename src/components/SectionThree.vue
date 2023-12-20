<template>
	<section class="wrapper">
		<div class="logo rel">
			<img src="@/assets/images/logo/logo.svg" alt="logo" />
			<span>EasyLife</span>
		</div>
		<div class="how-header">
			<h3>{{ $t('How will the raffle results be summarized?') }}</h3>
		</div>
		<div class="how-paragraph">
			<p>
				{{ $t('Every Sunday') }}
			</p>
			<p>
				{{ $t('The Winner') }}
			</p>
		</div>
		<div class="bg">
			<img class="bg-image" src="@/assets/images/background15.png" alt="" />
			<h1 class="luck">{{ $t('Good luck!') }}</h1>
			<div class="instagram">
				<img src="@/assets/images/instagram.svg" alt="instagram" />
				<a href="https://www.instagram.com/easylife_turkiye" target="_blank"
					>easylife_turkiye</a
				>
			</div>
		</div>
		<div class="downloads">
			<a
				v-if="$i18n.locale === 'ru'"
				href="https://apps.apple.com/kz/app/easylife-turkiye/id1671635384?platform=iphone"
				target="_blank"
			>
				<img
					class="btn"
					src="@/assets/images/appledownloadRu.svg"
					alt="appledownloadRu"
				/>
			</a>
			<a
				v-else
				href="https://apps.apple.com/kz/app/easylife-turkiye/id1671635384?platform=iphone"
				target="_blank"
			>
				<img
					class="btn"
					src="@/assets/images/appledownloadEn.svg"
					alt="appledownloadEn"
				/>
			</a>
			<a
				v-if="$i18n.locale === 'ru'"
				href="https://play.google.com/store/apps/details?id=com.easy_life.easy_life&hl=en_US"
				target="_blank"
			>
				<img
					class="btn"
					src="@/assets/images/googledownloadRu.svg"
					alt="googledownloadRu"
				/>
			</a>
			<a
				v-else
				href="https://play.google.com/store/apps/details?id=com.easy_life.easy_life&hl=en_US"
				target="_blank"
			>
				<img
					class="btn"
					src="@/assets/images/googledownloadEn.svg"
					alt="googledownloadEn"
				/>
			</a>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.wrapper {
	margin-top: 102px;
}

.how-header {
	margin: 31px 0 71px;
	h3 {
		color: $yellow; // yellow
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
	width: 300px; // 375px
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
