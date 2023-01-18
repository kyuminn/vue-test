<template>
  <div>
    <div :style="{fontSize : postFontSize +'em'}">
    <!--
    1. 리스트를 통째로 넘길수도 있고(:list), 리스트 안에 있는 객체개수만큼 루프를 돌아서 일일이 객체를 넘길 수도 있음(:sample)
    2. 자식 컴포넌트에서 $emit의 두번째인자로 데이터를 보낼 경우 ,$event 로 받거나 method로 받을 수있음. method로 받을때 $event를 명시해도 되고 안해도 됨.
    " the value will be passed as the first parameter of that method"
      -->
    <child-component
        :txt="txt"
        v-for="sample in sampleList"
        :key="sample.id"
        :sample="sample"
        :list="sampleList"
        @enlarge-text="postFontSize += $event"
        @emitMethod="emitM()"
        :dynamicPropEx="sample.id + ' is '+ sample.title"
        v-bind="sampleObj"
    >
    </child-component>
    </div>
    <br><br>
    <custom-input-component :value="modelMsg" @inputEvent="modelMsg=$event"></custom-input-component>
    {{ modelMsg }}
    <br>
    <br>
    <slot-component>여기에 slot-component에 정의된 slot 태그에 대신 들어갈 내용을 작성 - data 넣어도 되고, 대체할 컴포넌트를 넣어도 됨!</slot-component>

    <component :is="this.componentId"></component>
    <a :is="href ? 'a':'span'" href="https://www.naver.com">test</a>
    <!--global component 예시 -->
    <global-component></global-component>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
import CustomInputComponent from "@/components/CustomInputComponent";
import SlotComponent from "@/components/SlotComponent";
export default {
  name: "ParentComponent",
  methods:{
    emitM(msg){
      alert(msg)
    }
  },
  mounted() {
    // cf
    // 객체타입으로 이루어진 배열의 경우 각 객체의 특정 column value를 얻어오고 싶으면 map() 이용하기!
    // 아래 함수를 map 대신 filter로 바꾸면 결과가 다르게 나옴
    // 이유는 https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-map-%EA%B3%BC-filter-%EC%B0%A8%EC%9D%B4 참고
    this.testList = this.sampleList.map(row=>row.title);
    console.log(JSON.stringify(this.testList));
  },
  components: {SlotComponent, CustomInputComponent, ChildComponent},
  data(){
    return{
      sampleList:[
        {id:1,title:'title 1'},
        {id:2,title:'title 2'},
        {id:3,title:'title 3'},
        {id:4,title:'title 4'}
      ],
      testList:[],
      txt:'hello world',
      postFontSize:1,
      modelMsg:'',
      componentId:'CustomInputComponent',
      href:true,
      sampleObj:{
        id:100,
        name: 'sampleName'
      }
    }
  }
}
</script>

<style scoped>

</style>