<template>
<div>
    <div class="navi">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>  
      <li class="nav-item">
        <router-link to="">Library</router-link>
      </li>
      <li class="nav-item">
       <router-link to="">Profile</router-link>
      </li>
    </div>

    <h1>Monsters's list</h1>
    <InputMonsters />
    
    <div class="tableMonsters">
        <div class="listHeader">
            <span>Name</span>
            <span>Personality</span>
        </div>
        <ul class="listMonsters">
            <li v-for="monster in monsters" :key="monster.id" class="itemMonster">
             <span>{{monster.name}}</span><span>{{monster.personality}}</span> 
             <button type="button" @click="deleteMonster(monster, monster._id)" class="delete">x</button>
            </li>
        </ul>
    </div>
   
    <h2>Total {{monsters.length}} monsters</h2>
    
</div>

</template>

<script>
import axios from 'axios'
import InputMonsters from './InputMonsters'

export default {

  name: 'Monsters',
  components: {
    InputMonsters
  },
  data () {
    return {
      monsters: [] ,
    }
  },
  mounted() {
      axios
      .get('http://localhost:3000/monsters')
      .then((response) => {
          this.monsters = response.data
      })
  },
  methods: {
      deleteMonster: function(monsters, id){
        axios
        .delete('http://localhost:3000/monsters/'+ monsters.id)
        .then(response => {
            this.monsters.splice(id, 1)
        })
       window.location.reload()
      }
  }
}
</script>

<style scoped>
.tableMonsters{
  border-bottom: 1px solid lightgray;
}

.listHeader{
    background: lightgray;
    display: grid;
    grid-template-columns:  1fr 1fr;
}

.listMonsters li{
    list-style: none;
    display: grid;
    grid-template-columns:  1fr 1fr 0.05fr;
    margin-bottom: 10px;
}

.navi{
  background: lightgray;
  display: flex;
  justify-content: space-around;
  margin: 0 0 20px 0;
  padding:10px;
}

.navi a{
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.delete{
    color:red;
    display:none;
    position:absolute;
    right:40px;
}

.delete:hover {
    cursor: pointer;
}

.itemMonster:hover .delete{
 display: inline;
}

.itemMonster:hover{
    font-weight: bold;
}
</style>
