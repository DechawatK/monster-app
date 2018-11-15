<template>
  <div class="inputMonsters">
      <h2>{{msg}}</h2>

      <form action="">
          <input type="text" name="name" placeholder="name" 
           v-model="monsters.name">
          <input type="text" name="personality" placeholder="personality" 
           v-model="monsters.personality">
          <button @click="submit">Submit</button>
      </form>
  </div>
   
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      monsters:[
          {
          name: '',
          personality:''
          }
      ],
      msg: 'Please input monsters',
    }
  },
  methods:{
    submit: function() {
        axios
        .post('http://localhost:3000/monsters', {name: this.monsters.name, 
        personality: this.monsters.personality},
        )}
  }
}
</script>

<style scoped>
form{
    margin-bottom: 20px;
}

</style>
