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
   
    <form action=""  class="commentHeader">
      <span>Comments</span>
      <input type="text" name="comment" placeholder="Write your comment here.."
      v-model="comment.text" class="commentBox">
      <button @click="submitComment">Submit</button>
    </form>
     
    <div class="textArea">
    <button @click="toggleComment()" v-if="toggle === false" class="hideBtn">
    Hide {{comment.length}} comments</button>
    <button @click="toggleComment()" v-if="toggle === true" class="hideBtn">
    Show {{comment.length}} comments</button>
     <span v-if="toggle === false">
       <li v-for="item in comment" :key="item.id" class="commentText">
       <span>{{item.text}}</span>
       <button type="button" class="deleteBtn" @click="deleteComment(item, item._id)">
        <img src="../images/trash.png" alt="" width=15px height=15px></button>    
      </li>  
     </span>  
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
      comment:[{text:''}],
      toggle: false
    }
  },
  mounted() {
      axios
      .get('http://localhost:3000/userprofile')
      .then((response) => {
          this.userprofile = response.data
      }),
      axios
      .get('http://localhost:3000/comment')
      .then((response) => {
          this.comment = response.data
      })
  },
  methods:{
      toggleComment: function(){
          this.toggle = !this.toggle
      },
       submitComment: function() {
        axios
        .post('http://localhost:3000/comment', {text: this.comment.text},
        console.log('clicked')
        )},
         deleteComment: function(comment, id){
        axios
        .delete('http://localhost:3000/comment/'+ comment.id)
        .then(response => {
            this.comment.splice(id, 1)
        })
       window.location.reload()
      }
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

.commentHeader{
    margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.commentHeader button{
    margin-left: 10px;
    background-color: lightgray;
    border-radius: 5px;
    height:25px;
    width:100px;
}

.commentBox{
    height: 40px;
    width:40vh;
    margin: 10px;
}

.commentText{
    border:1px solid lightgray;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 3fr 0.2fr;
    padding:10px 10px;
    margin: 10px;
    width: 290px;
    font-style: oblique;
    font-size: 0.9em;
}

.textArea{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
}

.hideBtn{
   background-color: white;
   border: none;
   margin-right:200px;
   text-decoration: underline;
   font-size: 0.8em;
}

.deleteBtn{
    background-color: white;
    border: none;
    color:red;
    width:20px;
    height: 22px;
    background-color: white;
}

</style>


