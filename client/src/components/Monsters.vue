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
    <div class="tableMonsters">
        <div class="listHeader">
            <span>Name</span>
            <span>Personality</span>
        </div>
        <ul class="listMonsters">
            <li v-for="monster in monsters" :key="monster.id">
             <span>{{monster.name}}</span><span>{{monster.personality}}</span>
            </li>
        </ul>
    </div>
    
</div>
 


</template>

<script>
import axios from 'axios'

export default {

  name: 'Monsters',
  data () {
    return {
      monsters: {},
    }
  },
  mounted() {
      axios
      .get('http://localhost:3000/monsters')
      .then((response) => {
          this.monsters = response.data
      })
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
    grid-template-columns:  1fr 1fr;
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

</style>
