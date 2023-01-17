<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "WatchComponent",
  data(){
    return{
      message:'Watch Test'
    }
  },
  mounted() {
    this.message = 'Mounted Watch Test';
    console.log('index:'+this.message.indexOf('$'));
  },
  watch:{
    // message:function (){
    message(){
      console.log('watch called!');
      console.log(this.message);
    }
  }
}
</script>

<style scoped>

</style>