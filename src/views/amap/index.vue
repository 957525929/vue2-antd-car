<template>
  <div class="amap-wrap">
    <el-amap vid="amapCo" :events="events" class="amap-demo"> </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
// let amapManager = new VueAMap.AMapManager();
export default {
  name: "Index",
  data() {
    return {
      map: null,
      zoom: 18,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom,
      });
    });
  },
};
</script>

<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>
