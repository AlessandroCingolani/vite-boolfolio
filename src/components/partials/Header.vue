  <script>

  import axios from "axios";

  import { store } from "../../data/store";

  export default {
    name:'Header',
    data() {
      return {
        tosearch: ''
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrl + 'research/' + this.tosearch)
        .then(results => {
          store.projects = results.data.data;
        })
      }
    }
  }
  </script>


<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link  :to="{name:'Home'}">Home</router-link>
        </li>
        <li>
          <router-link  :to="{name:'About'}">About</router-link>
        </li>
        <li>
          <router-link :to="{name:'Projects'}">Projects</router-link>
        </li>
        <li>
          <router-link :to="{name:'Contacts'}">Contacts</router-link>
        </li>
      </ul>
      <input 
      type="text" 
      placeholder="Search project"
      v-model="tosearch"
      @keyup.enter="getApi"
      >
    </nav>

  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.313) ;
 nav {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  input {
    margin-left: 20px;
    width: 300px;
    height: 35px;
    border: none;
    border-radius: 5px;
    color: green;
    font-size: 20px;
    padding: 0 10px;
  }
   ul{
     height: 100%;
     list-style: none;
     li{
       display: inline-block;
       margin: 0 10px;
       padding-top: 20px;
       a{
        color: black;
        font-size: 1.3rem;
        height: 100%;
        text-decoration: none;
        &:hover{
          color: white;
          text-decoration: underline;
        }
        &.active{
          color: green;
        }
      }
     }
   }
 }
}
</style>