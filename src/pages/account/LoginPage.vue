<template>
  <div class="page login">
    <img class="login-bg" alt="背景" :src="logimBg" />
    <div class="login-box">
      <div class="item row">
        <span class="label">用户名</span>
        <input
          class="input"
          maxLength="24"
          placeholder="请输入用户名"
          @blur="onNameBlur"
        />
      </div>
      <div class="item row">
        <span class="label">密 码</span>
        <input
          class="input"
          placeholder="请输入密码"
          maxLength="24"
          type="password"
        />
      </div>
      <div class="login-btn button" @click="onLogin">登 录</div>
      <div class="row alert-box">
        <span class="alert-text button">忘记密码?</span>
        <span class="alert-text button">注册账号</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      logimBg:
        "https://cn.bing.com/th?id=OHR.Invergarry_ZH-CN9013535988_1920x1080.jpg",
    };
  },
  mounted() {},
  methods: {
    onNameBlur(e) {
      console.log(e);
    },
    onLogin() {},
  },
};
</script>
<style scoped>
.login {
  min-width: 600px;
  align-items: flex-end;
  justify-content: center;
}

.login-bg {
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.login-box {
  margin-top: 10%;
  margin-right: 10%;
  z-index: 3;
  width: 330px;
  height: 240px;
  padding: 24px 48px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.2s ease-in-out;
  opacity: 0.7;
}

.login-box:hover {
  transform: translateY(-5px);
  opacity: 1;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
}

.item {
  height: 56px;
  margin-bottom: 8px;
  align-items: center;
}
.label {
  min-width: 72px;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
}
.input {
  flex: 1;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  border: none;
  background-color: transparent;
}
.input:hover {
  border: none;
}
.login-btn {
  height: 50px;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  margin-top: 32px;
  margin-bottom: 16px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.9);
}
.alert-box {
  justify-content: space-between;
}
.alert-text {
  color: #636363;
  font-size: 14px;
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
</style>
