<template>
  <div>
    <h1 v-if="false">v-if Testing</h1>
    <h1 v-else-if="true">v-if-else Testing</h1>
    <h1 v-else>v-else Testing</h1>
    <h1 v-show="false">v-show Testing</h1>
  </div>
</template>

<script>
export default {
  name: "ConditionRenderComponent"
}
</script>

<style scoped>

</style>