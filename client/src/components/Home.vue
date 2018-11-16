<template>
  <div class="hello">
    <div class="header">
     <h2 class="name">DECHAWAT KESORNCHAN</h2>
    </div>

    <h1>{{ msg }}</h1>
    <img class="logo" src="../images/logo.png" alt="" height=80px width=80px>
    <img class="logo" src="../images/nodejs.png" alt="" height=80px width=120px>
    <img class="logo" src="../images/postgresql.png" alt="" height=80px width=90px>

    <div>
      <h2>Description</h2>
      
      <p>Hello everyone! I created this app for practicing my Vue.js skills <br> combined
        with Node.js, Express.js and postgreSQL database. If you have any suggestion,<br> please
        contact me via my contact information in my profile.
      </p>
    </div>

    <div class="navi">
      <li class="nav-item">
        <router-link to="/monsters">Monsters</router-link>
      </li>  
      <li class="nav-item">
        <router-link to="">Library</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/profile">Profile</router-link>
      </li>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to My First Vue App'
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: bold;
}

.proPic{
  height: 200px;
  width: 260px;
  margin: 20px 0px;
  border-radius: 20px;
}

.navi{
  background: lightgray;
  display: flex;
  justify-content: space-around;
  margin: 40px 0 0 0;
  padding:10px;
}

.navi a{
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.header{
  background: lightgray;
  display: flex;
  align-items: flex-start;
  padding:10px;
}

.name{
  margin: 0 0 0 50px;
}

.logo{
  margin: 20px 40px;
}

</style>
