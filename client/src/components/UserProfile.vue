<template>
<div class="userProfile">
   <h1>User Profile</h1> 
   <img class="proPic" src="../images/jojo.jpg" alt="">
   <div>
       <b>Name</b>: {{userprofile[0].name}} <br>
       <b>Lastname</b>: {{userprofile[0].lastname}} <br>
       <b>Age</b>: {{userprofile[0].age}} <br>
       <b>Email</b>: {{userprofile[0].email}} <br>
       <b>Mobile</b>: {{userprofile[0].mobile}}
   </div>
   <router-link to="/"><img class="homePic" src="../images/home.png" 
    alt="homepage"></router-link>
</div>
    
    
</template>

<script>
import axios from 'axios'
export default {

data () {
    return {
      userprofile: [] ,
    }
  },
  mounted() {
      axios
      .get('http://localhost:3000/userprofile')
      .then((response) => {
          this.userprofile = response.data
      })
  }  
}
</script>

<style scoped>
.proPic{
    height: 280px;
    width:350px;
    border-radius: 30px;
    margin: 30px 0;
}

.homePic{
    height:40px;
    width: 40px;
    margin-top: 30px;
}

</style>


