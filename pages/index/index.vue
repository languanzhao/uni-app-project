<template>
	<view class="index">
		<swiper class="swiper" :previous-margin="30" circular :next-margin="30" interval="3000" autoplay @change="swiperChange">
			<swiper-item class="swiper-item" v-for="(item, index) of list" :key="index">
				<image :class="['image', swiperIndex === index ? 'active' : '']" :src="item" mode=""></image>
			</swiper-item>
		</swiper>
		<test :way="part"></test>
		<test2 :way="global"></test2>
	</view>
</template>

<script>
import test from '../../components/test.vue'
export default {
	data() {
		return {
			part:'这是一个子组件（局部组件）',
			global:'这是一个子组件（全局组件）',
			swiperIndex: 0,
			list: [
				'http://img2.imgtn.bdimg.com/it/u=2249146272,3803357286&fm=26&gp=0.jpg',
				'http://img3.imgtn.bdimg.com/it/u=2549165567,3171022610&fm=26&gp=0.jpg',
				'http://img2.imgtn.bdimg.com/it/u=1890128306,362626824&fm=26&gp=0.jpg'
			]
		};
	},
	components:{
		test
	},
	onLoad() {},
	methods: {
		swiperChange(e) {
			this.swiperIndex = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
.index {
	.swiper {
		width: 100%;
		height: 300upx;
		.swiper-item {
			display: flex;
			justify-content: center;
			align-items: center;
			.image {
				width: 100%;
				height: 260upx;
				margin: 0 20upx;
			}
			.active {
				transform: scale(1.14);
				transition: all 0.2s ease-in 0.2s;
			}
		}
	}
}
</style>
