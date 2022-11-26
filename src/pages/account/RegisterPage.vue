<template>
  <div class="page login">
    
  </div>
</template>
<script>

export default {
  components: { },
  data() {
    return {
      logimBg: '',
    };
  },
  mounted() {},
  methods: {
    
  },
};
</script>
<style scoped>
.login {
  flex: 1;
}
.login-bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-size: contain;
}
.login-grid {
  z-index: 3;
  display: grid;
  padding: 16px 16px;
  grid-gap: 24px 24px;
  justify-content: center;
  grid-template-columns: repeat(4, 320px);
  background-color: rgba(0, 0, 0, 0.2);
}
.login-grid-item {
  min-width: 320px;
  min-height: 240px;
  border-radius: 8px;
  background-color: rgba(145, 65, 220, 0.9);
  transition: all 0.3s ease-in-out;
  justify-content: flex-end;
}
.login-grid-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
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
