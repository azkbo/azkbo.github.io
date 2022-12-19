<template>
  <AppToolbar :onBindTab="onToBarTab" />
  <router-view></router-view>
</template>

<script>
import AppToolbar from "./components/AppToolbar.vue";

export default {
  name: "App",
  components: { AppToolbar },
  mounted() {},
  methods: {
    onToBarTab(path) {
      this.$router.push({ path });
    }
  },
};
</script>

<style>
#app {
  /* min-width: 100%; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
