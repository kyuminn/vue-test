<template>
  <div>
<!--    <div v-for="(num,i) in numList" :key="num">{{i+1}}:{{ num }}</div>-->
    <div v-for="obj in objList" :key="obj.id">{{obj.name}} 님의 나이는 {{ obj.age}}입니다</div>
<!--    <div v-for="obj of objList" :key="obj.id">{{obj.name}} 님의 나이는 {{ obj.age}}입니다</div>-->
    <div v-for="(val,key) in obj" :key="key">{{key}} : {{val}}</div>
    <!--중첩for문-->
    <div v-for="(arr,i) in aoa" :key="i">
      <div v-for="(value,i) in arr" :key="i">{{value}}</div>
    </div>
    <!-- 중첩for문에서 computed를 사용하기 어려운 경우 이 방식 사용 v-for 안에 method도 사용할 수 있군..-->
    <div v-for="(arr,i) in aoa" :key="i">
      <div v-for="(value,i) in even(arr)" :key="i">{{value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListRenderComponent",
  methods:{
    even(arr){
      return arr.filter((v)=>{
        return v % 2 ===0
      })
    }
  },
  data(){
    return{
      numList:[1,2,3],
      objList:[{"id":1,"name":"hong","age":20},{"id":2,"name":"yun","age":37}],
      obj:{"id":3,"name":"park","age":25},
      aoa:[[10,11,12,13],[14,15,16,17]]
    }
  },
  mounted() {
    // array = 배열
    // filter(),concat(),slice(),map() 기존 array에 변화를 주지 않고 조건에 맞는 새로운 array를 return

    // this.objList.filter((v)=>{
    //   if(v.id===1){
    //     console.log(v.id+'\'s name is '+v.name)
    //   }
    // })

    // push(),pop(),shift(),unshift(),splice(),sort(),reverse() 기존 array를 직접 변경
    // this.objList.reverse();
    // this.objList.push({"id":3,"name":"choi","age":34})
    // this.objList.pop()
    // this.objList.splice(0,1,{"id":4,"name":"se","age":88})
    console.log(JSON.stringify(this.objList))
  }
}
</script>

<style scoped>

</style>