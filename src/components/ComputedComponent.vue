<template>
<div>
  {{message}}<br>
  {{message.split('').reverse().join("")}}<br>
  {{reversed}}<br>
  {{reversed}}<br>
  {{this.$store.state.mainMessage}}<br>
  {{ reversedMethod() }}
  {{ reversedMethod()}}<br>
  <br>
  {{ modifiedMsg }}<br> <!--computed 안의 state 호출 시 get 함수가 default  -->
  <button @click="modifiedMsg='@@'">setter 함수 테스트</button><!--set 함수 호출됨 -->
  <br>
  <div v-for="evenNum in evenNumbers" :key="evenNum">{{evenNum}}</div>
<!--  <div v-for="num in numbers" :key="num">{{num}}</div>-->
</div>
</template>

<script>
export default {
  name: "ComputedComponent.vue",
  computed:{
    // reversed:function (){
    reversed(){
      console.log('computed called!')
      return this.message.split('').reverse().join('')
    },
    modifiedMsg:{
      get(){
        // modifiedMsg = this.message.at(0) 과 같은 표현인가 ?
        return this.message.at(0);
      },
      set(value){
        console.log(value);
      }
    },
    evenNumbers(){
      return this.numbers.filter((v)=>{
        return v % 2 === 0
      })
    }
  },
  data(){
    return{
      message:'Hello world',
      numbers:[1,2,3,4,5]
    }
  },
  methods:{
    reversedMethod(){
      console.log('method called!')
      return 'world'
    }
  }

}
</script>

<style scoped>

</style>