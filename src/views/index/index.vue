<template>
  <div>
    <!-- dom data渲染 -->
    <!-- <Cars /> -->
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <NavBar />
    <!-- 会员 -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
    <!-- login -->
    <LoginVue />
  </div>
</template>

<script>
import Map from "../amap";
import Cars from "../cars";
import NavBar from "@c/navbar";
import LoginVue from "./login";
export default {
  name: "Amap",
  components: {
    Map,
    Cars,
    NavBar,
    LoginVue,
  },
  data() {
    return {
      // show: false,
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
  mounted() {
    document.addEventListener("mouseup", (e) => {
      const userCon = document.getElementById("children-view");
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({
          name: "Index",
        });
      }
    });
    console.log(this.$route.name);
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
  @include webkit(transform, all 0.3s ease 0s);
  @include webkit(box-shadow, -5px 0 38px 0 raba(0, 0, 0, 0.4));
  &.open {
    right: 0;
  }
}
</style>
