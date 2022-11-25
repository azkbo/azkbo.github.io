<template>
  <!-- 创建游戏弹窗 -->
  <div class="create-game">
    <div class="column dialog-box">
      <div class="row tab-layout">
        <span :class="'tab-view' + (tabIdx == 0 ? ' tab-st' : '')"
          @click="onChangeTab(0)">创建房间</span>
        <div class="tab-line" />
        <span :class="'tab-view' + (tabIdx == 1 ? ' tab-st' : '')"
          @click="onChangeTab(1)">加入房间</span>
      </div>
      <div class="content-box" v-if="tabIdx == 0">
        <div class="row cell-box">
          <span class="cell-label">房间名称</span>
          <input
            class="flex"
            maxlength="6"
            v-model="inputObj.roomName"
            placeholder="请输入房间名称"
          />
        </div>
        <div class="row cell-box">
          <span class="cell-label">房间密码</span>
          <input
            class="flex"
            v-model="inputObj.roomPwd"
            maxlength="6"
            placeholder="请设置房间密码"
          />
        </div>
        <div class="row cell-box">
          <span class="cell-label">角色名称</span>
          <input
            class="flex"
            maxlength="8"
            v-model="inputObj.userName"
            placeholder="请输入角色名称"
          />
        </div>
      </div>
      <div class="content-box" v-else>
        <div class="row cell-box">
          <span class="cell-label">房间号</span>
          <input
            class="flex"
            v-model="inputObj.code"
            maxlength="8"
            placeholder="请输入房间号"
          />
        </div>
        <div class="row cell-box">
          <span class="cell-label">房间密码</span>
          <input
            class="flex"
            v-model="inputObj.roomPwd"
            maxlength="6"
            placeholder="请输入房间密码"
          />
        </div>
        <div class="row cell-box">
          <span class="cell-label">角色名称</span>
          <input
            class="flex"
            v-model="inputObj.userName"
            maxlength="8"
            placeholder="请输入角色名称"
          />
        </div>
      </div>
      <div class="join-btn join-str" @click="inputRoomName">{{tabIdx == 0 ? '创建房间':'进入游戏'}}</div>
    </div>
  </div>
</template>
<script>
import Consts from '../modules/constant';

/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc:
 */
export default {
  name: "CreateGame",
  props: {
    index: {
      type: Number,
      default: 0
    },
    onChange: {
      type: Function,
      required: true, // 是否必传
      default: null
    }
  },
  data() {
    return {
      inputObj: { roomName: "", userName: Consts.userName, roomPwd: "qwer", code: Consts.roomCode||'', roomCode: 0 },
      tabIdx: 0,
    };
  },
  mounted() {
    this.tabIdx = this.index;
  },
  methods: {
    onChangeTab(num) {
      this.tabIdx = num;
    },
    inputRoomName() {
      const {roomName,userName,code,roomPwd} = this.inputObj;
      let alertStr = '';
      if(this.tabIdx == 0) {
        if(roomName.length < 2) {
          alertStr = '请输入房间名称';
        }else if(roomPwd.length < 3){
          alertStr = '请设置房间密码';
        }else if(userName.length < 2){
          alertStr = '请输入角色名称';
        }
      }else {
        if(code.length < 2) {
          alertStr = '请输入房间号';
        }else if(roomPwd.length < 3){
          alertStr = '请输入房间密码';
        }else if(userName.length < 2){
          alertStr = '请输入角色名称';
        }
      }
      if(alertStr.length > 0) {
        alert(alertStr);
        return
      }
      if(this.onChange) {
        this.inputObj.roomCode = parseInt(code);
        this.onChange(this.inputObj);
      }
    },
  },
};
</script>
<style scoped>
.create-game {
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
  width: 420px;
  /* height: 300px; */
  margin-bottom: 180px;
  border-radius: 8px;
  background-color: white;
}
.tab-line {
  width: 1px;
  height: 48px;
  background-color: #e9e9e9;
}
.tab-layout {
  border-bottom: solid 1px #e9e9e9;
}
.tab-view {
  flex: 1;
  line-height: 48px;
  text-align: center;
  color: #232323;
  font-size: 18px;
  font-weight: 600;
  font-family: PingFangSC-Medium;
}
.tab-st {
  color: rgb(123, 14, 225);
}
.content-box {
  padding: 0 48px;
}
.cell-box {
  height: 48px;
  align-items: flex-end;
  padding-bottom: 6px;
  border-bottom: solid 1px #f3f3f3;
}
.cell-label {
  font-size: 16px;
  font-family: PingFangSC-Medium;
  min-width: 96px;
}
.join-btn {
  height: 48px;
  line-height: 48px;
  margin: 24px 48px 16px 48px;
  border-radius: 10px;
  background-color: blueviolet;
}
.join-str {
  color: white;
  font-size: 18px;
  font-weight: 600;
  font-family: PingFangSC-Medium;
  text-align: center;
}
</style>
