  
  <script>
  export default {
    name:'Header',
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
    </nav>

  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.313) ;
 nav {
  height: 100%;
  text-align: center;
   ul{
     height: 100%;
     list-style: none;
     li{
       display: inline-block;
       height: 100%;
       margin: 0 10px;
       a{
        color: black;
        font-size: 1.3rem;
        height: 100%;
        text-decoration: none;
        &.active{
          color: green;
        }
      }
     }
   }
 }
}
</style>