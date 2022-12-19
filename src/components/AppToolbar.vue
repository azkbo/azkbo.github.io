<template>
  <div class="v-header-height">
    <div class="v-header v-row" :style="color">
      <img class="v-logo" />
      <span class="v-title" @click="onTabClick('home')"> {{title}} </span>
      <div class="v-flex"></div>
      <span class="v-tab v-point" @click="onTabClick('menu')"> 目录 </span>
      <span class="v-tab v-point" @click="onTabClick('catalog')"> 技术栈 </span>
      <span class="v-tab v-point" @click="onTabClick('nav')"> 导航 </span>
      <span class="v-tab v-point" @click="onTabClick('about')"> 关于 </span>
      <img class="v-usericon v-point" @click="onTabClick('login')" />
    </div>
  </div>
</template>
<script>
export default {
  name: "AppToolbar",
  props: {
    title: {
      type: String,
      default: "知之学吧",
    },
    onBindTab: {
      type: Function,
      // required: true,
      default: null,
    },
  },
  data() {
    return {
      color: "",
      msgCount: 0,
    };
  },
  // mounted() {},
  methods: {
    onTabClick(key) {
      if (this.onBindTab) {
        this.onBindTab(key);
      }
    },
  },
};
</script>
<style scoped>
.v-header-height {
  height: 56px;
  min-height: 56px;

  font-family: PingFangSC-Medium;
  /* font-family: PingFangSC-Regular; */
}
.v-header {
  width: 100%;
  height: 56px;
  z-index: 999;
  top: 0;
  left: 0;
  position: fixed;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 6px 4px 6px rgba(0, 0, 0, 0.3);
}
.v-title {
  font-size: 16px;
  font-weight: 500;
}
.v-tab {
  font-size: 16px;
  font-weight: 500;
  line-height: 52px;
  text-align: center;
  padding: 0 16px;
}
.v-point {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.v-logo {
  width: 36px;
  height: 36px;
  /* border-radius: 50%; */
  margin: 0 16px;
  background-image: url("../assets/icon/logo.png");
  background-size: cover;
}
.v-usericon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 16px 0 32px;
  background-color: rgba(211, 83, 215, 0.7);
}
.v-flex {
  flex: 1;
}
.v-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
