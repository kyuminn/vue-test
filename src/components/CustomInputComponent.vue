<template>
<div>
  <input type="text" @input="$emit('inputEvent',$event.target.value)">
  {{ value }}
</div>
</template>

<script>
export default {
  name: "CustomInputComponent",
  props:{
    value:{
      type:String,
      required:false,
      default:''
    }
  }
}
</script>

<style scoped>

</style>