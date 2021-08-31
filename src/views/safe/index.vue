<template>
  <div class="user-container">
    <Back column="安全设置" />
    <ul class="group-link">
      <router-link to="password" tag="a" class="arrow"> 修改登录密码 </router-link>
      <router-link to="aa" tag="a" class="arrow"> 设置资金密码 </router-link>
      <router-link to="aa" tag="a" class="arrow"> 绑定手机号 </router-link>
      <router-link to="aa" tag="a" class="arrow"> 绑定银行卡号 </router-link>
    </ul>
  </div>
</template>

<script>
import Map from "../amap/index.vue";
import Cars from "../cars/index.vue";
export default {
  name: "User",
  components: {
    Map,
    Cars,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./index.scss";
.logout {
  position: absolute;
  left: 50%;
  bottom: 60px;
  width: 165px;
  height: 58px;
  margin-left: -82px;
  background-color: #2d3339;
  text-align: center;
  line-height: 58px;
  color: #fff;
  font-size: 18px;
  border-radius: 100px;
  border: none;
  outline: none;
}
</style>
