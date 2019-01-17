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
       <router-link to="/profile">Profile</router-link>
      </li>
    </div>

    <h1>Monsters's list</h1>
    <InputMonsters />
    
    <div class="tableMonsters">
        <div class="listHeader">
            <span>Name</span>
            <span>Personality</span>
        </div>
        <ul>
            <li v-for="monster in monsters" :key="monster.id" class="itemMonster">
            <div class="listMonsters" v-if="editing===false">
             <span>{{monster.name}}</span><span>{{monster.personality}}</span>            
             <button type="button" @click="deleteMonster(monster, monster._id)" class="delete">
                <img src="../images/trash.png" alt="" height=15px width=15px>
             </button>
            </div>
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
      editing: false
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
      },
      editMonster: function(id){
          this.editing = !this.editing
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

.listMonsters{
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

.edit {
    background: white;
    color:red;
    border:none;
    display:none;
    position:absolute;
    right:50px;
}

.delete{
    border:none;
    background: white;
    color:red;
    display:none;
    position:absolute;
    right:20px;
}

.delete, .edit:hover {
    cursor: pointer;
}

.itemMonster {
    list-style:none;
}


.itemMonster:hover .delete{
 display: inline;
}

.itemMonster:hover .edit{
 display: inline;
}

.itemMonster:hover{
    font-weight: bold;
}

</style>
