<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="addList" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  computed:{
    ...mapGetters(['list'])
  },
  mounted() {
    // this.addList()
  },
  methods: {
    addList() {
     console.log(this.list)
      this.$store.dispatch('home/addItem', { id: 0, thing: '睡觉' })
      this.$store.dispatch('home/addItem', '名字')
      console.log(this.$store.state.home.list)
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
