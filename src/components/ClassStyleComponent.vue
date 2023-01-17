<template>
  <div>
      <div v-bind:class="{test : isActive}">Class Binding Test</div>
      <div class="first" v-bind:class="{game : isActiveMethod()}" >Class Binding Test(Method)</div>
      <div v-bind:class="['test','class']">Array Class Binding Test</div>
      <div v-bind:class="[false?'test':'notest']">Conditional Class Binding Test</div>
      <div v-bind:style="activeStyle">Style Binding Test</div>
  </div>
</template>

<script>
export default {
  name: "ClassStyleComponent",
  data(){
    return{
      isActive : false,
      activeStyle:{
        fontSize:'20px',
        color:'red'
      }
    }
  },
  methods:{
    isActiveMethod(){
      return true;
    }
  }
}
</script>

<style scoped>

</style>