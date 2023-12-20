<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import SectionTwo from '@/components/SectionTwo.vue'
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
				<h2>{{ $t('attension') }}</h2>
				<div class="rel">
					<h1>{{ $t('prizedraw') }}</h1>
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
						v-if="$i18n.locale === 'ru'"
						class="iphone"
						src="@/assets/images/iphone-ru.png"
						alt="iphone-ru"
					/>
					<img
						v-if="$i18n.locale === 'en'"
						class="iphone"
						src="@/assets/images/iphone-en.png"
						alt="iphone-ru"
					/>
					<img
						v-if="$i18n.locale === 'tr'"
						class="iphone"
						src="@/assets/images/iphone-tr.png"
						alt="iphone-ru"
					/>
				</div>
				<div class="conditions">
					<h3>{{ $t('place') }}</h3>
					<h3>
						<span>{{ $t('300TL') }}</span> - {{ $t('once a week') }}
					</h3>
					<h3>
						<span>{{ $t('1 000 TL') }}</span> - {{ $t('once a month') }}
					</h3>
				</div>
				<div class="read">
					<h3>{{ $t('Terms and conditions:') }}</h3>
					<img class="arrow" src="@/assets/images/arrow.svg" alt="arrow" />
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
				</div>
			</header>
			<SectionTwo></SectionTwo>

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
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/main.scss';

header {
	text-align: center;
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
	right: -20px;
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
