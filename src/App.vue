<template>
  <div id="app">
    <Home v-if="view === 'home'" @generate-set="setConfig"/>
    <SetView
      :config="config"
      v-if="view === 'set-view'"
      @close="showView('home')"/>
  </div>
</template>

<script>
import Home from "./components/Home.vue"
import SetView from "./components/SetView.vue"

export default {
  name: "App",
  data () {
    return {
      view: "home",
      config: {
        heroes: 5,
        villages: 13,
        monsters: 10
      }
    };
  },
  components: {
    Home,
    SetView
  },
  methods: {
    setConfig (config) {
      this.config = { ...this.config, ...config };
      this.showView('set-view');
    },
    showView (view) {
      this.view = view;
    }
  }
}
</script>

<style lang="scss">
  body {
    background: #292C33;
    color: white;
  }
</style>
