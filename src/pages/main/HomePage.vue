<template>
  <!-- 首页 -->
  <div class="page home">
    <img class="home-bg" :src="homeBg" />
    <!-- 列表 -->
    <div class="flex home-grid" v-if="roomList.length > 0">
      <div v-for="room in roomList" :key="room.id">
        <div
          class="column home-grid-item"
          @click="openGameInfo(room.status, room.code)">
          <div class="row ai-center item-info">
            <h3 class="flex">{{ room.name }}</h3>
            <span>{{ transformStatus(room.status) }}</span>
            <span v-if="room.status == 1">{{ room.score }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 空 -->
    <div class="column center empty-box" v-else>
      <img :src="empty_ic" @click="showCreateDig" />
      <h1 style="margin-bottom: 500px">
        尚未开始游戏，点击右下角按钮创建一个吧！
      </h1>
    </div>
    <!-- 按钮 -->
    <div class="flex row center float-button" @click="showCreateDig">开 始</div>

    <CreateGame
      v-if="showDialog == 1"
      :index="tabIndex"
      :onChange="createOrJoinGame"
    />
    <GameRoomInfo
      v-if="showDialog == 2"
      :info="roomInfo"
      :onClose="onDigClose"
    />
  </div>
</template>
<script>
import Images from "../../assets/index";
import CreateGame from "../../components/CreateGame.vue";
import GameRoomInfo from "../../components/GameRoomInfo.vue";
import Consts from "../../modules/constant/index";

export default {
  components: { CreateGame, GameRoomInfo },
  data() {
    return {
      showDialog: 0, // 0无弹窗；1创建房间弹窗；2显示房间信息
      tabIndex: 0, // 0创建房间；1进入房间
      roomInfo: {},
      roomList: [{id: 0,status: 0,score: 0, name: '东部', code: 0}],
      homeBg: Images.tanks_bg,
      empty_ic: Images.empty,
    };
  },
  mounted() {},
  methods: {
    showCreateDig() {
      this.showDialog = 1;
    },

    onReloadEvent() {
      this.showDialog = 1;
    },

    onNavigateEvent() {
      this.showDialog = 1;
    },

    onBackEvent() {
      this.showDialog = 1;
    },

    onDigClose() {
      this.showDialog = 0;
    },

    transformStatus(status) {
      return status == 0 ? "招募中" : status == 1 ? "进行中" : "已结束";
    },

    // 进入游戏
    openGameInfo(status, code) {
      if (status == 1) {
        Consts.roomCode = code;
        this.$router.push({ path: `game/${code}` });
      } else {
        this.showDialog = 1;
        this.tabIndex = 1;
      }
    },

    // 获取房间列表
    async getRoomList() {
      
    },

    // 创建或加入游戏
    async createOrJoinGame(e) {
      this.showDialog = 0;
      Consts.userName = e.userName;
    },
  },
};
</script>
<style scoped>
.home {
  flex: 1;
}
.home-bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-size: contain;
}
.home-grid {
  z-index: 3;
  display: grid;
  padding: 16px 16px;
  grid-gap: 24px 24px;
  justify-content: center;
  grid-template-columns: repeat(4, 320px);
  background-color: rgba(0, 0, 0, 0.2);
}
.home-grid-item {
  min-width: 320px;
  min-height: 240px;
  border-radius: 8px;
  background-color: rgba(145, 65, 220, 0.9);
  transition: all 0.3s ease-in-out;
  justify-content: flex-end;
}
.home-grid-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}
.item-info {
  height: 52px;
  padding: 0 16px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.float-button {
  z-index: 998;
  right: 48px;
  bottom: 128px;
  position: fixed;
  width: 96px;
  height: 96px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  border-radius: 50%;
  background-color: blueviolet;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);

  animation-name: float_btn;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-duration: 2s;
}
@keyframes float_btn {
  from {
    scale: 1;
  }
  to {
    scale: 1.2;
  }
}
.empty-box {
  z-index: 3;
  height: 100vh;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
