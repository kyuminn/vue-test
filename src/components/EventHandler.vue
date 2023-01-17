<template>
  <div>
    <button v-on:click="greet">Greet</button><br>
    <button @click.stop="sayMsg('message is ...')">메시지</button>
    <button @click.once="add">{{num}}</button>
    <form @submit.prevent="toNaver"><!--prevent 연습, submit 할때 pay reload 되지 않도록 ! -->
      <input type="submit" value="제출">
    </form>
    <input type="text" v-on:keyup.enter="keyUpTest"><!--enter 자리에 enter의 keyCode인 13을 써도 상관없음-->
  </div>
</template>

<script>
export default {
  name: "EventHandler",
  data(){
    return{
      num:0
    }
  },
  methods:{
    greet(){
      // alert('Hello vue js!')
      alert(event.target.tagName);
      if(event){
        console.log(event.target.tagName)
      }
    },
    add(){
      this.num+=1;
    },
    sayMsg(msg){
      alert(msg);
    },
    toNaver(){
      alert('toNaver!')
    },
    keyUpTest(){
      alert('keyUp Test!!')
    },
  }
}
</script>

<style scoped>

</style>