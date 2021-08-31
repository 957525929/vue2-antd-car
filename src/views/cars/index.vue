<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide> <CarsItem height="900px" /></swiper-slide>
        <swiper-slide> <CarsItem /></swiper-slide>
        <swiper-slide> <CarsItem /></swiper-slide>
        <swiper-slide> <CarsItem /></swiper-slide>
        <swiper-slide> <CarsItem /></swiper-slide>
        <swiper-slide> <CarsItem /></swiper-slide>
        <swiper-slide> <CarsItem /></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import CarsItem from "@c/carsList";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Cars",
  components: { Swiper, SwiperSlide, CarsItem },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    user() {
      this.$router.push({
        name: "User",
      });
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
