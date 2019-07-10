<template>
  <div>
      <div>子：{{inputVal}}</div>
      <input type="text" 
        v-bind="$attrs"
        :value="inputVal"
        @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'base-input',
  props:{
        inputVal:{
            type: String,
            default: "我是初始值"
        },
  },
  data(){
      return {
        // inputVal:"我是初始值"
      }
  },
  components: {
      
  }
}
</script>
