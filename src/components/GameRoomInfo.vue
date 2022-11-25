<template>
  <!-- 创建游戏弹窗 -->
  <div class="game-room-info" @click="closeDig">
    <div class="column center dialog-box">
        <h2 class="dialog-title">请记住房间信息</h2>
        <div class="row cell-box">
          <span class="cell-label">房间名称</span>
          <span class="cell-value">{{info.roomName}}</span>
        </div>
        <div class="row cell-box">
          <span class="cell-label">房间号</span>
          <span class="cell-value">{{info.roomCode}}</span>
        </div>
        <div class="row cell-box">
          <span class="cell-label">房间密码</span>
          <span class="cell-value">{{info.roomPwd}}</span>
        </div>
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
  name: "CreateGame",
  props: {
    info: {
      type: Object,
    },
    onClose: {
      type: Function,
      required: true,
      default: null
    }
  },
  methods: {
    closeDig() {
      if(this.onClose) {
        this.onClose();
      }
    }
  },
};
</script>
<style scoped>
.game-room-info {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9997;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-box {
  height: 240px;
  margin-bottom: 200px;
  border-radius: 8px;
  background-color: white;
}
.dialog-title {
  line-height: 56px;
  color: blueviolet;
  margin: 0;
}
.cell-box {
  width: 320px;
  height: 46px;
  margin: 0 24px;
  align-items: flex-end;
  padding-bottom: 6px;
  border-bottom: solid 1px #f3f3f3;
}
.cell-label {
  font-size: 16px;
  font-family: PingFangSC-Medium;
  min-width: 96px;
}
.cell-value {
  font-size: 20px;
  font-weight: 600;
  font-family: PingFangSC-Medium;
}
</style>
