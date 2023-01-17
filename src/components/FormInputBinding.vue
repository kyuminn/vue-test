<template>
  <div>
    <input type="text" v-model="msg1">
    <br>
    <p style="white-space: pre-line;">{{ msg2 }}</p>
    <br>
    <textarea v-model="msg2" placeholder="multiple lines"></textarea>
    <br>
    <input type="checkbox" v-model="isChecked">{{isChecked}}
    <br>
    <input type="checkbox" v-model="checkedNames" value="jack">jack
    <input type="checkbox" v-model="checkedNames" value="abby">abby
    <input type="checkbox" v-model="checkedNames" value="tim">tim
    {{checkedNames}}
    <div id="names" v-for="(name,i) in checkedNames" :key="i">{{ i+1}} : {{ name }}</div>
    <br>
    1.<input type="radio"  v-model="picked">
    2.<input type="radio" value="Two" v-model="picked">
    <br>
    picked : {{ picked }}
  <br>
    <!--vue에서 selectbox 안에 option value를 정하지 않으면 option 태그 사이에 적은 문자열이 value로 들어가는 듯. -->
    <select v-model="selected">
      <option disabled value="">선택해주세요</option>
      <option value="aa">A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
    </select>
    selected: {{ selected }}
    <br><br>
    <select v-model="selectedOptionData" multiple="true">
      <option v-for="(data) in optionData" :key="data.id" :value="data.name">{{ data.name }}</option>
    </select>
    <br>
    {{selectedOptionData }}
    <br>
    <input type="checkbox" v-model="checkboxData" value="this is value" @change="getData">
    {{ checkboxData }}
    <br>
    <input type="radio" v-model="radioData" :value="radioValue">
    {{ radioData }}
    <br>
    <select v-model="selectData">
      <option :value="{number:123}">123</option>
    </select>
    {{selectData.number}}
    <br>
    ==================================================================================================== <br>
    실시간 입력 연습 <br>
    v-model 이용
    <input type="text" v-model="message1"> 실시간 입력값{{ message1 }}
    <br>
    @input 이용
    <input type="text" @input="inputData">{{message2}}
    ==================================================================================================== <br>
    v-model lazy test : <input type="text" v-model.lazy="lazyTest">{{lazyTest}} <br> <br>
    v-model number test : <input type="text" v-model.number="age"> {{ age }} <br> <br> <!-- 012 입력시 12로 -->
    v-model trim test : <input type="text" v-model.trim="trimTest">{{ trimTest }}
  </div>
  <!--사용자단에 표출되는 데이터와 실제 백으로 보내야할 데이터 값이 다른 경우가 있기 때문에 select 에서도 나눠놓는 듯..-->
</template>

<script>
export default {
  name: "FormInputBinding",
  methods:{
    getData(e){
      alert(e.target.value)
    },
    inputData(e){
      this.message2= e.target.value
    }
  },
  data(){
    return{
      msg1:'message one',
      age:'',
      message1:'',
      message2:'',
      msg2:'',
      isChecked:false,
      checkedNames:[],
      picked:'',
      selected:'',
      setDefault:'selected',
      optionData:[
        {'id':'idx1','name':'john'},{'id':'idx2','name':'kelly'},{'id':'idx3','name':'leigh'}
      ],
      selectedOptionData:[],
      checkboxData:[],
      checkValue:"gg",
      radioData:'',
      radioValue:'aaa',
      selectData:'',
      lazyTest:'',
      trimTest:''
    }
  }
}
</script>

<style scoped>

</style>