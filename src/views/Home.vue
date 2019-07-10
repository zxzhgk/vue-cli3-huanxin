<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <base-input @input.native="funa"></base-input>
    <div>父：{{inputValue}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import baseInput from '@/components/baseInput.vue'

export default {
  name: 'home',
  data(){
    return{
      inputValue:"我是父级"
    }
  },
  components: {
    // HelloWorld,
    'base-input':baseInput
  },
  methods:{
    funa(){
      console.log("我触发了")
    }
  }
}
</script>
