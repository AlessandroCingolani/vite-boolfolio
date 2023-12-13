  <script>
  import axios from "axios";
  import {store} from '../../data/store';
  import Loader from "../partials/Loader.vue";

  export default {
    name:'ContactsForm',
    components:{
      Loader
    },
    data() {
      return{
        store,
        name:'',
        email:'',
        message:'',
        success:false,
        errors:{
          name:[],
          email:[],
          message:[]
        },
        isLoading:false,
     }

    },
    methods: {
      sendForm(){
        this.isLoading = false;
        const data = {
          name:this.name,
          email:this.email,
          message:this.message,
        }
        
        console.log(data);
        axios.post(store.apiUrl + 'send-email',data)
          .then(response => {
            console.log(response.data);
            this.success = response.data.success;
            this.errors = response.data.errors
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
  </script>


<template>
 <form v-if="!success" @submit.prevent="sendForm()">
    <div>
      <label for="name" ><strong>Name</strong> </label>
      <input v-model="name" type="text" id="name" name="name" >
      <p class="error-msg" v-for="(error,index) in errors.name" :key="index.error">{{ error }}</p>
    </div>
    <div>
      <label for="email" ><strong>Email</strong> </label>
      <input v-model="email" type="text" id="email" name="email" >
      <p class="error-msg" v-for="(error,index) in errors.email" :key="index.error">{{ error }}</p>
    </div>
    <div>
      <label for="message" ><strong>Message</strong> </label>
      <textarea v-model="message" id="message" name="message" ></textarea>
      <p class="error-msg" v-for="(error,index) in errors.message" :key="index.error">{{ error }}</p>
    </div>
    
    <button type="submit">Submit</button>
  </form>
  <div class="sended" v-else>
    <Loader v-if="isLoading"/>
    <h1 v-else>Email sended correctly!</h1> 
  </div>

</template>


<style lang="scss" scoped>

  .sended {
    margin-top:40px ;
    h1 {
      color: green;
    }
  }

  form{
    min-width: 500px;
    border: 1px solid black;
    background-color: #d2c8c8;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    input {
      margin: 10px 0;
      padding-left: 10px;
      display: block;
      width: 100%;
      height: 30px;
      border-radius: 10px;
    }
    textarea {
      padding: 10px;
      display: block;
      height: 200px;
      width: 100%;
      margin: 10px 0;
    }
    button {
      padding:5px 10px ;
      &:hover {
        scale: 1.1;
        cursor: pointer;
      }
    }
    .error-msg {
      color: red;
      margin: 10px 0;
      font-weight: 700;
    }
  }

</style>