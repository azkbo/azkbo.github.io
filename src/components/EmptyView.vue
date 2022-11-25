<template>
  <!-- 空界面 -->
  <div class="empty3">
    <div v-if="icon" class="icon" />
    <div class="message" @click="onRefresh">
      {{ text || "暂无相关信息，敬请期待！" }}
    </div>
  </div>
</template>
<script>
/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 
 */
 export default {
  name: "EmptyView",
  props: {
    icon,
    text,
    onRefresh
  }
  // components: {},
};
</script>
<style scoped>
.empty3 {
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.icon {
  width: 168px;
  height: 112px;
  background-size: cover;
  /* background-image: url("../assets/icon/empty_ic.png"); */
}
.message {
  padding-top: 16px;
  font-size: 16px;
  color: #c79f62;
}
</style>