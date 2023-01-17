<template>
  <div>
<!--    <p>{{ txt }}</p>-->
    <button @click="$emit('enlarge-text')">글씨 키우기</button>
    {{ sample.id }} :
    {{ sample.title}}
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  // props의 type이 Array나 Object 인 경우 함수형으로 default를 정의해 주어야 함.
  // why ? https://heewon26.tistory.com/337 (동일한 컴포넌트 사이에서 props가 공유되는 문제 발생함. 각각 독립적인 props를 유지하기 위해 필요) - data를 함수형으로 만들어서 return하는 것과 같은 이유
  // native가 아닌 참조형 데이터 타입은 원본을 참조,공유하기 때문에 함수로 만들어서 return해야 독립적으로 사용할 수 있는 듯.
  props:{
    list:{
      type:Array,
      required:false,
      default:()=>[]
    },
    sample:{
      type:Object,
      required:false,
      default:()=> ({id:100,title:'title 100'})
    }
    // txt:{
    //   type:String,
    //   default:'default value from child'
    // }
  }
}
</script>

<style scoped>

</style>