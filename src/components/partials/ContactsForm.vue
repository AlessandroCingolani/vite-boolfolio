  <script>
  import axios from "axios";
  import {store} from '../../data/store';

  export default {
    name:'ContactsForm',
    data() {
      return{
        store,
        name:'',
        email:'',
        message:''
     }

    },
    methods: {
      sendForm(){
        console.log('Sending');
        const data = {
          name:this.name,
          email:this.email,
          message:this.message,
        }
        console.log(data);
        axios.post(store.apiUrl + 'send-email',data)
          .then(response => {
            console.log(response.data);
          })
      }
    }
  }
  </script>


<template>
 <form @submit.prevent="sendForm()">
    <div>
      <label for="name" ><strong>Name</strong> </label>
      <input v-model="name" type="text" id="name" name="name" >
    </div>
    <div>
      <label for="email" ><strong>Email</strong> </label>
      <input v-model="email" type="text" id="email" name="email" >
    </div>
    <div>
      <label for="message" ><strong>Message</strong> </label>
      <textarea v-model="message" id="message" name="message" ></textarea>
    </div>
    
    <button type="submit">Submit</button>
  </form>
</template>


<style lang="scss" scoped>

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
  }

</style>