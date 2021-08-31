<template>
  <div>
    <!-- dom data渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <NavBar />
    <!-- 会员 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "../amap";
import Cars from "../cars";
import NavBar from "@c/navbar";
export default {
  name: "Amap",
  components: {
    Map,
    Cars,
    NavBar,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  watch: {
    // $route: {
    //   handler(newValue) {
    //     const routerName = newValue.name;
    //     this.show = routerName === "Index" ? false : true;
    //     console.log(this.show);
    //   },
    // },
  },
};
</script>

<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 101;
  width: 410px;
  background-color: #34393f;
  -webkit-transform: all 0.3s ease 0s;
  -moz-transform: all 0.3s ease 0s;
  -ms-transform: all 0.3s ease 0s;
  -o-transform: all 0.3s ease 0s;
  transform: all 0.3s ease 0s;
  &.open {
    right: 0;
  }
}
</style>
