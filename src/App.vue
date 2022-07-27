<template>
  <v-app>
    <v-main>
      <Header v-if="currentPath !== '/login'" />
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Header from "./components/Header";
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
import "./App.css";
export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    currentPath: "",
  }),
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.currentPath = this.$route.path;
      }
    );
  },
};
</script>
<style scoped>
.wrapper {
  margin-top: 70px;
}
</style>
