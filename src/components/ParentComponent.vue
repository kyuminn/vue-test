<template>
  <div>
    <div :style="{fontSize : postFontSize +'em'}">
    <!--리스트를 통째로 넘길수도 있고(:list), 리스트 안에 있는 객체개수만큼 루프를 돌아서 일일이 객체를 넘길 수도 있음(:sample)  -->
    <child-component
        v-for="sample in sampleList"
        :key="sample.id"
        :sample="sample"
        :list="sampleList"
        @enlarge-text="postFontSize += 0.1"
    >
    </child-component>
    </div>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "ParentComponent",
  mounted() {
    // cf
    // 객체타입으로 이루어진 배열의 경우 각 객체의 특정 column value를 얻어오고 싶으면 map() 이용하기!
    // 아래 함수를 map 대신 filter로 바꾸면 결과가 다르게 나옴
    // 이유는 https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-map-%EA%B3%BC-filter-%EC%B0%A8%EC%9D%B4 참고
    this.testList = this.sampleList.map(row=>row.title);
    console.log(JSON.stringify(this.testList));
  },
  components: {ChildComponent},
  data(){
    return{
      sampleList:[
        {id:1,title:'title 1'},
        {id:2,title:'title 2'},
        {id:3,title:'title 3'},
        {id:4,title:'title 4'}
      ],
      testList:[],
      postFontSize:1
    }
  }
}
</script>

<style scoped>

</style>